import React, { forwardRef } from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let ref = this.ref;
    console.log({ ref });
    return <button ref={ref}>Button</button>;
  }
}

export default forwardRef((props, ref) => <Input {...props} ref={ref} />);
