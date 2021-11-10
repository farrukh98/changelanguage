import React from "react";
import { useDispatch } from "react-redux";
import { addCounterAction, incrementCounterAction } from "../../redux/modules/counter/counterAction";

function ComponentB() {
  const dispatch = useDispatch();

  return (
    <div>
      component b <br />
      <button onClick={() => dispatch(incrementCounterAction())}>increment</button>
      <button onClick={() => dispatch(addCounterAction(5))}>add</button>
    </div>
  );
}

export default ComponentB;
