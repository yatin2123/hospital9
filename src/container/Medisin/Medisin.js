import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


function Medisin({cart, setCart}) {
    console.log(cart);

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3004/medicines");
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const medisin = await response.json();
                setData(medisin);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleaddtocart = (id) => {
        console.log('yyyyyy');
        const data = cart.find((v) => v.id === id)

        if(data){
            let cartData = [...cart];
            let index = cartData.findIndex((v) => v.id === id);
            // console.log(index);
            cartData[index].qty++;
            setCart(cartData)
        }else{
            setCart((prev) => [...prev,{id:id, qty:1}])
        }
    }
    // console.log(cart);

    return (
        <div>
            <section id="departments" className="departments">
                <div className="container">
                    <div className="section-title">
                        {
                            data.length > 0 ? (
                                data.map((v) => (
                                    <>
                                        <h1>{v.price}</h1>

                                        <p>{v.name}</p>
                                        <button onClick={() => handleaddtocart(v.id)}>Add to Cart</button>
                                    </>
                                ))
                            ) : (
                                <p>No data available</p>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Medisin;