import React from "react";

function KeyasIndex() {
  const names = ["Tawiah", "John", "Frimpong"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default KeyasIndex;
