import { reset } from "../store/counterSlice";
import { useDispatch } from "react-redux";

export default function CounterReset() {
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(reset());
  }

  return (
    <div>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        리셋
      </button>
    </div>
  );
}
