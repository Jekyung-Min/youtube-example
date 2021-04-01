import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((items) => {
        setVideos(items);
        setSelectedVideo(null);
      });
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
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          ></VideoList>
        </div>
      </section>
    </div>
  );
}

export default App;
