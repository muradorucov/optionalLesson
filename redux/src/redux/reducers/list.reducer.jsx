const intialState = JSON.parse(localStorage.getItem("list"))

export function ListReducer(state = intialState, action) {
    if (action.type === "ADD_LIST") {
        state = [...state, action.payload]
        localStorage.setItem("list", JSON.stringify([...state]))
        return state
    }
    return state
}