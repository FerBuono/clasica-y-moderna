import { Button, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import logo from '../../../assets/images/logos/logo-simple.png';
import { useEffect, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Container, Title, Img, InputContainer, ButtonContainer } from './SignInModalStyle';
import styled from 'styled-components';

export const SpinnerContainer = styled.div`
    display: ${props => props.loading ? "flex" : "none"};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    background-color: white;
    align-items: center;
    justify-content: center;
`;

const SignInModal = ({logIn, signIn, setSignIn, handleChange, setModal, loading, campsFilled, setCampsFilled}) => {

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        setCampsFilled(() => {
            return (document.getElementById('email').value.length > 0 && document.getElementById('password').value.length > 0);
        });
    }, [signIn]);

    return (
        <Container onSubmit={logIn}>
            <Title>
                <Img src={logo} /> 
                Sign In 
                <Img src={logo} />
            </Title>
            <InputContainer>
                <TextField
                    autoComplete="off"
                    id="email" 
                    label="Email" 
                    type="email"
                    variant="standard"
                    sx={{width:'100%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setSignIn, signIn)}
                />
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    sx={{width:'100%', mb:2}} 
                    onChange={(e => handleChange(e, setSignIn, signIn))}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </InputContainer>
            <ButtonContainer>
                <Button
                    color='primary'
                    variant='outlined'
                    sx={{padding: '5px 20px'}}
                    onClick={() => setModal('join')}
                >
                    Join                        
                </Button>
                <Button
                    color='primary'
                    variant='contained'
                    sx={{padding: '5px 20px', marginLeft: '1rem'}}
                    type='submit'
                    disabled={!campsFilled}
                >
                    Sign In                        
                </Button>
            </ButtonContainer>
            <SpinnerContainer loading={loading}>
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>
            </SpinnerContainer>
        </Container>
    )
}

export default SignInModal
