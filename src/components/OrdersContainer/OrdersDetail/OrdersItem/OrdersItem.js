import { useContext, useState } from 'react';
import { CurrencyContext } from '../../../../context/CurrencyContext';
import { Loop, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Tooltip, Typography, Box, Collapse, IconButton, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const OrdersItem = ({order}) => {

    const {buyer, date, items, orderNumber, currency: orderCurrency, total} = order;
    const [open, setOpen] = useState(false);
    const {changeItemPriceTo} = useContext(CurrencyContext);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell sx={{borderRight: '1px solid #E0E0E0'}}>{orderNumber}</TableCell>
                <TableCell sx={{borderRight: '1px solid #E0E0E0'}}>{date}</TableCell>
                <TableCell sx={{borderRight: '1px solid #E0E0E0'}}>{buyer.name}</TableCell>
                <TableCell sx={{borderRight: '1px solid #E0E0E0'}}>{items.reduce((acc, {amount}) => amount + acc, 0) === 1 ? '1 item' : `${items.reduce((acc, {amount}) => amount + acc, 0)} items`}</TableCell>
                <TableCell sx={{borderRight: '1px solid #E0E0E0'}}>{orderCurrency} {total}</TableCell>
                <TableCell sx={{borderRight: '1px solid #E0E0E0'}} align='center'>
                    <Tooltip title="Processing...">
                        <IconButton>
                            <Loop />
                        </IconButton>
                    </Tooltip>
                </TableCell>
                <TableCell align="center">
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell 
                    style={{
                        padding: 0, borderBottom: 'unset', width: '100%', backgroundColor: '#F5F5F5', 
                        boxShadow: 'inset 0px 7px 6px -6px lightgrey, inset 0px -6px 6px -6px lightgrey'}} 
                    colSpan={7}
                >
                    <Collapse in={open} timeout="auto" unmountOnExit >
                        <Box sx={{width: '100%', padding: 2}}>
                            <Typography variant="h6" gutterBottom component="div">
                                <b>Order Details</b>
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                <TableRow>
                                    <TableCell><b>Item</b></TableCell>
                                    <TableCell><b>Title</b></TableCell>
                                    <TableCell><b>Author</b></TableCell>
                                    <TableCell><b>Amount</b></TableCell>
                                    <TableCell><b>Price</b></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {items.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell sx={{height: '100px'}}><img src={item.img} style={{height: '100%'}} alt='book image'/></TableCell>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>{item.author}</TableCell>
                                        <TableCell>{item.amount}</TableCell>
                                        <TableCell>
                                            {orderCurrency} {changeItemPriceTo(item, orderCurrency)}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default OrdersItem