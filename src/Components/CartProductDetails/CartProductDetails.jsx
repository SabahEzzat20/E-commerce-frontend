import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import './CartProductDetails.scss';
import laVieEstBelle from '../../Images/OIF.jpeg';
import { IoCloseOutline } from "react-icons/io5";

const Cart_ProductDetails = () => {
    const [orderDetails, setOrderDetails] = useState({
        id: '',
        productName: '',
        productImage: '',
        productDescription: '',
        productPrice: 5000,
        productQuantity: 1,
    });
    const [total,setTotal]=useState(orderDetails.productPrice)
    const CountDown = () => {
        if (orderDetails.productQuantity >= 1) {
            setOrderDetails({ ...orderDetails, productQuantity: orderDetails.productQuantity - 1 });
            setTotal(prev=>prev-orderDetails.productPrice)
        }
    }
    const CountUp = () => {
        setOrderDetails({ ...orderDetails, productQuantity: orderDetails.productQuantity + 1 });
        setTotal(prev=>prev+orderDetails.productPrice)
    }
    return (
        <>
            <Box sx={{marginTop:'60px',paddingTop:'30px'}}>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Stack direction='row' spacing={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <img src={laVieEstBelle} alt="perfume" width={80} height={80}/>
                                    <div>La vie est belle</div>
                                </Stack>
                            </td>
                            <td>{orderDetails.productPrice}EGP</td>
                            <td>
                                <Box sx={{border:'1px solid gray',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                                    <button className='counterAction' onClick={CountDown}>-</button>
                                    <Box>{orderDetails.productQuantity}</Box>
                                    <button className='counterAction' onClick={CountUp}>+</button>
                                </Box>
                            </td>
                            <td>{total}EGP</td>
                            <td><IoCloseOutline /></td>
                        </tr>
                        <tr>
                            <td>
                                <Stack direction='row' spacing={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <img src={laVieEstBelle} alt="perfume" width={80} height={80}/>
                                    <div>La vie est belle</div>
                                </Stack>
                            </td>
                            <td>{orderDetails.productPrice}EGP</td>
                            <td>
                                <Box sx={{border:'1px solid gray',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                                    <button className='counterAction' onClick={CountDown}>-</button>
                                    <Box>{orderDetails.productQuantity}</Box>
                                    <button className='counterAction' onClick={CountUp}>+</button>
                                </Box>
                            </td>
                            <td>{total}EGP</td>
                            <td><IoCloseOutline /></td>
                        </tr>
                        <tr>
                            <td>
                                <Stack direction='row' spacing={3} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <img src={laVieEstBelle} alt="perfume" width={80} height={80}/>
                                    <div>La vie est belle</div>
                                </Stack>
                            </td>
                            <td>{orderDetails.productPrice}EGP</td>
                            <td>
                                <Box sx={{border:'1px solid gray',borderRadius:'5px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                                    <button className='counterAction' onClick={CountDown}>-</button>
                                    <Box>{orderDetails.productQuantity}</Box>
                                    <button className='counterAction' onClick={CountUp}>+</button>
                                </Box>
                            </td>
                            <td>{total}EGP</td>
                            <td><IoCloseOutline /></td>
                        </tr>
                    </tbody>
                </table>
            </Box>
        </>
    );
};

export default Cart_ProductDetails;