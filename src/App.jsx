import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Body from "./components/Body";
// import "./";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Body />
    </>
  );
}

export default App;
