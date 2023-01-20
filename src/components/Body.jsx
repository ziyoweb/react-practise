import React from "react";
import { useStudentsContext } from "../context/Students/Students";
import { useTeachersContext } from "./../context/Teachers/Teachers";

const Body = () => {
  const [state, setState] = useStudentsContext();
  const [teacher, setTeacher] = useTeachersContext();
  // console.log(data);

  const onDelete = (id) => {
    let res = state.filter((value) => value.id !== id);
    setState(res);
  };
  return (
    <>
      <h1>Teachers list</h1>
      <div>
        {teacher.map((value) => (
          <h1 key={value.id}>
            {value.id}-{value.name} {value.email}
          </h1>
        ))}
      </div>
      <h1>Students list</h1>
      <div>
        {state.map((item) => (
          <h1 key={item.id}>
            {item.id}-{item.name} {item.surname}
            <button onClick={() => onDelete(item.id)}>delete</button>
          </h1>
        ))}
      </div>
    </>
  );
};

export default Body;
