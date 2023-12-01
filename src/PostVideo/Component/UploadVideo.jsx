import React, { useEffect, useState } from "react";
import axiosInstance from "../../ChatAi/services/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Asset/CSS/UploadVideo.css";
import { progress } from "framer-motion";

const UploadVideo = () => {
  const [recordedStreamFile, setRecordedStreamFile] = useState(null);

  const SERVER = "https://api.dreampotential.org/";
  const navigate = useNavigate();

  function updateProgress(e) {
    if (e.lengthComputable) {
      // console.log(e.loaded);
      // console.log(e.loaded + " / " + e.total);
      $(".swal-title").text(parseInt((e.loaded / e.total) * 100) + "%");
    }
  }

  const handleUpload = async (event) => {
    const videoElement = document.getElementById("show-video");
    const fileInput = event.target;
    const token = localStorage.getItem("Token");
    // const token = JSON.parse(localStorage.getItem("Token"));
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
      const Globarfile = file;

      if (file.type.startsWith("video/")) {
        const videoURL = URL.createObjectURL(file);
        videoElement.src = videoURL;
        videoElement.controls = true;
        setRecordedStreamFile(file);

        try {
          const formData = new FormData();
          formData.append("file", Globarfile, Globarfile.name);
          formData.append("source", window.location.host);

          const response = axios
            .post(
              `${SERVER}storage/file-upload/`,
              formData,
              {
                headers: {
                  Authorization: `Token ${token}`,
                },
              },
              {
                progress: (progressEvent) => {
                  if (progressEvent.lengthComputable) {
                    console.log(
                      progressEvent.loaded + " " + progressEvent.total
                    );
                    this.updateProgress(progressEvent);
                  }
                },
              }
            )
            .then(async (response) => {
              console.log(response, response.status);

              if (response.status === 200) {
                const value = await swal({
                  title: "Good job!",
                  text: "Video submitted successfully!",
                  icon: "success",
                  button: "Ok",
                });
                localStorage.setItem(
                  "VideoID",
                  JSON.stringify(response.data.id)
                );
                navigate(`/postVideo/videoSection/${response.data.id}`);
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
        // alert("Please select a valid video file.");
        swal({
          title: "Error Try Again",
          text: "Please select a valid video file.",
          icon: "error",
          buttons: [true, "Retry"],
        });
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
        onChange={handleUpload}
      />
      <label htmlFor="uploadVideo" className="post-btn">
        Upload File
      </label>
    </div>
  );
};

export default UploadVideo;
