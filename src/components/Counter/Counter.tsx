import { useState, type ReactNode } from "react"
import styles from "./Counter.module.css"
import type { Theme } from "@/App"

type Props = {
    title: string
    theme?: Theme
    children: ReactNode
}

export default function Counter({ title, children, theme = "light" }: Props): ReactNode {
    const [count, setCount] = useState(0)

    const handleButtonIncrement = (): void => {
        setCount(perv => perv + 1)
    }

    return <div className={`${styles.counter} ${styles[theme]}`}>
        <div className={styles.title}>{title}</div>
        <div className={styles.count}>{count}</div>
        <button className={styles.increment} onClick={handleButtonIncrement}>Increment</button>
        {children}
    </div >
}