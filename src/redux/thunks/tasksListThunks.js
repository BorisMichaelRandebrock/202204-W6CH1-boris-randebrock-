import axios from "axios";
import { loadTasksActionCreator } from "../features/taskSlice";

export const loadtoDoListThunk = () => async (dispatch) => {
  const { data: TasksList } = await axios.get(process.env.REACT_APP_API_URL);

  dispatch(loadTasksActionCreator(TasksList));
};

export default loadtoDoListThunk;
