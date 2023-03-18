export function CounterIncement(payload) {
    return { type: "INCREMENT", payload }
}

export function CounterDecrement(payload) {
    return { type: "DECREMENT", payload }
}