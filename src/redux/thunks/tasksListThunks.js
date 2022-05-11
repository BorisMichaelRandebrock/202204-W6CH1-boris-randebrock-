import axios from "axios";
import { loadTasksActionCreator } from "../features/taskSlice";

export const loadtoDoListThunk = () => async (dispatch) => {
  const { data: TasksList } = await axios.get(process.env.REACT_APP_API_URL);

  dispatch(loadTasksActionCreator(TasksList));
};

export const removeTasksThunk = (id) => async (dispatch) => {
  await axios.delete(`${process.env.REACT_APP_API_URL}${id}`);
  dispatch(removeTasksThunk(id));
};

export const addTasksThunk = (task) => async (dispatch) => {
  const { data: tasks } = await axios.post(process.env.REACT_APP_API_URL, task);

  dispatch(addTasksThunk(tasks));
};
export const updateTasksThunk = (id) => async (dispatch) => {
  await axios.update(`${process.env.REACT_APP_API_URL}${id}`);
  dispatch(updateTasksThunk);
};

export default loadtoDoListThunk;
