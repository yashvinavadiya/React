import './App.css'
import { useDispatch  , useSelector } from 'react-redux'
import { increment , decrement , reset } from './redux/Action'

const App = () => {

  const count = useSelector((state) => state)

  const dispatch = useDispatch()

  return (
    <>
      <div className='head'>React Redux Functionality</div>
      <div className='btn'>{count}</div>
      <button className='btn' onClick={() => dispatch(increment())}>increment</button>
      <button className='btn' onClick={() => dispatch(decrement())}>decrement</button>
      <button className='btn' onClick={() => dispatch(reset())}>reset</button>
    </>
  )
}

export default App