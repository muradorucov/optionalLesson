import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListAction } from '../redux/actions/list.action'

function CounterList() {

    const dispatch = useDispatch()
    const { counter, list } = useSelector(state => state)
    const additem = () => {
        dispatch(ListAction(counter))
    }

    return (
        <div>
            <button onClick={additem}>add to list</button>
            <ul>
                {list && list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default CounterList