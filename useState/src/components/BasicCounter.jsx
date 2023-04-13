import { useState } from "react";

const BasicCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>inc. count</button>
      <button onClick={() => setCount(count - 1)}>dec. count</button>
      <button onClick={() => setCount(0)}>reset</button>
    </>
  );
};

export default BasicCounter;
