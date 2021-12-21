import { Send } from '@mui/icons-material';
import { Container, Title, Desc, InputContainer, Input, Button } from './NewsletterStyle';

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Learn about new offers and get more deals by joining our newsletter.</Desc>
            <InputContainer>
                <Input placeholder="Email address" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
