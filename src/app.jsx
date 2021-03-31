import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((items) => setVideos(items));
    //setVideos(await youtube.search(query));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideos(items));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader search={search}></SearchHeader>
      <VideoList videos={videos}></VideoList>;
    </div>
  );
}

export default App;
