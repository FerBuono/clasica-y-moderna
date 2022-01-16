import * as React from 'react';
import { useState, useContext } from 'react';
import { Stepper, Box, Step, StepLabel, Button, Typography } from '@mui/material';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { UserContext } from '../../context/UserContext';
import { CurrencyContext } from '../../context/CurrencyContext';
import AddressForm from '../AddressForm/AddressForm';
import PaymentForm from '../PaymentForm/PaymentForm';
import styled from 'styled-components';

const steps = ['Shipping address', 'Payment details'];

export const Container = styled.div`
  background-color: white;
  box-shadow: 0 0 5px 0 grey;
  padding: 2rem 1rem;
  flex: 3;
  margin-right: 2rem;
`;

const HorizontalLinearStepper = ({cart}) => {
  
  const {user: [user]} = useContext(UserContext);
  const {currency, changeCartPrice} = useContext(CurrencyContext);
  const [activeStep, setActiveStep] = useState(0);
  const [campsFilled, setCampsFilled] = useState(false);
  const [data, setData] = useState({});
  
  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const FormSwitch = () => {
    switch(activeStep) {
      case 0: 
        return {
          component: <AddressForm data={data} setData={setData} setCampsFilled={setCampsFilled} user={user} />,
          label: "Shipping address", 
        }
      case 1:
        return {
          component: <PaymentForm data={data} setData={setData} setCampsFilled={setCampsFilled} />,
          label: "Payment Details", 
        }
      default:
        return;
    };
  };

  const handleBuy = () => {
    const today = new Date();
    const order = {
      buyer: {
        name: `${data.firstName} ${data.lastName}`,
        phone: data.phone,
        email: data.email,
        userId: user.id,
      },
      items: [
        ...cart
      ],
      date: `${today.getDate()>9?today.getDate():'0'+today.getDate()}/${(today.getMonth()+1)>10?today.getMonth()+1:'0'+(today.getMonth()+1)}/${today.getFullYear()}`,
      total: `${changeCartPrice(cart)}`
    };

    console.log(order)
    const db = getFirestore();
    const orders = collection(db, 'orders');
    addDoc(orders, order);
  };

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Typography variant="h6" gutterBottom sx={{m: '2rem 0'}}>{FormSwitch().label}</Typography>
      {FormSwitch().component}
      <Box sx={{ display: 'flex', flexDirection: 'row'}}>
        <Button
          color="primary"
          disabled={activeStep === 0}
          onClick={handleBack}
          variant='outlined'
          sx={{mr: 1}}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {activeStep === steps.length - 1
          ? <Button 
              onClick={handleBuy}
              color='primary'
              variant='contained'
              disabled={!campsFilled}
          >
            Pay {currency} {changeCartPrice(cart)}
          </Button>
          : <Button 
              variant='contained'
              color='primary'
              onClick={handleNext}
              disabled={!campsFilled}
          >
            Next
          </Button>
        }
      </Box>
    </Container>
  );
}

export default HorizontalLinearStepper