import { useState, type PropsWithChildren, type ReactNode } from "react"
import styles from "./Counter.module.css"
import type { Theme } from "@/App"

type Props = PropsWithChildren<{
    title: string
    theme?: Theme
    primary?: boolean
}>

export default function Counter({ title, children, primary = false, theme = "light" }: Props): ReactNode {
    const [count, setCount] = useState(0)

    const handleButtonIncrement = (): void => {
        setCount(perv => perv + 1)
    }

    return <div className={`${styles.counter} ${styles[theme]} ${styles[primary === true ? "primary" : ""]}`}>
        <div className={styles.title}>{title}</div>
        <div className={styles.count}>{count}</div>
        <button className={styles.increment} onClick={handleButtonIncrement}>Increment</button>
        {children}
    </div >
}