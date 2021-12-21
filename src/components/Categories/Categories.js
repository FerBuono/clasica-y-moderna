import { KeyboardArrowDown } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { topCategories, topAuthors, bestselling } from '../../assets/data/data';
import { 
    Container,
    Nav, 
    CategoriesContainer, 
    Left, 
    Title, 
    TopCategories, 
    Category, 
    Center, 
    Right, 
    TopAuthors, 
    Bestsellers,
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
                                    <NavLink to={`/category/${category.category}`} style={{width: '100%'}}>
                                        <Category 
                                            key={category.id}
                                        >
                                            {category.category}
                                        </Category>
                                    </NavLink>
                                ))
                            }
                        </TopCategories>
                    </Left>
                    <Center>
                        <Title>Top Authors</Title>
                        <TopAuthors>
                            {
                                topAuthors.map(author => (
                                    <Category key={author}>{author}</Category>
                                ))
                            }
                            <Category style={{textDecoration:'underline'}} key="See all">See all</Category>
                        </TopAuthors>
                    </Center>
                    <Right>
                        <Title>Bestselling Series</Title>
                        <Bestsellers>
                            {
                                bestselling.map(serie => (
                                    <Category key={serie}>{serie}</Category>
                                ))
                            }
                        </Bestsellers>
                    </Right>
                </CategoriesContainer>
            </Nav>
        </Container>
    )
}

export default Categories;
