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

export const getRefLinkConntectionStatus = (pathname, search) =>
  pathname.startsWith("/*") && search.startsWith("?ref=");

export const getRefLinkCode = (path) => path.replace("?ref=", "");
