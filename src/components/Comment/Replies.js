import React, { useState } from "react";

import classNames from './Comment.module.css'

const Replies = ({ comment, addReply }) => {
  //   console.log({ addReply });
  const [shouldShow, setShouldShow] = useState(false);
  const [replyText, setReplyText] = useState("");

  const clear = () => {
    setReplyText("");
    setShouldShow(false);
  };

  const reply = (val) => {
    addReply(val);
    clear();
  };
  return (
    <div>
      <li class={classNames.replyList}>{comment.comment}</li>
      <button onClick={() => setShouldShow(true)}>Reply</button>
      {shouldShow && (
        <>
          <input type="text" value={replyText} onChange={({ target: { value } }) => setReplyText(value)} />
          <button onClick={() => reply({ comment, replyText })}>Confirm</button>
          <button onClick={() => clear()}>Cancel</button>
        </>
      )}
      {comment.replies && (
        <ul>
          {comment.replies.map((c, i) => (
            <Replies comment={c} key={i} addReply={(val) => addReply(val)} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Replies;
