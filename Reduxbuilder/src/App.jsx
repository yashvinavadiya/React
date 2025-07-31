import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterslice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Redux Builder Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(reset())}>🔁 Reset</button>
    </div>
  );
}

export default App;
