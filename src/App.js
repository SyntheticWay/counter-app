import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./actions";
import { UserSelect } from "./components/UserSelect";

function App() {
  const { counterReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(counterReducer.selectedUser);

  return (
    <div className="container">
      <h1>{counterReducer.count}</h1>

      <div className="btn-wrapper">
        <button
          disabled={counterReducer.selectedUser === "USER_TWO"}
          onClick={() => dispatch(increment())}
        >
          +1 <span>({counterReducer.userOneCount})</span>
        </button>
        <button
          disabled={counterReducer.selectedUser === "USER_ONE"}
          onClick={() => dispatch(decrement())}
        >
          -1 <span>({counterReducer.userTwoCount})</span>
        </button>
        <button
          disabled={
            counterReducer.selectedUser === "USER_ONE" ||
            counterReducer.selectedUser === "USER_TWO"
          }
          onClick={() => dispatch(reset())}
        >
          0
        </button>
        <UserSelect />
      </div>
    </div>
  );
}

export default App;
