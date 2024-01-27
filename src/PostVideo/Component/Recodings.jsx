import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { storeRecoded } from "../../Store/StoreCart/StoreCart";
import { useDispatch } from "react-redux";

const Recordings = forwardRef((props, ref) => {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recordingStopped, setRecordingStopped] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const SERVER = "https://api.dreampotential.org/";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStopRecording = async () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      setRecording(false);
      setRecordingStopped(true);
    }
  };

  // Update Preview with recoded video
  const updatePreview = async (videoBlob) => {
    const recordedVideoElement = videoRef.current;
    recordedVideoElement.src = URL.createObjectURL(videoBlob);
  };

  const handleStartRecording = async () => {
    setRecording(true);
    setRecordingStopped(false);
    setRecordedChunks([]);
    const mimeType = "video/mp4";

    const constraints = {
      audio: {
        echoCancellation: true,
      },
      video: {
        width: {
          // min: 640,
          max: 1024,
        },
        height: {
          // min: 400,
          max: 700,
        },
      },
    };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      document.getElementById("recording-video").style.display = "flex";

      let chunks = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        setRecordedChunks(chunks); //store chunks for downlaod on stop recoding
        const blob = new Blob(chunks, { type: mimeType });

        updatePreview(blob); // Display recorded video in the preview screen
        uploadRecordedVideo(blob);
        videoRef.current.srcObject = null; // Reset webcam preview after recording stops
      };

      mediaRecorder.start(200);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  useEffect(() => {
    videoRef.current = document.getElementById("recording-video");
  }, []);

  // Download Recorded Video
  const handleDownload = () => {
    // Create a Promise to wait for the recorded Blob to be ready
    const blobPromise = new Promise((resolve) => {
      const mimeType = "video/mp4";
      const blob = new Blob(recordedChunks, { type: mimeType });
      resolve(blob);
    });

    // Handle the download when the Blob is ready
    blobPromise.then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "recording.mp4";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  };

  useImperativeHandle(ref, () => ({
    Start() {
      handleStartRecording();
    },
    Stop() {
      handleStopRecording();
    },
  }));

  const uploadRecordedVideo = async (chunks) => {
    const token = localStorage.getItem("Token");
    swal({
      title: "0%",
      text: "Video uploading please wait.",
      icon: "info",
      buttons: false,
      closeOnEsc: false,
      closeOnClickOutside: false,
    });

    if (window.confirm("You want to upload this video?")) {
      const file = chunks;
      console.log(file, chunks);

      try {
        const formData = new FormData();
        formData.append("file", file, file.name);
        formData.append("source", window.location.host);
        dispatch(storeRecoded(formData)); // storing the recoded chunks for uploading if to many are recorded at a time
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
                  console.log(progressEvent.loaded + " " + progressEvent.total);
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
              navigate(`/postVideo/videoSection/${response.data.id}`);
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
          })
          .then((data) => {
            console.log("Video uploaded successfully");
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
    }
  };
  return (
    <div
      className="video-section"
      style={{ minWidth: `${recording === false ? "auto" : "50%"}` }}
    >
      <video
        style={{ display: "none" }}
        id="recording-video"
        autoPlay
        width="640"
        height="400"
        controls
      ></video>
      {recordingStopped && (
        <button className="download-btn" onClick={handleDownload}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 17V3" />
            <path d="m6 11 6 6 6-6" />
            <path d="M19 21H5" />
          </svg>
        </button>
      )}
    </div>
  );
});

export default Recordings;
