import { KeyboardArrowDown } from '@mui/icons-material';
import { languages } from '../../assets/data/data';
import { useState } from 'react';
import {
    Container,
    Nav,
    SelectedLang,
    LanguagesContainer,
    Title,
    LangList,
    Lang,
} from './LanguagesStyle';

const Languages = () => {

    const [language, setLanguage] = useState('English');

    const handleLang = (language) => {
        setLanguage(language);
    }

    return (
        <Container>
            <Nav >
                <SelectedLang>{language}</SelectedLang>
                <KeyboardArrowDown />
                <LanguagesContainer>
                    <Title>Languages</Title>
                    <LangList>
                        {
                            languages.map(lang => (
                                <Lang onClick={() => handleLang(lang)}>{lang}</Lang>
                            ))
                        }
                    </LangList>
                </LanguagesContainer>
            </Nav>
        </Container>
    )
}

export default Languages;

