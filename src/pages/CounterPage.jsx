import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  const SET_VALUE_TO_ADD = "SET_VALUE_TO_ADD";
  const ADD_VALUE_TO_COUNT = "ADD_VALUE_TO_COUNT";

  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        state.count = state.count + 1;
        return;
      case DECREMENT:
        state.count = state.count - 1;
        return;
      case SET_VALUE_TO_ADD:
        state.valueToAdd = action.payload;
        return;
      case ADD_VALUE_TO_COUNT:
        state.count = state.count + state.valueToAdd;
        state.valueToAdd = 0;
        return;
      default:
        throw new Error(`Invalid action ${action.type}`);
    }
  };

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is: {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Ad a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
