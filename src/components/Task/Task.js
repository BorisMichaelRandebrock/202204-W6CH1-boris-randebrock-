import { useDispatch } from "react-redux";
import {
  editTaskActionCreator,
  removeTaskActionCreator,
  updateTaskActionCreator,
} from "../../redux/features/taskSlice";
import styled from "styled-components";

const StyledTaskComponent = styled.div`
  border-style: dashed;
  margin: 30px;
  border-radius: 20px;
  padding: 20px;
  ul {
    margin-bottom: 10px;
  }

  li {
    list-style: none;
    padding: 10px;
  }
  button {
    border-style: dashed;
    border-width: 1px;
    padding: 10px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;
  }
`;

const Task = ({ task: { id, name, done }, inputValue }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(removeTaskActionCreator(id));
  };

  const updateTask = () => {
    dispatch(updateTaskActionCreator(id));
  };

  const editTask = () => {
    dispatch(editTaskActionCreator());
  };

  return (
    <StyledTaskComponent>
      <ul>
        <li>Id: {id}</li>
        <li>Task Name: {name}</li>
        <li>
          Task Status:{" "}
          {done
            ? "You the best, it's finished"
            : "C'mon, you have to finish that"}
        </li>
      </ul>
      <div>
        <button onClick={updateTask}>Mark as done</button>
        <button onClick={editTask}>Edit</button>
        <button onClick={removeTask}>Remove</button>
      </div>
    </StyledTaskComponent>
  );
};

export default Task;
