import { AccountCircle, Explore, FavoriteBorder, Home, Info, Mail } from '@mui/icons-material';
import { Container, Wrapper, Left, Right, Link, Text } from './TopbarStyle';

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link style={{paddingLeft: "0"}}>
                        <Home />
                    </Link>
                    <Link>
                        <Mail />
                        <Text>Contact Us</Text>
                    </Link>
                    <Link>
                        <Info />
                        <Text>Help</Text>
                    </Link>
                </Left>
                <Right>
                    <Link style={{borderLeft: "2px solid #050814"}}>
                        <Explore />
                        <Text>Order Status</Text>
                    </Link>
                    <Link>
                        <FavoriteBorder />
                        <Text>Wishlist</Text>
                    </Link>
                    <Link style={{paddingRight: "0", borderRight: "none"}}>
                        <AccountCircle />
                        <Text>Sign In/Join</Text>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Topbar;
