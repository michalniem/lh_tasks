class ProxiedPromise extends Promise {
  constructor(resolver) {
    super(resolver);
  }
  beforeThen = (resolver) => {
    if (typeof resolver === "function") {
      super.then((res) => {
        resolver(res);
      });
    } else {
      throw new Error("Resolve function must be a function");
    }
    return this;
  };
}

export default ProxiedPromise;
