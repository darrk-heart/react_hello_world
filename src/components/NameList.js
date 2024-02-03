import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Theo",
      age: 30,
      skill: "hack",
    },
    {
      id: 2,
      name: "Mat",
      age: 19,
      skill: "sing",
    },
    {
      id: 3,
      name: "Bervlyn",
      age: 23,
      skill: "code",
    },
    {
      id: 4,
      name: "Scott",
      age: 28,
      skill: "dance",
    },
  ];
  const personList = persons.map((person) => <Person key={person.id} person={person} />);
  return <div>{personList}</div>;
}

export default NameList;
