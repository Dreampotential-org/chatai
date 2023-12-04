import React, { useEffect, useState } from "react";
import { listVideo } from "../../ChatAi/services/helper";
import "../Asset/CSS/list.css";
import ElonDP from "../Asset/Image/ElonMush.jpg";
import { Link } from "react-router-dom";

const ViewVideo = () => {
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
    <div className="viewVideo">
      <div className="viewVideo-header">
        <div className="header_r1">
          <img src={ElonDP} alt="DP" />
        </div>
        <div className="header_r2">
          <h1 className="r1_title">Elon Mush</h1>
          <div className="r1_userDetail">
            <p>@elontheBillionair</p>
            <p>219B subscribe</p>
            <p>25 Videos</p>
          </div>
          <p>More about this channel </p>
          <div className="r2_link">
            <Link to="#">Customize channel</Link>
            <Link to="#">Manage videos</Link>
          </div>
        </div>
      </div>
      <div className="viewVideo_lists">
        <ul>
          <li>Home</li>
          <li>Videos</li>
          <li>Live</li>
          <li>Community</li>
          <li>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </li>
        </ul>
      </div>
      <div id="list" className="veiwVedio-list">
        {videos.map((item) => (
          <div className="list-box" key={item.id}>
            <video
              src={
                "https://api.dreampotential.org/storage/stream-video/" + item.id
              }
              id="recording-video"
              controls
            ></video>
            <div className="box_details">
              <p>{item.created_at}</p>
              <p>{item.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewVideo;
