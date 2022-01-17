import { useContext, useState } from 'react';
import { CurrencyContext } from '../../context/CurrencyContext';
import { Loop, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Tooltip, Typography, Box, Collapse, IconButton, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const OrdersItem = ({order}) => {

    const {buyer, date, items, orderNumber, currency: orderCurrency, total} = order;
    const [open, setOpen] = useState(false);
    const {changeItemPriceTo} = useContext(CurrencyContext);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    {orderNumber}
                </TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>{buyer.name}</TableCell>
                <TableCell>{items.length} items</TableCell>
                <TableCell>{orderCurrency} {total}</TableCell>
                <TableCell>
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
                <TableCell style={{padding: 0, borderBottom: 'unset', width: '100%', background: '#F5F5F5'}} colSpan={7}>
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
                                        <TableCell sx={{height: '100px'}}><img src={item.img} style={{height: '100%'}}/></TableCell>
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