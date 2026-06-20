import { createContext } from "react";

type ContextValue = {
  count: number;
  increment: () => void;
  reset: () => void;
};

const CounterContext = createContext<ContextValue>({
  count: 0,
  increment: () => {},
  reset: () => {},
});

export default CounterContext;
