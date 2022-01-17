import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import OrdersItem from '../OrdersItem/OrdersItem';

const OrdersDetail = ({orders}) => {
    return (
        <TableContainer component={Paper} sx={{boxShadow: '0 0 5px 0 grey', borderRadius: 0}}>
            <Table aria-label="collapsible table">
                <TableHead>
                <TableRow>
                    <TableCell><b>Order N°</b></TableCell>
                    <TableCell><b>Date</b></TableCell>
                    <TableCell><b>Buyer</b></TableCell>
                    <TableCell><b>Items</b></TableCell>
                    <TableCell><b>Total Price</b></TableCell>
                    <TableCell><b>State</b></TableCell>
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
