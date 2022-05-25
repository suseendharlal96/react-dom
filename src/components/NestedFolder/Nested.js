import React from "react";

import NestedInner from "./NestedInner";

const folderObj = {
  root: [
    {
      name: "public",
      children: [{ name: "index.html" }, { name: "favicon.icon" }],
    },
    { name: "src", children: [{ name: "components", children: [{ name: "Button.js" }, { name: "Clock", children: [{ name: "Clock.js" }] }] }] },
    {
      name: ".gitignore",
    },
    {
      name: "package.json",
    },
    {
      name: "README.md",
    },
    {
      name: "yarn.lock",
    },
  ],
};

const Nested = () => {
  return (
    <div>
      {folderObj.root.map((folder) => (
        <NestedInner key={folder.name} folder={folder} />
      ))}
    </div>
  );
};

export default Nested;
