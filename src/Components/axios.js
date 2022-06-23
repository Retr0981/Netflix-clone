import axios from "axios";

//Every request we want to add this baseURL
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
