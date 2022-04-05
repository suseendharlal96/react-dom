import React, { useState, useRef } from "react";

import classNames from "./Comment.module.css";

import Replies from "./Replies";

const Comment = () => {
  const firstCommentRef = useRef();
  const [comment, setComments] = useState([
    {
      id: 1,
      comment: "First comment",
      replies: [
        {
          id: 3,
          comment: "First reply",
        },
      ],
    },
    {
      id: 2,
      comment: "Second comment",
      replies: [{ id: 4, comment: "Second reply" }],
    },
  ]);

  const addReply = (val) => {
    const commentClone = JSON.parse(JSON.stringify(comment));
    findObject(commentClone);
    function findObject(parent) {
      parent.forEach((k) => {
        const found = k.id === val.comment.id;
        if (found && k["replies"]) {
          k["replies"].push({ id: Date.now() * Math.random(), comment: val.replyText });
        } else if (found) {
          k["replies"] = [{ id: Date.now() * Math.random(), comment: val.replyText }];
        } else if (!found && k["replies"]) {
          findObject(k["replies"]);
        }
      });
    }
    setComments(commentClone);
  };

  return (
    <div className={classNames.commentContainer}>
      <input type="text" ref={firstCommentRef} />
      <button
        onClick={() => {
          setComments((prev) => [...prev, { id: Date.now() * Math.random(), comment: firstCommentRef.current.value }]);
          firstCommentRef.current.value = "";
        }}
      >
        Comment
      </button>
      <ul>
        {comment.map((c, i) => (
          <Replies comment={c} key={i} addReply={(val) => addReply(val)} />
        ))}
      </ul>
    </div>
  );
};

export default Comment;
