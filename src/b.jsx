import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams(); // Retrieve the post id from the URL
  const [post, setPost] = useState(null);
  const api = `https://jsonplaceholder.typicode.com/posts/${id}`;

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        setPost(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="container mt-5">
      {post ? (
        <div>
          <h1>Post ID: {post.id}</h1>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
};

export default PostDetail;
