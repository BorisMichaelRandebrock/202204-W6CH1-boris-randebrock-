import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    loadTasks: (_, action) => [...action.payload],
    updateTask: (tasks, action) =>
      tasks.map((tasks) =>
        tasks.id === action.payload
          ? { ...tasks, done: !tasks.done }
          : { ...tasks }
      ),
    removeTask: (tasks, action) =>
      tasks.filter((task) => task.id !== action.payload),
    addTask: (tasks, action) => [...tasks, action.payload],
    editTask: (tasks, action) =>
      tasks.map((tasks) =>
        tasks.id === action.payload.id ? { ...tasks } : { ...tasks }
      ),
  },
});

export const {
  loadTasks: loadTasksActionCreator,
  removeTask: removeTaskActionCreator,
  addTask: addTaskActionCreator,
  updateTask: updateTaskActionCreator,
  editTask: editTaskActionCreator,
} = taskSlice.actions;

export default taskSlice.reducer;
