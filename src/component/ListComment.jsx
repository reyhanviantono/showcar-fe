// src/components/CommentList.js
import React, { useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const comments = [
  { id: 1, user: "John Doe", text: "This is a great post!" },
  { id: 2, user: "Jane Smith", text: "Thanks for sharing this information." },
  { id: 3, user: "Alice Johnson", text: "I found this really helpful." },
];

const ListComment = ({ data }) => {
  return (
    <div className="container mt-5">
      <Card className="card-container">
        <Card.Header>Comments</Card.Header>
        <ListGroup variant="flush">
          {data?.map((comment) => (
            <ListGroupItem key={comment.id}>
              <strong>{comment?.user?.name}</strong>: {comment?.message}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default ListComment;
