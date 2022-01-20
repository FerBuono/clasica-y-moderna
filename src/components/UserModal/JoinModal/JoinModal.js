import { Button, TextField } from '@mui/material';
import logo from '../../../assets/images/logos/logo-simple.png';
import { useEffect } from 'react';
import { Container, Title, Img, InputContainer, ButtonContainer, SpinnerContainer } from './JoinModalStyle';

const JoinModal = ({register, join, setJoin, handleChange, setModal, loading, campsFilled, setCampsFilled}) => {

    useEffect(() => {
        setCampsFilled(() => {
            return (document.getElementById('firstName').value.length > 0 && document.getElementById('lastName').value.length > 0 && document.getElementById('email').value.length > 0 && document.getElementById('password').value.length > 0 && document.getElementById('username').value.length > 0 && document.getElementById('phone').value.length > 0);
        });
    }, [join]);

    return ( 
        <Container onSubmit={register}>
            <Title>
                <Img src={logo} alt='logo'/> 
                Join 
                <Img src={logo} alt='logo'/>
            </Title>
            <InputContainer>
                <TextField
                    autoComplete="off"
                    id="firstName" 
                    label="First Name" 
                    variant="standard"
                    sx={{width:'48%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
                <TextField 
                    autoComplete="off"
                    id="lastName" 
                    label="Last Name" 
                    variant="standard" 
                    sx={{width:'48%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
                <TextField
                    autoComplete="off"
                    id="email" 
                    label="Email" 
                    type={'email'}
                    variant="standard"
                    sx={{width:'48%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
                <TextField 
                    id="password" 
                    label="Password" 
                    type={'password'}
                    variant="standard" 
                    sx={{width:'48%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
                <TextField
                    autoComplete="off"
                    id="username" 
                    label="Username"    
                    variant="standard"
                    sx={{width:'48%', mb:2}} 
                    required 
                    onChange={(e) => handleChange(e, setJoin, join)}
                />
                <TextField 
                    autoComplete="off"
                    id="phone" 
                    label="Phone number" 
                    type={'tel'}
                    variant="standard" 
                    sx={{width:'48%', mb:2}} 
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
            <SpinnerContainer loading={loading ? 1 : 0}>
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
