import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png'
import { 
    Container,
    Left,
    Title, 
    List, 
    ListItem, 
    Center, 
    Logo, 
    SocialContainer, 
    SocialIcon, 
    Right, 
    ContactItem, 
    Payment
} from './FooterInfoStyle';

const FooterInfo = () => {
    return (
        <Container>
            <Left>
                <Title>Explore</Title>
                <List>
                    <ListItem><Link to={'/'}>Home</Link></ListItem>
                    <ListItem><Link to={'/cart'}>Cart</Link></ListItem>
                    <ListItem><Link to={'/wishlist'}>Wishlist</Link></ListItem>
                    <ListItem>Most Popular Books</ListItem>
                    <ListItem>Most Popular Categories</ListItem>
                    <ListItem>Most Popular Writers</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Left>
            <Center>
                <Logo>
                    <img src={logo} style={{height:'100%'}} alt="Clasica y Moderna"/>
                </Logo>
                <SocialContainer>
                    <Link to={"facebook.com/Clasica-y-Moderna"}>
                        <SocialIcon color="#3b5999">
                            <Facebook />
                        </SocialIcon>
                    </Link>
                    <Link to={"instagram.com/Clasica-y-Moderna"}>
                        <SocialIcon color="#E80903">
                            <Instagram />
                        </SocialIcon>
                    </Link>
                    <Link to={"twitter.com/Clasica-y-Moderna"}>
                        <SocialIcon color="#55ADEC">
                            <Twitter />
                        </SocialIcon>
                    </Link>
                </SocialContainer>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>
                    828 Broadway, New York, NY 10003, U.S.A.
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    contact@cym.com
                </ContactItem>
                <Payment src="https://aroaro.es/wp-content/uploads/2020/04/accepted-payment-methods.png" />
            </Right>
        </Container>
    )
}

export default FooterInfo
