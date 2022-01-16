import { TextField } from '@mui/material';
import styled from 'styled-components';
import { useEffect } from 'react';

export const Container = styled.form``;

export const InputContainer = styled.div`
    margin: 2rem 0;
    width: 100%;
`;

export const InputBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const PaymmentForm = ({data, setData, setCampsFilled}) => {

    const handleChange = (e) => {
        const input = e.target;
        setData({...data, [input.id]: input.value})
    };

    useEffect(() => {
        setCampsFilled(() => {
            return(document.getElementById('cardNumber').value.length > 0 && document.getElementById('cardExpiryDate').value.length > 0 && document.getElementById('cardName').value.length > 0 && document.getElementById('cardCVC').value.length > 0);
        });
    }, [data]);

    return (
        <Container>
            <InputContainer>
                <InputBox>
                    <TextField 
                        id="cardNumber" 
                        label="Card number" 
                        type="phone"
                        variant="standard" 
                        sx={{width:'70%', mb:2}} 
                        required 
                        defaultValue={data.cardNumber}
                        onChange={handleChange} />
                    <TextField 
                        id="cardExpiryDate" 
                        label="Expiry date" 
                        variant="standard" 
                        type="text" 
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => e.target.type = 'text'}
                        sx={{ml: 2, mb:2, width:'30%'}} 
                        required 
                        defaultValue={data.cardExpiryDate}
                        onChange={handleChange} />
                </InputBox>
                <InputBox>
                    <TextField 
                        id="cardName" 
                        label="Name in card" 
                        variant="standard" 
                        sx={{width:'70%', mb:2}} 
                        required 
                        defaultValue={data.cardName}
                        onChange={handleChange} />
                    <TextField 
                        id="cardCVC" 
                        label="CVC" 
                        variant="standard" 
                        sx={{ml: 2, mb:2, width:'30%'}} 
                        required 
                        defaultValue={data.cardCVC}
                        onChange={handleChange} />
                </InputBox>
            </InputContainer>
        </Container>
    )
}

export default PaymmentForm
