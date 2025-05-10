import { useState, useEffect } from "react";

import { useAbortRequest } from "./useAbortRequest";

interface Post {
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { getSignal, abort } = useAbortRequest();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        setPosts([]);

        const signal = getSignal();

        // Artificial delay
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
          { signal }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          setError("Fetch was aborted.");
        } else {
          setError("Fetch error:" + (error as Error).message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getSignal, abort]);

  return (
    <div>
      {posts.length === 0 && <button onClick={abort}>Abort Request</button>}

      {loading && <p>Loading posts (wait 3s)...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
