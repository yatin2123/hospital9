import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../../redux/action/counter.action';

function Counter(props) {

    const counter = useSelector(state => state.counter)
    // console.log(counter);

    const dispatch = useDispatch()
    const handleInc = () => {
        dispatch(Increment())
    }

    const handleDre = () => {
        dispatch(Decrement())
    }
    return (
        <div>
            <button onClick={handleInc()}>+</button>
            
            <button onClick={handleDre()}>-</button>
        </div>
    );
}

export default Counter;