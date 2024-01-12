const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
  

  console.log(getTokenFromLocalStorage.accessToken);
export const config = {
  headers: {
    Authorization: `${
      getTokenFromLocalStorage !== null
        ? getTokenFromLocalStorage.accessToken.token
        : ""
    }`,
    Accept: "application/json",
  },
};
