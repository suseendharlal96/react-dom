import React, { useState } from "react";

import Button from "./Button";
import { btnArr } from "../../util/rawData";

console.log({ btnArr });
const Controls = () => {
  return btnArr.map((btn) => <Button key={btn.symbol} {...btn} />);
};

export default Controls;
