import FooterInfo from "../FooterInfo/FooterInfo"
import Newsletter from "../Newsletter/Newsletter";
import { Container } from './FooterStyle';

const Footer = () => {
    return (
        <Container>
            <Newsletter />
            <FooterInfo />
        </Container>
    )
}

export default Footer
