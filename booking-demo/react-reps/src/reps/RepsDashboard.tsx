import { useState } from "react";
import { Rep1, Rep2, Rep3, Rep4, Rep5, Rep6, Rep7, Rep8, Rep9, Rep10 } from "./index";

const reps = [
  { name: "Rep 1", component: <Rep1 /> },
  { name: "Rep 2", component: <Rep2 /> },
  { name: "Rep 3", component: <Rep3 /> },
  { name: "Rep 4", component: <Rep4 /> },
  { name: "Rep 5", component: <Rep5 /> },
  { name: "Rep 6", component: <Rep6 /> },
  { name: "Rep 7", component: <Rep7 /> },
  { name: "Rep 8", component: <Rep8 /> },
  { name: "Rep 9", component: <Rep9 /> },
  { name: "Rep 10", component: <Rep10 /> }
];

export default function RepsDashboard() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>React + TypeScript Reps Dashboard</h1>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
        {reps.map((r, i) => (
          <button key={i} onClick={() => setSelected(i)}>
            {r.name}
          </button>
        ))}
      </div>

      {selected !== null && (
        <div style={{ border: "1px solid #ccc", padding: 20 }}>
          {reps[selected].component}
        </div>
      )}
    </div>
  );
}
