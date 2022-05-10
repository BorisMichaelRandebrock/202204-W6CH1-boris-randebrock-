import { useSelector } from "react-redux";
import Task from "../Task/Task";
import styled from "styled-components";

const StyledTasksListComponent = styled.div`
  ul {
    padding-left: 0;
  }
  li {
    list-style: none;
  }
`;

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);

  const randomKey = function () {
    return Math.random().toString(36);
  };

  return (
    <StyledTasksListComponent>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={randomKey()}>
              <Task task={task} />
            </li>
          );
        })}
      </ul>
    </StyledTasksListComponent>
  );
};

export default TasksList;
