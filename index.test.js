import MyModule from "./myModule";

if (true) {
  jest.mock("./myModule");
}

describe("MyModule", () => {
  let myModule;

  beforeEach(() => {
    myModule = new MyModule();
  });

  test("I am NOT mocked", () => {
    expect(myModule.powerOn()).toBe("I am the original implementation");
  });

  test("I am mocked", () => {
    if (myModule.powerOn.mockReturnValueOnce)
      myModule.powerOn.mockReturnValueOnce("I am a mock");
    expect(myModule.powerOn()).toBe("I am a mock");
  });
});
