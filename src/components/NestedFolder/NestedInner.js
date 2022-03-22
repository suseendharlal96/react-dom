import React, { useState } from "react";

const NestedInner = ({ folder }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div>
      {folder.children ? <strong style={{cursor: 'pointer'}} onClick={() => setIsHidden((prev) => !prev)}>{folder.name}</strong> : <p onClick={() => setIsHidden((prev) => !prev)}>{folder.name}</p>}
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
