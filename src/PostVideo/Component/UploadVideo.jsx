import React, { useEffect, useState } from "react";
import axiosInstance from "../../ChatAi/services/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Asset/CSS/UploadVideo.css";

const UploadVideo = () => {
  const [recordedStreamFile, setRecordedStreamFile] = useState(null);

  const SERVER = "https://api.dreampotential.org/";
  const navigate = useNavigate();

  const handleUploadedVideo = async (event) => {
    const videoElement = document.getElementById("show-video");
    const fileInput = event.target;
    const token = JSON.parse(localStorage.getItem("Token"));
    swal({
      title: "0%",
      text: "Video uploading please wait.",
      icon: "info",
      buttons: false,
      closeOnEsc: false,
      closeOnClickOutside: false,
    });

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];

      if (file.type.startsWith("video/")) {
        const videoURL = URL.createObjectURL(file);
        videoElement.src = videoURL;
        videoElement.controls = true;
        setRecordedStreamFile(file);

        try {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("source", window.location.host);
          const response = await axios
            .post(`${SERVER}storage/file-upload/`, formData, {
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
                return response;
              } else {
                swal({
                  title: "Error Try Again",
                  text: "Sorry, there is an error please try again later.",
                  icon: "error",
                  buttons: [true, "Retry"],
                });
                throw new Error("Failed to upload video");
              }
            })
            .then((data) => {
              console.log("Video uploaded successfully");
              console.log(data);
            });
        } catch (error) {
          swal({
            title: "Error Try Again",
            text: "Sorry, there is an error please try again later.",
            icon: "error",
            buttons: [true, "Retry"],
          });
          console.error("Error uploading video:", error);
        }
      } else {
        alert("Please select a valid video file.");
      }
    }
  };

  return (
    <div>
      <video
        id="show-video"
        width="500"
        height="350"
        controls
        style={{ display: `${recordedStreamFile === null ? "none" : "flex"}` }}
      />
      <input
        type="file"
        id="uploadVideo"
        accept="video/*"
        style={{ display: "none" }}
        onChange={handleUploadedVideo}
      />
      <label htmlFor="uploadVideo" className="post-btn">
        Upload File
      </label>
    </div>
  );
};

export default UploadVideo;
