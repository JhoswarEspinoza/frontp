const API_URL = "https://ispeak-edtech.com/api";

const USER_DATA =
  JSON.parse(window.localStorage.getItem("loggedAppUser")) || null;

const USER_ID = USER_DATA ? USER_DATA.id : null;

export { API_URL, USER_ID };
