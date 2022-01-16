import { AccountCircle, Explore, FavoriteBorder, Home, Info, KeyboardArrowDown, Mail, Logout as LogoutIcon } from '@mui/icons-material';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { WishlistContext } from '../../context/WishlistContext';
import UserModal from '../UserModal/UserModal';
import { useSnackbar } from 'notistack';
import { Container, Wrapper, Left, Right, Nav, Text, User, Logout, LogoutContainer } from './TopbarStyle';

const Topbar = () => {

    const {wishlistItems} = useContext(WishlistContext);
    const {user: [user], signOut, isSignedIn} = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const {enqueueSnackbar} = useSnackbar();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSignOut = () => {
        signOut();
        enqueueSnackbar('Signed out successfully', {
            variant: 'success',
        });
    };

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
                    <Link 
                        to={'/orders'}
                        style={{color:'white', textDecoration:'none'}}
                        >
                        <Nav>
                            <Explore />
                            <Text>My Orders</Text>
                        </Nav>
                    </Link>
                    <Link 
                        to={'/wishlist'}
                        style={{color:'white', textDecoration:'none'}}
                        >
                        <Nav>
                            <FavoriteBorder />
                                <Text>
                                    Wishlist {isSignedIn() ? `(${wishlistItems.length})` : ''}
                                </Text>
                        </Nav>
                    </Link>
                    {
                        isSignedIn()
                            ? 
                                <User style={{paddingRight: "0", borderRight: "none"}}>
                                    <AccountCircle />
                                    <Text>Hi, {user.firstName}!</Text>
                                    <KeyboardArrowDown />
                                    <LogoutContainer>
                                        <Logout  onClick={handleSignOut}>
                                            <LogoutIcon />
                                            <Text>Sign Out</Text>
                                        </Logout>
                                    </LogoutContainer>
                                </User>
                            : 
                                <Nav style={{paddingRight: "0", borderRight: "none"}} onClick={handleOpen}>
                                    <AccountCircle />
                                    <Text>Sign In/Join</Text>
                                </Nav>
                            
                    }
                </Right>
            </Wrapper>
            <UserModal open={open} handleClose={handleClose} user={user} />
        </Container>
    )
}

export default Topbar;
