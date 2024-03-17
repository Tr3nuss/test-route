import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      {data.map((post) => (
        <Link key={post.id} to={`/home/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </>
  );
}
