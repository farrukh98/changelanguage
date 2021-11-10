import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { makeDark, makeLight } from "../../redux/modules/mode/modeAction";
import { Button } from "./styles";

function ComponentA() {
  const counter = useSelector((state) => state.counter);
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  return (
    <div>
      component a <br />
      {counter} <br />
      {mode ? "LIGHT MODE" : "DARK MODE"} <br />
      <Button onClick={() => dispatch(makeDark())} mode={mode}>
        dark mode
      </Button>
      <Button onClick={() => dispatch(makeLight())} mode={mode}>
        light mode
      </Button>
    </div>
  );
}

export default ComponentA;
