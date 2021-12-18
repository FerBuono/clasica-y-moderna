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

    let books = []

    const handleFetch = (category) => {
        // console.log(category.replace(/\s&\s/g, '+'))
        console.log(category)

        const key = 'AIzaSyDnANj49e_aWs8dNmrgp6WcqjIszCENzKQ';

        const url = `https://www.googleapis.com/books/v1/volumes?q=subject:"${category}"&key=${key}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                books = [data.items]
            })
        setTimeout(() => {
            
            console.log(books)
        }, 1000);    
    }


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
                                    <Category onClick={() => handleFetch(category)} key={category}>{category}</Category>
                                ))
                            }
                        </TopCategories>
                    </Left>
                    <Center>
                        <Title>More Categories</Title>
                        <MoreCategories>
                            {
                                moreCategories.map(category => (
                                    <Category style={{width:'50%'}} key={category}>{category}</Category>
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
                                        <Category key={author}>{author}</Category>
                                    ))
                                }
                                <Category style={{textDecoration:'underline'}} key="See all">See all</Category>
                            </TopAuthors>
                        </RLeft>
                        <RRight>
                            <Title>Bestselling Series</Title>
                            <Section>
                                {
                                    bestselling.map(serie => (
                                        <Category key={serie}>{serie}</Category>
                                    ))
                                }
                            </Section>
                            <Title>Books by Language</Title>
                            <Section>
                                {
                                    languages.map(language => (
                                        <Category key={language}>Books in {language}</Category>
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
