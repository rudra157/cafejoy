import { useReducer } from 'react';
import React from 'react'

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

function Hook() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>➕ Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>➖ Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>🔁 Reset</button>
        </div>

    );

}

export default Hook