import React, { useEffect, useState } from "react";
import { listVideo } from "../../ChatAi/services/helper";
import "../Asset/CSS/list.css";

const ListVideo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listVideo();
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="listVideo">
      <div id="list">
        {videos.map((item) => (
          <div className="list-box" key={item.id}>
            <a
              href={
                "https://api.dreampotential.org/storage/stream-video/" + item.id
              }
            >
              Video
            </a>
            <p>{item.created_at}</p>
            <p>{item.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListVideo;
