import * as React from 'react';
import { useState, useContext } from 'react';
import { Stepper, Box, Step, StepLabel, Button, Typography } from '@mui/material';
import { FirebaseClient } from '../../../firebase/client';
import { UserContext } from '../../../context/UserContext';
import { CurrencyContext } from '../../../context/CurrencyContext';
import AddressForm from './AddressForm/AddressForm';
import PaymentForm from './PaymentForm/PaymentForm';
import { CartContext } from '../../../context/CartContext';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Container } from './CheckoutFormStyle';

const steps = ['Shipping address', 'Payment details'];

const CheckoutForm = ({cart}) => {
  
  const {clear} = useContext(CartContext);
  const {user: [user]} = useContext(UserContext);
  const {currency, changeCartPrice} = useContext(CurrencyContext);
  const [activeStep, setActiveStep] = useState(0);
  const [campsFilled, setCampsFilled] = useState(false);
  const [data, setData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
  });
  const {enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate();
  const firebase = new FirebaseClient();
  
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
    const orderNumber = Date.now();
    firebase.addOrder(data, user, cart, currency, changeCartPrice(cart), today, orderNumber)
    clear();
    enqueueSnackbar(`Your purchase was successful! Order N°: ${orderNumber}`, {
      variant: 'success',
    });
    navigate('/orders');
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

export default CheckoutForm