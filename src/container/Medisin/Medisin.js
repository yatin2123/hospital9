import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


function Medisin(props) {

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

    return (
        <div>
            <section id="departments" className="departments">
                <div className="container">
                    <div className="section-title">
                        {
                            data.length > 0 ? (
                                data.map((v, index) => (
                                    <h1 key={index}>{v.price}</h1>
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