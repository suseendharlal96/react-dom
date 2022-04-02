import React, { useState } from "react";

const Replies = ({ comment, addReply }) => {
//   console.log({ addReply }); 
  const [shouldShow, setShouldShow] = useState(false);
  const [replyText, setReplyText] = useState("");

  const clear = () => {
    setReplyText("");
    setShouldShow(false);
  };
  return (
    <div>
      <li>{comment.comment}</li>
      <button onClick={() => setShouldShow(true)}>Reply</button>
      {shouldShow && (
        <>
          <input type="text" value={replyText} onChange={({ target: { value } }) => setReplyText(value)} />
          <button onClick={() => addReply({comment, replyText})}>Confirm</button>
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
