import { useState } from 'react'

type Todo = {
  id: number;
  text: string;
};

function Rep4() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>('');

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text }]);
    setText('');
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div style={{ padding: 40 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={addTodo}>Add</button>
    
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => removeTodo(t.id)} style={{ marginLeft: 10 }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rep4;
