import { AccountCircle, Explore, FavoriteBorder, Home, Info, Mail } from '@mui/icons-material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../context/WishlistContext';
import { Container, Wrapper, Left, Right, Nav, Text } from './TopbarStyle';

const Topbar = () => {

    const {wishlistItems} = useContext(WishlistContext);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to={'/'}>
                        <Nav style={{paddingLeft: "0"}}>
                            <Home />
                        </Nav>
                    </Link>
                    <Nav>
                        <Mail />
                        <Text>Contact Us</Text>
                    </Nav>
                    <Nav>
                        <Info />
                        <Text>Help</Text>
                    </Nav>
                </Left>
                <Right>
                    <Nav style={{borderLeft: "2px solid #050814"}}>
                        <Explore />
                        <Text>Order Status</Text>
                    </Nav>
                    <Link 
                        to={'/wishlist'}
                        style={{color:'white', textDecoration:'none'}}
                    >
                        <Nav>
                            <FavoriteBorder />
                                <Text>
                                    Wishlist ({wishlistItems.length})
                                </Text>
                        </Nav>
                    </Link>
                    <Nav style={{paddingRight: "0", borderRight: "none"}}>
                        <AccountCircle />
                        <Text>Sign In/Join</Text>
                    </Nav>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar;
