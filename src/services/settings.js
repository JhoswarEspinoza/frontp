const API_URL = "http://45.236.129.192:3000/api";
// const API_URL = "http://66.94.118.205:5000/api"

const USER_DATA =
  JSON.parse(window.localStorage.getItem("loggedAppUser")) || null;

const USER_ID = USER_DATA ? USER_DATA.id : null;

export { API_URL, USER_ID };
