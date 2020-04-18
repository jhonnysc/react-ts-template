import React from "react";
import { Container, Button } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { updateCounter, resetCounter } from "../../store/home/actions";

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state: ApplicationState) => state.home.value);

  return (
    <Container>
      {counter}
      <Button type="button" onClick={() => dispatch(updateCounter(1))}>
        ADD
      </Button>
      <Button type="button" onClick={() => dispatch(updateCounter(-1))}>
        SUBSTRACT
      </Button>
      <Button type="button" onClick={() => dispatch(resetCounter())}>
        RESET
      </Button>
    </Container>
  );
}
