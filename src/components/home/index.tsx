import React, { useEffect } from "react";
import { Container, Button } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import {
  updateCounter,
  resetCounter,
  getUsersRequest,
} from "../../store/home/actions";

export default function HomeComponent() {
  const dispatch = useDispatch();
  const counter = useSelector((state: ApplicationState) => state.home.value);
  const users = useSelector((state: ApplicationState) => state.home.users);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

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
      <Button type="button" onClick={() => dispatch(getUsersRequest())}>
        GET
      </Button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </Container>
  );
}
