import React from 'react'
import { useDispatch } from 'react-redux'
import { CounterDecrement } from '../redux/actions/counter.action'

export default function CounterLeftbtn() {
    const dispatch = useDispatch()
    const decerement = () => {
        dispatch(CounterDecrement(3))
    }
    return (
        <button onClick={decerement}>Decrement</button>
    )
}
