import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AudioRecord = forwardRef((props, ref) => {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recordingStopped, setRecordingStopped] = useState(false);
  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const SERVER = "https://api.dreampotential.org/";
  const navigate = useNavigate();

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

  // Update Preview with recorded audio
  const updatePreview = async (audioBlob) => {
    const recordedAudioElement = audioRef.current;
    recordedAudioElement.src = URL.createObjectURL(audioBlob);
  };

  const handleStartRecording = async () => {
    setRecording(true);
    setRecordingStopped(false);
    setRecordedChunks([]);
    const mimeType = "audio/wav"; // Use the appropriate audio MIME type

    const constraints = {
      audio: {
        echoCancellation: true,
      },
    };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      audioRef.current.srcObject = stream;
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      document.getElementById("show-audio").style.visibility = "visible";

      let chunks = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        setRecordedChunks(chunks); // Store chunks for download on stop recording
        const blob = new Blob(chunks, { type: mimeType });

        updatePreview(blob); // Display recorded audio in the preview
        uploadRecordedVideo(blob); //Upload recoded audio

        audioRef.current.srcObject = null; // Reset audio preview after recording stops
      };

      mediaRecorder.start();
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  useEffect(() => {
    audioRef.current = document.getElementById("show-audio");
  }, []);

  // Download Recorded Audio
  const handleDownload = () => {
    // Create a Promise to wait for the recorded Blob to be ready
    const blobPromise = new Promise((resolve) => {
      const mimeType = "audio/webm"; // Use the appropriate audio MIME type
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
      a.download = "recording.mp3";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  };

  useImperativeHandle(ref, () => ({
    Start() {
      handleStartRecording();
      console.log("Start audio");
    },
    Stop() {
      handleStopRecording();
      console.log("Stop audio");
    },
  }));

  function updateProgress(e) {
    let swaltitle = document.querySelector(".swal-title");
    swaltitle.textContent = parseInt((e.loaded / e.total) * 100) + "%";
  }

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

    if (window.confirm("You want to upload this Audio?")) {
      const file = chunks;
      console.log(file, chunks);

      try {
        const formData = new FormData();
        formData.append("file", file, file.name);
        formData.append("source", window.location.host);
        const response = axios
          .post(
            `${SERVER}storage/file-upload/`,
            formData,
            {
              headers: {
                Authorization: `Token ${token}`,
              },
              onUploadProgress: (progressEvent) => {
                // console.log(progressEvent.loaded + " " + progressEvent.total);
                updateProgress(progressEvent);
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
          .then((response) => {
            console.log(response, response.status);

            if (response.status === 200) {
              swal({
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
    <div className="video-section audio" style={{ visibility: "hidden" }}>
      <audio id="show-audio" autoPlay controls></audio>
      {recordingStopped && (
        <button
          onClick={handleDownload}
          style={{ background: "transparent", border: "none" }}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d62828ff"
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

export default AudioRecord;
