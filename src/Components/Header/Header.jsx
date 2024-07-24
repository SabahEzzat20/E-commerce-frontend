import Box  from '@mui/material/Box';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ecommerceWebsiteLogo from '../../Images/shopping-cart_5451746.png';
import './Header.scss';
import { LuDot } from "react-icons/lu";
import zIndex from '@mui/material/styles/zIndex';

const Header = () => {
    const headerContainerStyle = {
        position:'fixed',
        zIndex:'1000',
        top:'0',
        left:'0',
        backgroundColor:'white',
        paddingRight:'10px',
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        boxShadow:'0 0.3px 12px rgb(202, 202, 202,0.4)',
        height: '75px'
    }
    return (
        <Box  sx={headerContainerStyle}>
            <Box sx={{display:'flex',alignItems:'center',padding:"15px"}}>
                <Box sx={{display:'flex',alignItems:'flex-end'}}>
                    <div className='websitelogo'><img src={ecommerceWebsiteLogo} alt="websitelogo" width={30} height={30}/></div>
                    <div className='websiteName'>Commerco</div>
                </Box>
                <Box>
                    <ul>
                        <li>
                            <Box className='dot'>
                                {/* <LuDot /> */}
                                <NavLink className='homeRoutes' to={''} activeClassName='active'>Home</NavLink>
                            </Box>
                        </li>
                        <li>
                            <Box className='dot'>
                                {/* <LuDot /> */}
                                <NavLink className='homeRoutes' activeClassName='active'>Products</NavLink>
                            </Box>
                        </li>
                        <li>
                            <Box className='dot'>
                                {/* <LuDot /> */}
                                <NavLink className='homeRoutes' activeClassName='active'>Categories</NavLink>
                            </Box>
                        </li>
                    </ul>
                </Box>
            </Box>
            <Box sx={{padding:'15px'}}>
                <ul>
                    <li>
                        <Link>
                            <button className='homeSignupBtn'>Signup</button>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <button className='homeLoginBtn'>Login</button>
                        </Link>
                    </li>
                </ul>
            </Box>
        </Box>
    );
};

export default Header;