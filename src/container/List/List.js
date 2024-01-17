import React, { useEffect } from 'react';

function List(props) {

    const getData = async () => {
        let response = await fetch('https://fakestoreapi.com/products')
        let data = await response.json();
        
        console.log(data);
    }

    useEffect(() => {
        getData();
    }, [])

    
    return (
        <div>
            {
                
            }
        </div>
    );
}

export default List;