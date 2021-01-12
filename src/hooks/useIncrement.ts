import { useState, useEffect } from "react";

export function useIncrementTo(
  from: number,
  to: number,
  interval: number
): [VoidFunction, number] {
  const [value, setValue] = useState(from);
  const performIncrement = () => setValue(value + 1);
  useEffect(() => {
    if (value < to) {
      setTimeout(() => {
        performIncrement();
      }, interval);
    }
  }, [value]);
  return [performIncrement, value];
}
