import { createMemoryHistory } from "history";
import { NativeRouter, MemoryRouter, Router } from "react-router-native";

const history = createMemoryHistory();
history.push = jest.fn();

export const wrapper = ({ children }) => {
  <NativeRouter>
    <MemoryRouter>
      <Router history={history}>{children}</Router>
    </MemoryRouter>
  </NativeRouter>;
};
