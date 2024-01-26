import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { loggeduserReqwest, logoutReqwest } from '../../redux/action/auth.action';

function Header({ cart, fav }) {

    console.log(cart);
    // console.log(fav);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:3004/medicines");
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok.');
    //             }
    //             const medisin = await response.json();
    //             setData(medisin);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // console.log(data);
    const cartCount = cart.reduce((acc, v) => acc + v.qty, 0)
    console.log(cartCount);


    const auth = useSelector(state => state.auth)
    console.log(auth);

    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log('rrrrrrrrrrrrrrrrrrr');
        dispatch(logoutReqwest())
    }

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    return (
        <div>
            <div>
                <div className="main-header">
                    <div id="topbar" className="d-flex align-items-center fixed-top">
                        <div className="container d-flex justify-content-between">
                            <div className="contact-info d-flex align-items-center">
                                <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                                <i className="bi bi-phone" /> +91 9988776655
                            </div>
                            <Link to={"/cart"}>
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={cartCount} color="secondary">
                                        <AddShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Link>


                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={cartCount} color="secondary">
                                    <FavoriteIcon />
                                </StyledBadge>
                            </IconButton>
                            {/* 
                            <Link to={"/cart"}>
                                <FavoriteIcon  />
                            </Link> */}



                            {/* <AddShoppingCartIcon cartCount={cartCount}/> */}

                            <div className="d-none d-lg-flex social-links align-items-center">
                                <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                                <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                                <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                            </div>
                        </div>
                    </div>
                    <header id="header" className="fixed-top">
                        <div className="container d-flex align-items-center">
                            <div className="logo">
                                <a href="../index.html">
                                    <h1 className="logo me-auto">City</h1><br /><br />
                                    <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                                </a>
                            </div>
                            <nav id="navbar" className="navbar order-last order-lg-0">
                                <ul>
                                    <li><NavLink className="nav-link scrollto" to="/">Home</NavLink></li>
                                    <li><NavLink className="nav-link scrollto" to="/departments">Departments</NavLink></li>

                                    <li><NavLink className="nav-link scrollto" to="/medisin">Medisin</NavLink></li>

                                    <li><NavLink className="nav-link scrollto" to="/counter">Counter</NavLink></li>
                                    <li><NavLink className="nav-link scrollto" to="/doctor">Doctors</NavLink></li>
                                    <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
                                    <li><NavLink className="nav-link scrollto" to="/contact">Contact</NavLink></li>
                                    <li><NavLink className="nav-link scrollto" to="/cart">Cart</NavLink></li>
                                    <li><NavLink className="nav-link scrollto" to="/list">List</NavLink></li>
                                </ul>
                                <i className="bi bi-list mobile-nav-toggle" />
                            </nav>
                            <a href="./appointment.html" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                                Appointment</a>
                            {
                                auth.user ?
                                    <NavLink to="/" className="appointment-btn scrollto" onClick={() => handleLogout()}>
                                        <span className="d-none d-md-inline">Logout</span>
                                    </NavLink> :
                                    <NavLink to="/auth" className="appointment-btn scrollto">
                                        <span className="d-none d-md-inline">Login/ Signup</span>
                                    </NavLink>
                            }
                        </div>
                    </header>
                </div>
            </div>
        </div>

    );
}

export default Header;