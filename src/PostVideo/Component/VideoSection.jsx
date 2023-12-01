import React, { useState } from "react";
import Navbar from "./Navbar";
import { MdDelete } from "react-icons/md";
import "../Asset/CSS/VideoSection.css";
import { useParams } from "react-router-dom";

const VideoSection = () => {
  let { id } = useParams();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const SERVER = "https://api.dreampotential.org/";

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  };

  const handleDeleteComment = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };

  return (
    <div className="main-vedio">
      <Navbar />
      <div className="vedio_content">
        <div className="vedio_section">
          <video
            src={`${SERVER}storage/stream-video/` + id}
            id="show-video"
            width="500"
            height="350"
            controls
          />
        </div>
        <div className="comment__container">
          <form onSubmit={handleAddComment}>
            <input
              type="text"
              value={comment}
              required
              onChange={handleCommentChange}
            />
            <button>Add Comment</button>
          </form>
          <div className="comment-store">
            {comments.map((comment, index) => (
              <div className="task" key={index}>
                <span className="taskname">{comment}</span>
                <button
                  className="delete"
                  onClick={() => handleDeleteComment(index)}
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
