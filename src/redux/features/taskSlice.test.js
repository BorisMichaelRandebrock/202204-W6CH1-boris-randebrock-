import taskSlice, {
  addTaskActionCreator,
  loadTasksActionCreator,
  removeTaskActionCreator,
} from "./taskSlice";

describe("Given the taskSlice reducer", () => {
  describe("When it receives an empty array and we give him an array while calling loadTasks action", () => {
    test("Then it should return a single array with the given task object on it", () => {
      const initialState = [];
      const newTasks = [
        {
          name: "Landing at ISDI Coders",
        },
      ];

      const loadAction = loadTasksActionCreator(newTasks);

      const newToDos = taskSlice(initialState, loadAction);

      expect(newToDos).toEqual(newTasks);
    });
  });

  describe("When it receives an array and we give him an id while calling removeTask action", () => {
    test("Then it should return a single array without the given id task object", () => {
      const initialState = [
        {
          id: 1,
          name: "Landing at ISDI Coders",
        },
        { id: 2, name: "Code Review" },
      ];

      const expectetLength = 1;

      const removeAction = removeTaskActionCreator(initialState[0].id);

      const taskUpdated = taskSlice(initialState, removeAction);

      expect(taskUpdated.length).toEqual(expectetLength);
    });
  });

  describe("When it receives an array and we give him another one and calling addTask action", () => {
    test("Then it should return a single array with 2 tasks", () => {
      const initialState = [
        {
          id: 1,
          name: "Landing at ISDI Coders",
        },
      ];
      const addingTask = {
        id: 2,
        name: "Code Review",
      };

      const addAction = addTaskActionCreator(addingTask);

      const taskUpdated = taskSlice(initialState, addAction);

      expect(taskUpdated[1]).toEqual(addingTask);
    });
  });

  describe("When it receives an unknown action and an initial list of tasks", () => {
    test("Then it should return a intial list of tasks", () => {
      const action = {
        type: "unknown",
      };

      const tasks = [
        {
          name: "Landing at ISDI Coders",
        },
        {
          name: "Code Review",
        },
      ];

      const toDos = taskSlice(tasks, action);

      expect(toDos).toEqual(tasks);
    });
  });
});
