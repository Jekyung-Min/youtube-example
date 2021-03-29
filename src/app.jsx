// import React from 'react';
import { useState, useEffect } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCJaFHs1x7yhzYPzscUXCv4D5Hq2okk794"
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items));
  }, []);

  // console.log(videos);
  return <VideoList videos={videos}></VideoList>;
}

export default App;
