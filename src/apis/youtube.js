import axios from "axios";

const KEY = "AIzaSyBjMh-81SIwpKCUykWothC5PQW7UCLmFUs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
});
