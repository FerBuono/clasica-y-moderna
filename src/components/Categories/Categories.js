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
                                    <NavLink to={`/categories/${category.category}`} style={{width: '100%'}}>
                                        <Category key={category.id}>
                                            {category.category}
                                        </Category>
                                    </NavLink>
                                ))
                            }
                            <NavLink to={'/categories'} style={{width: '100%'}}>
                                <Category style={{textDecoration:'underline'}} key="See all">See all</Category>
                            </NavLink>
                        </TopCategories>
                    </Left>
                    <Center>
                        <Title>Top Authors</Title>
                        <TopAuthors>
                            {
                                topAuthors.map(author => (
                                    <NavLink to={`/authors/${author}`} style={{width: '100%'}}>
                                        <Category key={author}>
                                            {author}
                                        </Category>
                                    </NavLink>
                                ))
                            }
                            <NavLink to={'/authors'} style={{width: '100%'}}>
                                <Category style={{textDecoration:'underline'}} key="See all">See all</Category>
                            </NavLink>
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
