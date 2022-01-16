import styled from 'styled-components';
import { Button, TextField } from '@mui/material';
import logo from '../../assets/images/logos/logo-simple.png';
import { useEffect } from 'react';

export const Container = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: white;
    padding: 2rem;
    outline: none;
    box-shadow: 0 0 5px 0 grey;
    position: relative;
`;

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

export const Title = styled.h2`
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Img = styled.img`
    height: 30px;
`;

export const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;


const JoinModal = ({register, join, setJoin, handleChange, setModal, loading, campsFilled, setCampsFilled}) => {

    useEffect(() => {
        setCampsFilled(() => {
            return (document.getElementById('firstName').value.length > 0 && document.getElementById('lastName').value.length > 0 && document.getElementById('email').value.length > 0 && document.getElementById('password').value.length > 0 && document.getElementById('username').value.length > 0 && document.getElementById('phone').value.length > 0);
        });
    }, [join]);

    return ( 
        <Container onSubmit={register}>
            <Title>
                <Img src={logo} /> 
                Join 
                <Img src={logo} />
            </Title>
            <InputContainer>
                <TextField
                    id="firstName" 
                    label="First Name" 
                    variant="standard"
                    sx={{width:'45%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
                <TextField 
                    id="lastName" 
                    label="Last Name" 
                    variant="standard" 
                    sx={{width:'45%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
                <TextField
                    id="email" 
                    label="Email" 
                    type={'email'}
                    variant="standard"
                    sx={{width:'45%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
                <TextField 
                    id="password" 
                    label="Password" 
                    type={'password'}
                    variant="standard" 
                    sx={{width:'45%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
                <TextField
                    id="username" 
                    label="Username"    
                    variant="standard"
                    sx={{width:'45%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
                <TextField 
                    id="phone" 
                    label="Phone number" 
                    type={'tel'}
                    variant="standard" 
                    sx={{width:'45%', mb:2}} 
                    required
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
            </InputContainer>
            <ButtonContainer>
                <Button
                    color='primary'
                    variant='outlined'
                    sx={{padding: '5px 20px'}}
                    onClick={(e) => setModal('sign in')}
                >
                    Sign In                       
                </Button>
                <Button
                    color='primary'
                    variant='contained'
                    sx={{padding: '5px 20px', marginLeft: '1rem'}}
                    type='submit'
                    disabled={!campsFilled}
                >
                    Join                     
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

export default JoinModal
