import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Header({cart}) {

    console.log(cart);
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

    let qty = 0;
    {
        cart.map((v) => {
            qty = qty + v.qty
        })
    }
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
                                <FavoriteIcon cartCount={cartCount} />
                            </Link>



                            <AddShoppingCartIcon />

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
                                    <li><NavLink className="nav-link scrollto" to="/doctor">Doctors</NavLink></li>
                                    <li><NavLink className="nav-link scrollto" to="/about">About</NavLink></li>
                                    <li><NavLink className="nav-link scrollto" to="/contact">Contact</NavLink></li>
                                    <li><NavLink className="nav-link scrollto" to="/cart">Cart</NavLink></li>
                                </ul>
                                <i className="bi bi-list mobile-nav-toggle" />
                            </nav>
                            <a href="./appointment.html" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                                Appointment</a>
                        </div>
                    </header>
                </div>
            </div>
        </div>

    );
}

export default Header;