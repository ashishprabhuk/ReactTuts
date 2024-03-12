import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incAmount } from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(amount) || 0;

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <button onClick={() => dispatch(increment())}> + </button>
      <span style={{ margin: "10px" }}>{count}</span>
      <button onClick={() => dispatch(decrement())}> - </button>
      <div style={{ margin: "10px" }}>
        <button onClick={() => resetAll()}> Reset </button>
      </div>
      <div>
        <input
          type="text"
          style={{ margin: "10px", width: "50px" }}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incAmount(addValue))}> add </button>
      </div>
      <button onClick={resetAll}> Reset </button>
    </div>
  );
}
