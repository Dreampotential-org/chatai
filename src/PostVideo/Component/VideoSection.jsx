import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { MdDelete } from "react-icons/md";
import "../Asset/CSS/VideoSection.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    uploadcomment(comment);
    setComment("");
  };

  const handleDeleteComment = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };

  const uploadcomment = (inputComment) => {
    const payload = {
      upload_id: id,
      message: inputComment,
    };
    const token = localStorage.getItem("Token");
    swal({
      title: "0%",
      text: "Video uploading please wait.",
      icon: "info",
      buttons: false,
      closeOnEsc: false,
      closeOnClickOutside: false,
    });
    try {
      const response = axios
        .post(`${SERVER}storage/add_comment/`, payload, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          console.log(response, response.status);

          if (response.status === 200) {
            swal({
              title: "Good job!",
              text: "Video submitted successfully!",
              icon: "success",
              button: "Ok",
            });
            console.log(response);
            getComments();
            return response;
          } else {
            swal({
              title: "Error Try Again",
              text: "Sorry, there is an error please try again later.",
              icon: "error",
              buttons: [true, "Retry"],
            }).then((retry) => {
              if (retry) {
                const blob = new Blob(chunks, { type: mimeType });
                uploadRecordedVideo(blob);
              }
            });
            throw new Error("Failed to upload video");
          }
        });
    } catch (error) {
      swal({
        title: "Error Try Again",
        text: "Sorry, there is an error please try again later.",
        icon: "error",
        buttons: [false, "Retry"],
      });
      console.error("Error uploading video:", error);
    }
  };

  const getComments = (inputComment) => {
    const token = localStorage.getItem("Token");
    try {
      const response = axios
        .get(`${SERVER}storage/list_comments/${id} `, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const newComments = response.data.map((data) => data.message);
            setComments(newComments);
            return response;
          } else {
            throw new Error("Failed to upload video");
          }
        });
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  useEffect(() => {
    getComments();
    return () => {};
  }, []);

  return (
    <div className="main-vedio">
      <Navbar />
      <div className="vedio_content">
        <div className="vedio_section">
          <video
            src={`${SERVER}storage/stream-video/${id}`}
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
