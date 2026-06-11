import { useState, type ReactNode } from "react";

const selection = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function App(): ReactNode {
  const [numbers, setNumbers] = useState(selection)

  const handleButtonClick = (): void => {
    setNumbers(numbers => numbers.filter((x) => x % 2 === 0))
    setNumbers(numbers => numbers.filter((x) => x % 3 === 0))
    // do above instead of below 
    // below is wrong and doesn't use the lates updated version of the state value.
    setNumbers(numbers.filter((x) => x % 2 === 0))
    setNumbers(numbers.filter((x) => x % 3 === 0))
  }

  return (
    <div>
      <pre>filtere numbers: {JSON.stringify(selection)}</pre>
      <pre>{JSON.stringify(numbers)}</pre>
      <button onClick={handleButtonClick}>filter</button>
    </div>
  );
}