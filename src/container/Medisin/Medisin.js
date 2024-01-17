import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getmedisin } from '../../redux/action/medisin.action';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Medisin({ cart, setCart, fav, setFav }) {
    console.log(cart);
    console.log(fav);

    const [data, setData] = useState([]);

    const dispatch = useDispatch();

    const medisin = useSelector(state => state.medisin)
    console.log(medisin.medisin);

    useEffect(() => {
        dispatch(getmedisin())
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch("http://localhost:3004/medicines");
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok.');
        //         }
        //         const medisin = await response.json();
        //         setData(medisin);
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // };

        // fetchData();
    }, []);

    const handleaddtocart = (id) => {
        console.log('yyyyyy');
        const data = cart.find((v) => v.id === id)
        console.log(data);

        if (data) {
            let cartData = [...cart];
            let index = cartData.findIndex((v) => v.id === id);
            // console.log(index);
            cartData[index].qty++;
            setCart(cartData)
        } else {
            setCart((prev) => [...prev, { id: id, qty: 1 }])
        }
    }
    // console.log(cart);

    const handlefav = (id) => {
        console.log('uuuuuuuuuuuuuuuuuu');
        console.log(id);

        if (fav) {
            let fdata = fav.filter((v) => v.id !== id)
            console.log(fdata);
            setFav(fdata)
        } else {
            setFav((pre) => [...pre, { id: id }])
        }
    }
    console.log(fav);

    return (
        <div>
            <section id="departments" className="departments">
                <div className="container">
                    <div className="section-title">

                        <div className='col-md-8'>
                            <br></br> <br></br> <br></br>
                            {
                                medisin.medisin.length > 0 ? (
                                    medisin.medisin.map((v) => (
                                        <>
                                            <h1>{v.price}</h1>

                                            <p>{v.name}</p>
                                            <button onClick={() => handlefav(v.id)}><FavoriteIcon /></button>
                                            <button onClick={() => handleaddtocart(v.id)}>Add to Cart</button>
                                        </>
                                    ))
                                ) : (
                                    <p>No data available</p>
                                )
                            }
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Medisin;