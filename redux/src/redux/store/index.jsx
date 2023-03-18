import { combineReducers, createStore } from "redux";
import { CounterReducer } from "../reducers/counter.recuer";
import { ListReducer } from "../reducers/list.reducer";

const store = combineReducers({
    counter: CounterReducer,
    list: ListReducer
})

export const globalStore = createStore(
    store
)