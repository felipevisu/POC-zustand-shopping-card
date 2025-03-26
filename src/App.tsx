import { create } from "zustand";

import "./App.css";

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set((state) => ({ count: 0 })),
}));

function App() {
  const { count, increase, decrease, reset } = useStore((state) => state);

  return (
    <>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
