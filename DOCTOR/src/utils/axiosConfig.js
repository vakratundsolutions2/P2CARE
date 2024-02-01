
// const getTokenFromLocalStorage = sessionStorage.getItem("USER")
//   ? JSON.parse(sessionStorage.getItem("USER"))

const getTokenFromLocalStorage = sessionStorage.getItem("DOCTOR")
  ? JSON.parse(sessionStorage.getItem("DOCTOR"))

  : null;




console.log(getTokenFromLocalStorage.token);
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
