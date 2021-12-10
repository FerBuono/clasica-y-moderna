import { KeyboardArrowDown } from '@mui/icons-material';
import { topCategories, moreCategories, topAuthors, bestselling, languages } from '../../assets/data/data';
import { 
    Container,
    Nav, 
    CategoriesContainer, 
    Left, 
    Title, 
    TopCategories, 
    Category, 
    Center, 
    MoreCategories, 
    Right, 
    RLeft, 
    TopAuthors, 
    RRight,
    Section
} from './CategoriesStyle';

const Categories = () => {

    return (
        <Container>
            <Nav >
                Shop by category <KeyboardArrowDown />
                <CategoriesContainer>
                    <Left>
                        <Title>Top Categories</Title>
                        <TopCategories>
                            {
                                topCategories.map(category => (
                                    <Category>{category}</Category>
                                ))
                            }
                        </TopCategories>
                    </Left>
                    <Center>
                        <Title>More Categories</Title>
                        <MoreCategories>
                            {
                                moreCategories.map(category => (
                                    <Category style={{width:'50%'}}>{category}</Category>
                                ))
                            }
                        </MoreCategories>
                    </Center>
                    <Right>
                        <RLeft>
                            <Title>Top Authors</Title>
                            <TopAuthors>
                                {
                                    topAuthors.map(author => (
                                        <Category>{author}</Category>
                                    ))
                                }
                                <Category style={{textDecoration:'underline'}}>See all</Category>
                            </TopAuthors>
                        </RLeft>
                        <RRight>
                            <Title>Bestselling Series</Title>
                            <Section>
                                {
                                    bestselling.map(serie => (
                                        <Category>{serie}</Category>
                                    ))
                                }
                            </Section>
                            <Title>Books by Language</Title>
                            <Section>
                                {
                                    languages.map(language => (
                                        <Category>Books in {language}</Category>
                                    ))
                                }
                            </Section>
                        </RRight>
                    </Right>
                </CategoriesContainer>
            </Nav>
        </Container>
    )
}

export default Categories;
