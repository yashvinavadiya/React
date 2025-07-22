import "./App.css";
import { useSelector , useDispatch } from "react-redux";
import { increment,decrement,incrementByAmount} from "./redux/Counterslice";

const App = () => {

  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  console.log(count);
  

  return (
    <>
      <h1 className="head">This is Redux Toolkit Functionality</h1>
      <div className="btn">{count}</div>
      <button className="btn" onClick={() => dispatch(increment())}>increment</button>
       <button className="btn" onClick={() => dispatch(decrement())}>decrement</button>
        <button className="btn" onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</button>
    </>
  );
};

export default App;