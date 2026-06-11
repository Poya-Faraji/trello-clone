import { useState, type ReactNode } from "react";

type User = {
  username: string;
  password: string
}

export default function App(): ReactNode {
  const [user, setUser] = useState<Readonly<User>>(({
    username: "Pouya",
    password: "not1234"
  }))

  const handleButtonClick = (): void => {
    setUser({
      ...user,
      password: "4321"
    })
  }

  return (
    <div>
      <pre>{JSON.stringify(user)}</pre>
      <button onClick={handleButtonClick}>update user password</button>
    </div>
  );
}