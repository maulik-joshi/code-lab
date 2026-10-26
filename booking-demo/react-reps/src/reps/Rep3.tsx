import { useState } from 'react'

type User = {
  name: string;
  age: number;
};

function Rep3() {
  const [user, setUser] = useState<User>({ 
    name: '', 
    age: 0 
  });

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, name: e.target.value});
  };

  const updateAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, age: Number(e.target.value)});
  };
  
  return (
    <div style={{ padding: 40 }}>
      <p>User: {user.name}, Age: {user.age}</p>
      <input
        type="text"
        value={user.name}
        className="counter"
        onChange={updateName}
        placeholder="Enter your name"
      />
      <br />
      <input
        type="number"
        value={user.age}
        className="counter"
        onChange={updateAge}
        placeholder="Enter your age"
      />
    </div>
  );
}

export default Rep3;
