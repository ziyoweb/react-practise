import React, { useState } from "react";

const LocalStoragePractise = () => {
  const [state, setState] = useState(localStorage.getItem("language"));
  const [isOpen, setOpen] = React.useState(
    JSON.parse(localStorage.getItem("is-open")) || false
  );

  const onSelect = (e) => {
    localStorage.setItem("language", e.target.value);
    setState(e.target.value);
  };

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  React.useEffect(() => {
    localStorage.setItem("is-open", JSON.stringify(isOpen));
  }, [isOpen]);
  return (
    <div>
      <div>
        <button onClick={() => localStorage.removeItem("language")}>
          remove selecet localStorage
        </button>
        <button onClick={handleToggle}>Toggle</button>
        {isOpen && <div>Content</div>}
      </div>
      <select defaultValue={state} onChange={onSelect} name="" id="">
        <option value="uz">O'zbek</option>
        <option value="ru">Russia</option>
        <option value="en">English</option>
      </select>
      <button onClick={() => localStorage.clear()}>clear localstorage</button>
    </div>
  );
};

export default LocalStoragePractise;
