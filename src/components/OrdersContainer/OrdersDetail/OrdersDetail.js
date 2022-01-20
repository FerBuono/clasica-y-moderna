import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import OrdersItem from './OrdersItem/OrdersItem';

const OrdersDetail = ({orders}) => {
    return (
        <TableContainer component={Paper} sx={{boxShadow: '0 0 5px 0 grey', borderRadius: 0}}>
            <Table aria-label="collapsible table" stickyHeader>
                <TableHead>
                <TableRow sx={{borderBottom: '2px solid #E0E0E0'}}>
                    <TableCell sx={{borderRight: '1px solid #E0E0E0'}}><b>Order N°</b></TableCell>
                    <TableCell sx={{borderRight: '1px solid #E0E0E0'}}><b>Date</b></TableCell>
                    <TableCell sx={{borderRight: '1px solid #E0E0E0'}}><b>Buyer</b></TableCell>
                    <TableCell sx={{borderRight: '1px solid #E0E0E0'}}><b>Quantity</b></TableCell>
                    <TableCell sx={{borderRight: '1px solid #E0E0E0'}}><b>Total Price</b></TableCell>
                    <TableCell sx={{borderRight: '1px solid #E0E0E0'}} align='center'><b>State</b></TableCell>
                    <TableCell/>
                </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <OrdersItem key={order.id} order={order} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrdersDetail
