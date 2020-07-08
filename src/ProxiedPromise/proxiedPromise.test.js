import ProxiedPromise from "./proxiedPromise";

describe("beforeThen proxiedPromise", () => {
  const expectedResolveValue = "TEST";
  const resolveSpy = jest.fn((res) => res);

  const proxiedPromise = new ProxiedPromise((resolve) => {
    resolve(resolveSpy(expectedResolveValue));
  });

  test("should be instance of Promise", () => {
    expect(proxiedPromise instanceof Promise).toBeTruthy();
  });

  test("should have access to resolve value", () => {
    proxiedPromise
      .beforeThen((beforeThenResolvedValue) => {
        expect(beforeThenResolvedValue).toEqual(expectedResolveValue);
      })
      .then((thenResolveValue) => {
        expect(thenResolveValue).toEqual(expectedResolveValue);
      });
  });

  test("should call resolver with proper value", () => {
    expect(resolveSpy).toHaveBeenCalledWith(expectedResolveValue);
  });

  test("should throw error if resolver is not a function", () => {
    expect(() => proxiedPromise.beforeThen("not a function")).toThrow(
      "Resolve function must be a function"
    );
  });
});
