import React, { useState } from 'react';
import Header from '../../component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../../container/Home/Home'
import About from '../../container/About/About'
import Appointment from '../../container//Appointment/Appointment';
import Doctor from '../../container/Doctor/Doctor';

import Contact from '../../container/Contact/Contact';
import Department from '../../container/Department/Department';
import Footer from '../../component/Footer/Footer';
import Medisin from '../Medisin/Medisin';
import Cart from '../Cart/Cart';
import Counter from '../Counter/Counter';
import List from '../List/List';
import Auth from '../Auth/Auth';


function Userroutes(props) {

    const [cart, setCart] = useState([])
    const [fav, setFav] = useState([])
    return (
        <div>
            <Header  cart={cart}/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/appointment' element={<Appointment/>} />
                <Route exact path='/doctor' element={<Doctor/>} />
                <Route exact path='/department' element={<Department/>} />
                <Route exact path='/contact' element={<Contact/>} />

                <Route exact path='/counter' element={<Counter/>} />
                <Route exact path='/medisin' element={<Medisin cart={cart} setCart={setCart} fav={fav} setFav={setFav}/>} />

                <Route exact path='/cart' element={<Cart  cart={cart} setCart={setCart}/>} />

                <Route exact path='/list' element={<List fav={fav} setFav={setFav}/>} />

                <Route exact path='/auth' element={<Auth />} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default Userroutes;