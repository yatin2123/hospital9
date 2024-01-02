import React, { useEffect, useState } from 'react';

function Cart({ cart }) {

    console.log(cart);

    const [counter, setCounter] = useState(0);

    const [data, setData] = useState([]);

    const handletotal = () => {
        let ans = 0;

        cartData.map((v) => {
            ans += v.qty * v.price
        })
        setCounter(ans)
        console.log(ans);
    }

    const fetchData = async () => {

        const response = await fetch("http://localhost:3004/medicines");

        const medisin = await response.json();
        console.log(medisin);
        setData(medisin);

    }

    useEffect(() => {
        handletotal();

        fetchData();
    }, []);
    console.log(data);


    const cartData = cart.map((v) => {
        let med = data.find((m) => v.id == m.id)
        console.log(med);

        return { ...med, qty: v.qty }

    })
    console.log(cartData);

    const handleIncre = (id) => {
        // console.log('yyyy');
        console.log(id);

        let check = cartData.find((v) => v.id === id)
        console.log(check);
        // let res = cartData.indexOf(check)
        // console.log(res);
        //  return {...check, qty: qty++}

        if (check) {
            const data = {...check, qty: check.qty + 1};
            const index = cartData.indexOf(check);
        
            if (index === 0) {
                cartData[index] = data;
                console.log(data); // This will log the updated item
                return data; // Returning the updated item
            }
        }
        

        

    }



    const handleDcre = (id) => {
        // console.log('uuuuu');
        console.log(id);
        // setCounter(counter - 1);
    }
    return (
        <div>
            <section className="h-100 h-custom" >

                {
                    cartData.map((v) => {
                        return (
                            <>
                                <div className="container py-5 h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col-12">
                                            <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
                                                <div className="card-body p-0">
                                                    <div className="row g-0">
                                                        <div className="col-lg-8">
                                                            <div className="p-5">
                                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                                    <h6 className="mb-0 text-muted">3 items</h6>
                                                                </div>
                                                                <hr className="my-4" />
                                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp" className="img-fluid rounded-3" alt="Cotton T-shirt" />
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                                                        <h6 className="text-muted">{v.name}</h6>
                                                                        <h6 className="text-black mb-0">{v.price}</h6>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                        <button className="plus-btn" type="button" name="button" onClick={() => handleDcre(v.id)}>
                                                                            -
                                                                        </button>
                                                                        {v.qty}
                                                                        <button className="plus-btn" type="button" name="button" onClick={() => handleIncre(v.id)}>
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                        <h6 className="mb-0">{v.price}</h6>
                                                                    </div>
                                                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                        <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                                                                    </div>
                                                                </div>
                                                                

                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 bg-grey">
                                                            <div className="p-5">
                                                                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                                                <hr className="my-4" />
                                                                <div className="d-flex justify-content-between mb-4">
                                                                    <h5 className="text-uppercase">items 3</h5>
                                                                    <h5>€ 132.00</h5>
                                                                </div>
                                                                <h5 className="text-uppercase mb-3">Shipping</h5>
                                                                <div className="mb-4 pb-2">
                                                                    <select className="select">
                                                                        <option value={1}>Standard-Delivery- €5.00</option>
                                                                        <option value={2}>Two</option>
                                                                        <option value={3}>Three</option>
                                                                        <option value={4}>Four</option>
                                                                    </select>
                                                                </div>
                                                                <h5 className="text-uppercase mb-3">Give code</h5>
                                                                <div className="mb-5">
                                                                    <div className="form-outline">
                                                                        <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                                                                        <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                                                                    </div>
                                                                </div>
                                                                <hr className="my-4" />
                                                                <div className="d-flex justify-content-between mb-5">
                                                                    <h5 className="text-uppercase">Total price</h5>
                                                                    <h5>{v.counter}</h5>
                                                                </div>
                                                                <button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">Register</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </section>

        </div>
    );
}

export default Cart;