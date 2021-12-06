import styled from 'styled-components';
import { Search } from '@mui/icons-material';

import logo from '../assets/images/logos/logo-blanco.png';


const Container = styled.div`
    height: 7rem;
    width: 100%;
`;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    /* flex: 1; */
    height: 100%;
`;

const SearchContainer = styled.div`
    width: 60%;
    margin: 0 0 0 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

const Input = styled.input`
    width: 95%;
    border: none;
    font-size: 15px;
    padding: 15px 0 15px 15px;

    &:focus {
        outline: none;
    }
`;

const ButtonsContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const MainButton = styled.button`
    background-color: #85aac5;
    border: 2px solid #85aac5;
    border-radius: 20px;
    padding: 1rem 2rem;
    margin: 0 1rem;
    color: white;
    font-size: 15px;
    cursor: pointer;
`;

const SecButton = styled.button`
    background-color: transparent;
    border: 1px solid #85aac5;
    padding: 1rem 1rem;
    color: #85aac5;
    font-size: 15px;
    cursor: pointer;
`;

const Midbar = () => {

    return (
        <Container>
            <Wrapper>
                <Logo src={logo}/>
                <SearchContainer>
                    <Search style={{}, {color:"grey"}}/>
                    <Input placeholder="Search for books by keyword / title / author"/>
                </SearchContainer>
                <ButtonsContainer>
                    <MainButton>Search</MainButton>
                    <SecButton>Advanced Search</SecButton>
                </ButtonsContainer>
            </Wrapper>
        </Container>
    )
}

export default Midbar;

