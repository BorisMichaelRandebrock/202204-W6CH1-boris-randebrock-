import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Task from "./Task";

describe("Given the Task component", () => {
  describe("When it's called with an object", () => {
    test("Then it should render three <li> items", () => {
      const task = {
        name: "Shopping",
      };

      render(
        <Provider store={store}>
          <Task task={task} />
        </Provider>
      );

      const expectedNumOfLi = 3;

      const totalLi = screen.getAllByRole("listitem");

      expect(totalLi.length).toBe(expectedNumOfLi);
    });
  });
});
