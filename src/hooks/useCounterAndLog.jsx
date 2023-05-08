import { useState, useEffect } from "react";

export default function useCounterAndLog(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
}
