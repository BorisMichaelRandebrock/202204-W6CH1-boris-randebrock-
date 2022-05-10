import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTaskActionCreator } from "../../redux/features/taskSlice";

const StyledFormComponent = styled.div`
  border-style: dashed;
  margin: 30px;
  border-radius: 20px;
  padding: 20px;
  font-size: 15px;
  form {
    display: flex;
    flex-direction: column;
  }

  input {
    border-style: dashed;
    border-width: 1px;
    padding: 10px;
    margin: 10px;
    font-size: 15px;
    border-radius: 10px;
    text-align: center;
  }
  button {
    border-style: dashed;
    border-width: 1px;
    padding: 10px;
    margin: 10px;
    font-size: 15px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const uniqueId = function () {
    return Date.now();
  };

  const changeInputValue = (event) => {
    setName(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    dispatch(addTaskActionCreator({ id: uniqueId(), name, done: false }));
    setName("");
  };

  return (
    <StyledFormComponent>
      <form onSubmit={addTask} autoComplete="off">
        <label htmlFor="formname">Task Name</label>
        <input
          type="text"
          id="formname"
          name="fname"
          value={name}
          onChange={changeInputValue}
        />
        <button type="submit" value="Send">
          Add Your Task
        </button>
      </form>
    </StyledFormComponent>
  );
};

export default Form;
