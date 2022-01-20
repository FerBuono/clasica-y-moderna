import { TextField } from '@mui/material';
import { useEffect } from 'react';
import { Container, InputContainer, InputBox } from './AddressFormStyle';

const AddressForm = ({data, setData, setCampsFilled}) => {

    const handleChange = (e) => {
        const input = e.target;
        setData({...data, [input.id]: input.value});
    };

    useEffect(() => {
        setCampsFilled(() => {
            return(document.getElementById('firstName').value.length > 0 && document.getElementById('lastName').value.length > 0 && document.getElementById('address').value.length > 0 && document.getElementById('phone').value.length > 0 && document.getElementById('email').value.length > 0 && document.getElementById('city').value.length > 0 && document.getElementById('zip').value.length > 0 && document.getElementById('country').value.length > 0 && document.getElementById('region').value.length > 0);
        });
    }, [data]);

    return (
        <Container>
            <InputContainer>
                <InputBox>
                    <TextField 
                        id="firstName" 
                        label="First name" 
                        variant="standard" 
                        sx={{width:'50%', mb:2}} 
                        required 
                        defaultValue={data.firstName}
                        onChange={handleChange} />
                    <TextField 
                        id="lastName" 
                        label="Last name" 
                        variant="standard" 
                        sx={{ml: 2, mb:2, width:'50%'}} 
                        required 
                        defaultValue={data.lastName}
                        onChange={handleChange} />
                </InputBox>
                <InputBox>
                    <TextField 
                        id="phone" 
                        label="Phone" 
                        type={'tel'}
                        variant="standard" 
                        sx={{mb:2, width:'50%'}} 
                        required 
                        defaultValue={data.phone}
                        onChange={handleChange} />
                    <TextField 
                        id="email" 
                        label="Email" 
                        type={'email'}
                        variant="standard" 
                        sx={{ml: 2, mb:2, width:'50%'}} 
                        required 
                        disabled
                        defaultValue={data.email}
                        onChange={handleChange} />
                </InputBox>
                <InputBox>
                    <TextField 
                        id="address" 
                        label="Address" 
                        variant="standard" 
                        sx={{width:'40%', mb:2}} 
                        required 
                        defaultValue={data.address}
                        onChange={handleChange} />
                    <TextField 
                        id="city" 
                        label="City" 
                        variant="standard" 
                        sx={{ml: 2, width:'40%', mb:2}} 
                        required 
                        defaultValue={data.city}
                        onChange={handleChange} />
                    <TextField 
                        id="zip" 
                        label="ZIP / Postal code" 
                        variant="standard" 
                        sx={{ml: 2, mb:2, width:'20%'}} 
                        required 
                        defaultValue={data.zip}
                        onChange={handleChange} />
                </InputBox>
                <InputBox>
                    <TextField 
                        id="region" 
                        label="Region" 
                        variant="standard" 
                        sx={{mb:2, width:'50%'}} 
                        required 
                        defaultValue={data.region}
                        onChange={handleChange} />
                    <TextField 
                        id="country" 
                        label="Country" 
                        variant="standard" 
                        sx={{ml: 2, width:'50%', mb:2}} 
                        required 
                        defaultValue={data.country}
                        onChange={handleChange} />
                </InputBox>
            </InputContainer>
        </Container>
    )
}

export default AddressForm
