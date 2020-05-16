export function setupIntersectionObserverMock({
  observe = () => null,
  unobserve = () => null,
  callback = () => null,
  options =  {}
} = {}) {
  class IntersectionObserver {
    observe = observe;
    unobserve = unobserve;
    callback = callback;
    options = options
  }
  Object.defineProperty(
    global,
    'IntersectionObserver',
    { writable: true, configurable: true, value: IntersectionObserver }
  );
}