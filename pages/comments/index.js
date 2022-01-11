import React, { useState } from "react";

const CommentsPage = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    const response = await fetch("api/comments");
    const data = await response.json();
    setData(data);
  };

  const submitComment = async (e) => {
    const response = await fetch("api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <div>
      <h1>Comments</h1>
      Leave comment{" "}
      <input value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={submitComment}>submit</button>
      <button onClick={fetchComments}>Load comments</button>
      <ul>
        {data.map((comment) => (
          <div key={comment.id}>
            <li>{comment.text}</li>
            <button onClick={() => handleDelete(comment.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;
