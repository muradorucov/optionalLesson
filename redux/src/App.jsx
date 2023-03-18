import { useSelector } from 'react-redux'
import './App.css'
import CounterLeftbtn from './components/CounterLeftbtn'
import CounterList from './components/CounterList'
import CounterRigthbtn from './components/CounterRigthbtn'

function App() {

  const { counter } = useSelector(state => state)

  return (
    <div className="App">
      <CounterLeftbtn />
      <button>{counter}</button>
      <CounterRigthbtn />
      <CounterList />
    </div>
  )
}

export default App
