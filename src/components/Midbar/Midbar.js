import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/logo-blanco.png';
import { Container, Wrapper, Logo, SearchContainer, Input, ButtonsContainer, MainButton, SecButton } from './MidbarStyle';

const Midbar = () => {

    return (
        <Container>
            <Wrapper>
                <Link to='/' style={{height: '100%'}}><Logo src={logo}/></Link>
                <SearchContainer>
                    <Search style={{color:"grey"}}/>
                    <Input placeholder="Search for books by keyword / title / author / ISBN"/>
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

