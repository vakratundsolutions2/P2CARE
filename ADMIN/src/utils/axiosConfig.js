const getTokenFromLocalStorage = localStorage.getItem("ADMIN")
  ? JSON.parse(localStorage.getItem("ADMIN"))
  : null;
  

  console.log(getTokenFromLocalStorage);
export const config = {
  headers: {
    Authorization: `${
      getTokenFromLocalStorage !== null
        ? getTokenFromLocalStorage?.ADMIN?.token
        : ""
    }`,
    Accept: "application/json",
  },
};
