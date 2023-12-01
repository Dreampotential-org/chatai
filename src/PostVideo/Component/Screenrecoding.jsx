import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import axios from "axios";

const Screenrecording = forwardRef((props, ref) => {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recordingStopped, setRecordingStopped] = useState(false);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const SERVER = "https://api.dreampotential.org/";

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

  const updatePreview = async (videoBlob) => {
    const recordedVideoElement = videoRef.current;
    recordedVideoElement.src = URL.createObjectURL(videoBlob);
  };

  const handleScreenRecording = async () => {
    const mimeType = "video/webm";
    let chunks = [];

    if (!(navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia)) {
      return window.alert("Screen Record not supported!");
    }

    let stream = null;
    const displayStream = await navigator.mediaDevices.getDisplayMedia({
      video: { cursor: "motion" },
      audio: { echoCancellation: true },
    });

    if (window.confirm("Record screen?")) {
      const audioContext = new AudioContext();
      document.getElementById("screen-video").style.display = "flex";

      const voiceStream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true },
        video: false,
      });
      const userAudio = audioContext.createMediaStreamSource(voiceStream);

      const audioDestination = audioContext.createMediaStreamDestination();
      userAudio.connect(audioDestination);

      if (displayStream.getAudioTracks().length > 0) {
        const displayAudio =
          audioContext.createMediaStreamSource(displayStream);
        displayAudio.connect(audioDestination);
      }

      const tracks = [
        ...displayStream.getVideoTracks(),
        ...audioDestination.stream.getTracks(),
      ];
      stream = new MediaStream(tracks);
      videoRef.current.srcObject = stream;
    } else {
      stream = displayStream;
    }

    mediaRecorderRef.current = new MediaRecorder(stream, { mimeType });

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: mimeType });
      setRecordedChunks(chunks);
      uploadRecordedVideo(blob);
      updatePreview(blob);
      videoRef.current.srcObject = null;
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  useEffect(() => {
    videoRef.current = document.getElementById("screen-video");
  }, []);

  const handleDownload = () => {
    const blob = new Blob(recordedChunks, { type: "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "recording.webm";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  useImperativeHandle(ref, () => ({
    Start() {
      handleScreenRecording();
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
      style={{
        minWidth: `${recording === false ? "auto" : "50%"}`,
      }}
    >
      <video
        style={{ display: "none" }}
        id="screen-video"
        autoPlay
        width="640"
        height="400"
        muted
        // {...(recordingStopped === false ? "" : "controls")}
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

export default Screenrecording;
