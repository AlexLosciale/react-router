import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/blog/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
  }, [id]);

  if (post === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.tags}</p>
    </div>
  );
};

export default SinglePost;

