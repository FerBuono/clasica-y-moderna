import { KeyboardArrowDown } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { topCategories, topAuthors, bestselling } from '../../../../assets/data/data';
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
                        <Title>Categories</Title>
                        <TopCategories>
                            {
                                topCategories.map(category => (
                                    <NavLink to={`/categories/${category.name}`} style={{width: '100%'}} key={category.id}>
                                        <Category>
                                            {category.name}
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
                        <Title>Authors</Title>
                        <TopAuthors>
                            {
                                topAuthors.map(author => (
                                    <NavLink to={`/authors/${author.name}`} style={{width: '100%'}} key={author.id}>
                                        <Category>
                                            {author.name}
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
                                    <NavLink to ={`/series/${serie}`} style={{width: '100%'}} key={serie}>
                                        <Category>
                                            {serie}
                                        </Category>
                                    </NavLink>
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
