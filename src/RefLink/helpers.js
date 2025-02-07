export const LocalStorage = {
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  },
};

export const getRefLinkMatch = (path) => /^\?ref=/.test(path)

export const getRefLinkCode = (path) => path.replace("?ref=", "");
