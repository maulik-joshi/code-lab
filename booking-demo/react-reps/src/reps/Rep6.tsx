type GreetingProps = {
  name: string;
  age: number;
};

function Greeting({ name, age }: GreetingProps) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Hello, {name}!</h3>
      <p>You are {age} years old.</p>
    </div>
  );
}

function Rep6() {
  return (
     <div style={{ padding: 40 }}>
      <h1>Rep 6 — Typed Components</h1>

      <Greeting name="Maulik" age={34} />
      <Greeting name="Sarah" age={28} />
      <Greeting name="John" age={45} />
    </div>
  );
}

export default Rep6;
