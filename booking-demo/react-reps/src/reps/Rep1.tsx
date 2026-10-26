import { useState } from 'react'

function Rep1() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </div>
  );
}

export default Rep1;
