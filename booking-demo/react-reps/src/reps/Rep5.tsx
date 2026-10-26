import { useEffect, useState } from 'react'

type Post = {
  id: number;
  title: string;
  body: string;
};

function Rep5() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0,5));
        setLoading(false);
      });
  }, []);
  
  return (
     <div style={{ padding: 40 }}>
      {loading && <p>Loading...</p>}

      {!loading &&
        posts.map((p) => (
          <div key={p.id} style={{ marginBottom: 20 }}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
    </div>
  );
}

export default Rep5;
