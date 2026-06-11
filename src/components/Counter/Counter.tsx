import { useState, type ReactNode } from "react"
import styles from "./Counter.module.css"

type Props = {
    title: string
}

export default function Counter({ title }: Props): ReactNode {
    const [count, setCount] = useState(0)

    const handleButtonIncrement = (): void => {
        setCount(perv => perv + 1)
    }

    return <div className={styles.counter}>
        <div className={styles.title}>{title}</div>
        <div className={styles.count}>{count}</div>

        <button className={styles.increment} onClick={handleButtonIncrement}>Increment</button>
    </div>
}