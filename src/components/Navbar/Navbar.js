import Bottombar from './Bottombar/Bottombar';
import Midbar from './Midbar/Midbar';
import Topbar from './Topbar/Topbar';
import { Container } from './NavbarStyle';

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
