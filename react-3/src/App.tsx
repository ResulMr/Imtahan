import  { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Say: ${count}`;
  }, [count]); 

  return (
    <div>
      <h1>Say: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Artır</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
    </div>
  );
}


export default App