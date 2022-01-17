import styled from 'styled-components';
import pattern from '../../assets/images/patterns/home.png';
import OrdersDetail from '../OrdersDetail/OrdersDetail';
import Spinner from '../Spinner/Spinner';
import { useContext, useEffect } from 'react';
import NoOrders from '../NoResults/NoOrders';
import { UserContext } from '../../context/UserContext';

export const Container = styled.div`
    padding: 2rem;  
    background-image: url(${pattern});
    background-size: 150%;
`;

export const Title = styled.h2`
    padding: 1rem 10px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 0 0 5px 0 grey;
`;

const OrdersContainer = ({orders}) => {

    const {isSignedIn} = useContext(UserContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Container>
            <Title>
                My Orders
                <span style={{fontWeight: 400, fontSize:'20px', marginLeft: '1rem'}}>
                {
                    orders && (orders.length === 1 ? '(1 order)': `(${orders.length} orders)`)
                }
                </span>
            </Title>
            {
                isSignedIn()
                    ? orders
                        ? orders.length > 0
                            ? <OrdersDetail orders={orders} />
                            : <NoOrders />
                        : <Spinner />
                    : <NoOrders />
            }
        </Container>
    )
}

export default OrdersContainer
