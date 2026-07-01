import { createContext } from "react";

type ContextValue = {
  count: number;
  increment: () => void;
  reset: () => void;
};

const CounterContext = createContext<ContextValue>({} as ContextValue);

export default CounterContext;
