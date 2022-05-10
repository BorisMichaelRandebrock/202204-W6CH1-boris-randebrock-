import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import toDos from "./data/toDos";
import TasksList from "./components/TasksList/TasksList";
import Form from "./components/Form/Form";
import loadtoDoListThunk from "./redux/thunks/tasksListThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadtoDoListThunk(toDos));
  }, [dispatch]);

  return (
    <div className="App">
      <h1> SUPER FUN RANDOM BULLSHIT TO DO </h1>
      <Form />
      <TasksList />
    </div>
  );
}

export default App;
