export default () => {
  jest.mock("react-router-native", () => {
    const originalModule = jest.requireActual("react-router-native");

    return {
      ...originalModule,
      useHistory: jest.fn(),
    };
  });
};
