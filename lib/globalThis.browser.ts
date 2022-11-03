export const globalThisShim = (() => {
  if (self instanceof Window) {
    return self;
  } else if (window instanceof Window) {
    return window;
  } else {
    return Function("return this")();
  }
})();
