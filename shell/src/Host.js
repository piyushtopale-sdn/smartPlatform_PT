import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// import { decrement } from './store';
import './Host.css';

export default function Host() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="host-container">
            <h1>This is host app route.</h1>
            {/* <h2>
                <Link className="host-link" to={"/"}>Navigate to login</Link>
            </h2> */}
            {/* <div className="host-count">
                Count: {count}
            </div>
            <button className="host-button" onClick={() => dispatch(decrement())}>
                Decrement Store Count
            </button> */}
            <div>
                <Link to="/" className="login-link">
                    Login
                </Link>
            </div>
        </div>

    )
}
