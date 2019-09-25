/* if (true) {
  jest.doMock("./myModule");
} */

// const MyModule = require("./myModule");
import MyModule from "./myModule";

jest.mock("./myModule", () => {
  if (false) return jest.requireActual("./myModule");
  return jest.genMockFromModule("./myModule");
});

describe("MyModule", () => {
  const myModule = new MyModule();

  test("I am the original", () => {
    expect(myModule.powerOn()).toBe("I am the original implementation");
  });

  test("I am mocked", () => {
    myModule.powerOn.mockReturnValueOnce("I am a mock");
    expect(myModule.powerOn()).toBe("I am a mock");
  });
});
