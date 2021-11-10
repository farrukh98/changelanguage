import React from "react";
import { useDispatch } from "react-redux";
import { decrementCounterAction, subtractCounterAction } from "../../redux/modules/counter/counterAction";

function ComponentC() {
  const dispatch = useDispatch();

  return (
    <div>
      component c <br />
      <button onClick={() => dispatch(decrementCounterAction())}>
        decrement
      </button>
      <button onClick={() => dispatch(subtractCounterAction(5))}>
        subtract
      </button>
    </div>
  );
}

export default ComponentC;
