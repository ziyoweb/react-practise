import React, { useState, useReducer } from "react";

export default function Hook() {
  const [product, setProduct] = useState([
    { id: 1, amount: 0 },
    { id: 2, amount: 0 },
    { id: 3, amount: 0 },
  ]);
  const [state, setState] = useState(1);

  // const [counter, dispatch] = useReducer((state, action) => {
  //   console.log(state, action);
  //   return action;
  // }, 0);

  const onPlus = (id) => {
    let res = product.map((value) =>
      value.id === id ? { ...value, amount: ++value.amount } : value
    );

    setProduct(res);
    console.log(product);
  };

  const onMinus = (id) => {
    let res = product.map((value) =>
      value.id === id ? { ...value, amount: value.amount - 1 } : value
    );

    setProduct(res);
    console.log(product);
  };

  const [amount, dispatch] = useReducer((ownstate, action) => {
    console.log(ownstate);
    console.log(action);
    switch (action.type) {
      case "select":
        setState(Number(action.payload));
        return ownstate;
      case "incrise":
        console.log(action.payload);
        return ownstate + action.payload;
      default:
        return ownstate;
    }
  }, 0);

  return (
    <>
      <div>
        <button onClick={() => dispatch("qalay")}>-</button>
        <span>counter</span>
        <button onClick={() => dispatch("qalay")}>+</button>
      </div>

      <div>
        <select
          name=""
          onChange={(e) =>
            // dispatch({ type: "select", payload: e.target.value }
            setState(Number(e.target.value))
          }
          id=""
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={() => dispatch({ type: "incrise", payload: state })}>
          {state}
        </button>
        <span>{amount}</span>
      </div>

      <div>
        {product.map((value) => (
          <div key={value.id}>
            <button onClick={() => onMinus(value.id)}>-</button>
            <span>{value.amount}</span>
            <button onClick={() => onPlus(value.id)}>+</button>
          </div>
        ))}
      </div>
    </>
  );
}
