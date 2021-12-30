import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logos/logo-blanco.png';
import { Container, Wrapper, Logo, SearchContainer, InputContainer, Input, ButtonsContainer, MainButton, SecButton } from './MidbarStyle';

const Midbar = () => {

    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        search.length > 0 ? navigate(`/search=${search}`) : navigate('/')
    };

    return (
        <Container>
            <Wrapper>
                <Link to='/' style={{height: '100%'}}><Logo src={logo}/></Link>
                <SearchContainer onSubmit={handleSubmit}>
                    <InputContainer>
                        <Search style={{color:"grey"}}/>
                        <Input placeholder="Search for books by keyword / title / author" onChange={handleInput}/>
                    </InputContainer>
                    <MainButton type='submit'>Search</MainButton>
                </SearchContainer>
                <ButtonsContainer>
                    <SecButton>Advanced Search</SecButton>
                </ButtonsContainer>
            </Wrapper>
        </Container>
    )
}

export default Midbar;

