import axios from "axios";
const KEY = "AIzaSyDeI1HD2FYhBT2jb5GIfQPeQtD5hvFJru8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY
    // key: `${KEY}`
  }
});
