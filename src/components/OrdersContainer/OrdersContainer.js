import OrdersDetail from './OrdersDetail/OrdersDetail';
import Spinner from '../Spinner/Spinner';
import { useContext, useEffect } from 'react';
import NoOrders from '../NoResults/NoOrders';
import { UserContext } from '../../context/UserContext';
import { Container, Title } from './OrdersContainerStyle';

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
