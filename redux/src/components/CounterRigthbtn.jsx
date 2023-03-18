import React from 'react'
import { useDispatch } from 'react-redux'
import { CounterIncement } from '../redux/actions/counter.action'

export default function CounterRigthbtn() {
    const dispatch =  useDispatch()
    function incremenet() {
        dispatch(CounterIncement(4))
    }
    return (
        <button onClick={incremenet}>Inrecement</button>
    )
}
