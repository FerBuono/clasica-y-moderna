import { AddShoppingCartOutlined, FavoriteBorderOutlined, SearchOutlined } from '@mui/icons-material';
import styled from 'styled-components';

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000028;
    opacity: 0;
    transition: opacity .2s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: .5rem;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #85aac516;

    &:hover ${Info} {
        opacity: 1;
    }
`;

const Icon = styled.span`
    margin: 0 1rem;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color: #050814;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        transform: scale(1.2);
        color: white;
        background-color: #ba7735;
    }
`;

const Image = styled.img`
    height: 75%;
`;

const Product = ({item}) => {

    console.log(item)

    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <AddShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
