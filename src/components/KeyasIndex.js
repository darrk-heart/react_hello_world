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

// WHEN TO USE THE INDEX AS KEY 
// 1. The items in your list do not have a unique ID 
// 2. The list is a static list and will not change 
// 3. The list will never be reordered or filtered 
