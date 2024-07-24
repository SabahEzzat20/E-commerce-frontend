import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import CartProductDetails from '../../Components/CartProductDetails/CartProductDetails';
const CartPage = () => {
    return (
        <>
            <Box>
                <Stack>
                    <CartProductDetails/>
                </Stack>
            </Box>
        </>
    );
};

export default CartPage;