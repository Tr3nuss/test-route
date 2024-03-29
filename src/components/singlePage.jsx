import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Singlepage() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [id]);

  return (
    <div>
      {data && (
        <>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
}
