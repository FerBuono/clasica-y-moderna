import { AccountCircle, ErrorOutline, Explore, FavoriteBorder, Home, Mail } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #0000003d;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
`;

const Left = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Link = styled.div`
    align-items: center;
    border-right: 2px solid #050814;
    color: lightgray;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    height: 100%;
    justify-content: space-evenly;
    padding: 0 1rem;
    position: relative;
    transition: .2s ease;

    &:hover {
       color: white;
    }
`;

const Text = styled.p`
    margin-left: .5em;
`;

const Right = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

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
                        <ErrorOutline />
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
