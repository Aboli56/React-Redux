import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import { incNum, decNum } from "./actions/index";
export default function App() {
  const myState = useSelector((state) => state.changeNum);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Increment / Decrement</h2>
      <div className="container">
        <button onClick={() => dispatch(decNum())} className="minus">
          -
        </button>
        <h1 className="main-num">{myState}</h1>
        <button onClick={() => dispatch(incNum())} className="plus">
          +
        </button>
      </div>
    </div>
  );
}
