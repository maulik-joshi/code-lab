import { useState } from 'react'

function Rep2() {
  const [name, setName] = useState<string>('');
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  
  return (
    <div style={{ padding: 40 }}>
      <p>Hello, {name}</p>
      <input
        type="text"
        value={name}
        className="counter"
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default Rep2;
