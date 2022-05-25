import React, { useState } from "react";

const NestedInner = ({ folder }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div style={{ padding: "0.2em" }}>
      {folder.children ? (
        <strong style={{ cursor: "pointer" }} onClick={() => setIsHidden((prev) => !prev)}>
          {isHidden ? <i className="fa-solid fa-folder-closed" style={{ marginRight: "10px" }}></i> : <i className="fa-solid fa-folder-open" style={{ marginRight: "10px" }}></i>}
          {folder.name}
        </strong>
      ) : (
        <span>
          <i className="fa-solid fa-file" style={{ marginRight: "10px" }}></i>
          {folder.name}
        </span>
      )}
      {folder.children &&
        folder.children.map((child) => (
          <div style={{ marginLeft: "30px" }} key={child.name} hidden={isHidden}>
            <NestedInner folder={child} />
          </div>
        ))}
    </div>
  );
};

export default NestedInner;
