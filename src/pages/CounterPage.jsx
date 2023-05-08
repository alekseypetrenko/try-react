import Button from "../components/Button";
import useCounterAndLog from "../hooks/useCounterAndLog";

function CounterPage({ initialCount }) {
  const { count, increment } = useCounterAndLog(initialCount);

  return (
    <div>
      <h1>Count is: {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default CounterPage;
