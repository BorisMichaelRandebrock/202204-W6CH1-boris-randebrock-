import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import TasksList from "./TasksList";

describe("Given the TasksList component", () => {
  describe("When it's called with an object", () => {
    test("Then it should render one <ul> item", () => {
      const task = {
        name: "Shopping",
      };

      render(
        <Provider store={store}>
          <TasksList task={task} />
        </Provider>
      );

      const expectedNumOfUl = 1;

      const totalList = screen.getAllByRole("list");

      expect(totalList.length).toBe(expectedNumOfUl);
    });
  });
});
