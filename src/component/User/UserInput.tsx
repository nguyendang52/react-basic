import { useState } from "react";

import { Form, Button } from "react-bootstrap";
import "./UserInput.css";

interface Props {
  onAddUser(name: string, age: number): void;
}
const UserInput = (props: Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const nameChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setName(event.target.value);
  };
  const ageChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setAge(+event.target.value);
  };
  const addUserHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (name.trim().length === 0 || age <= 0) {
      return;
    }
    if (age < 1) {
      return;
    }

    props.onAddUser(name.trim(), age);
  };

  return (
    <Form className="container" onSubmit={addUserHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={nameChangeHandler}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          onChange={ageChangeHandler}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default UserInput;
