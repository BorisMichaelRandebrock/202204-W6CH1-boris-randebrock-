import { useDispatch } from "react-redux";
import { editTaskActionCreator } from "../../redux/features/taskSlice";
import styled from "styled-components";
import {
  removeTasksThunk,
  updateTasksThunk,
} from "../../redux/thunks/tasksListThunks";

const StyledTaskComponent = styled.div`
  border-style: solid;
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
    border-style: solid;
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
    dispatch(removeTasksThunk(id));
  };

  const updateTask = () => {
    dispatch(updateTasksThunk(id));
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
            ? "You´re the best, it's finished"
            : "What are you waiting for?"}
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
