import styled from 'styled-components';
import Bottombar from './Bottombar';
import Midbar from './Midbar';
import Topbar from './Topbar';

const Container = styled.div`
    background-color: #050814;
    box-shadow: 0 0 5px 1px lightgray;
`;

const Navbar = () => {
    return (
        <Container>
            <Topbar />
            <Midbar />
            <Bottombar />
        </Container>
    )
}

export default Navbar
