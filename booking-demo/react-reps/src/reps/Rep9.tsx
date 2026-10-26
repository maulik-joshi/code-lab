import { create } from "zustand";

type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useCounter = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function CounterDisplay() {
  const count = useCounter((s) => s.count);
  return <h2>Count: {count}</h2>;
}

function CounterButtons() {
  const increment = useCounter((s) => s.increment);
  const decrement = useCounter((s) => s.decrement);

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement} style={{ marginLeft: 10 }}>
        -
      </button>
    </div>
  );
}

function Rep9() {
  return (
    <div style={{ padding: 40 }}>
      <CounterDisplay />
      <CounterButtons />
    </div>
  );
}

export default Rep9;
