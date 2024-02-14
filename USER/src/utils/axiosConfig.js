const getTokenFromLocalStorage = localStorage.getItem("USER")
  ? JSON.parse(localStorage.getItem("USER"))
  : null;

// console.log(getTokenFromLocalStorage);
export const config = {
  headers: {
    Authorization: `${
      getTokenFromLocalStorage !== null
        ? getTokenFromLocalStorage?.token
        : ""
    }`,
    Accept: "application/json",
  },
};
