import React, { useState } from "react";

import classNames from "./Comment.module.css";

import Replies from "./Replies";

const Comment = () => {
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
      console.log({ parent });
      parent.forEach((k) => {
        console.log({ obj: k });
        const found = k.id === val.comment.id;
        console.log(found);
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
    <div>
      <input type="text" />
      <button>Comment</button>
      <ul>
        {comment.map((c, i) => (
          <Replies comment={c} key={i} addReply={(val) => addReply(val)} />
        ))}
      </ul>
    </div>
  );
};

export default Comment;
