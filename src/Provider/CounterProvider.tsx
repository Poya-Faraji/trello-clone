import { useState, type PropsWithChildren, type ReactNode } from "react";

import CounterContext from "@/context/counter-context";

type Props = PropsWithChildren

export default function CounterProvider({ children }: Props): ReactNode {
    const [count, setCount] = useState<number>(0)

    const increment = (): void => {
        setCount(prev => prev + 1)
    };

    const reset = (): void => {
        setCount(0)
    };
    return (
        <CounterContext value={{ count, increment, reset }}>
            {children}
        </CounterContext>
    )
}