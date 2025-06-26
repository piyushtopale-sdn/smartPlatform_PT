import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { decrement } from './store';

export default function Host() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>This is host app route.</h1>
            <h2><Link to={"/"}>Navigate to login</Link></h2>
            Count: {count}
            <button onClick={() => dispatch(decrement())}>Decrement Store Count</button>
        </div>
    )
}
