import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const index = () => {
  return (
    <CodeBlock
      text={"console.log('This is js')"}
      language={"javascript"}
      theme="dracula"
    />
  );
};

export default index;
