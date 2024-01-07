import React, { useRef, useState } from "react";
import {
  AudioRecord,
  Recodings,
  Screenrecoding,
  UploadVideo,
} from "../../Component/index";
import "./home.css";
import Navbar from "../../Component/Navbar";
import Upload from "@/PostVideo/Component/Upload";

const Home = () => {
  const [screenRecord, setScreenRecord] = useState(false);
  const [audioRecord, setaudioRecord] = useState(false);
  const [recording, setRecording] = useState(false);
  const [recordd, setRecord] = useState(false);

  const screenRef = useRef(null);
  const audioRef = useRef(null);
  const vedioRef = useRef(null);

  // Call Screen Record Function for Recoding
  const handleScreen = () => {
    if (!screenRecord) {
      setRecord(true);
      screenRef.current.Start();
      setScreenRecord(true);
    } else {
      screenRef.current.Stop();
      setScreenRecord(false);
    }
  };

  // Call Record video Function for Recoding
  const handleRecoding = () => {
    if (!recording) {
      setRecord(true);
      vedioRef.current.Start();
      setRecording(true);
    } else {
      vedioRef.current.Stop();
      setRecording(false);
    }
  };

  // Call Audio Function for Recoding
  const handleAudio = () => {
    if (!audioRecord) {
      audioRef.current.Start();
      setaudioRecord(true);
    } else {
      audioRef.current.Stop();
      setaudioRecord(false);
    }
  };

  return (
    <>
      <div className="main">
        <Navbar />
        <div
          className="post-content"
          style={{
            padding: `${recordd === true ? "0" : "5rem 0"}`,
          }}
        >
          <div className="btn-container">
            {screenRecord ? (
              <button onClick={handleScreen} className="post-btn">
                Stop Screen Recording
              </button>
            ) : (
              <button onClick={handleScreen} className="post-btn">
                Start Screen Recording
              </button>
            )}
            {recording ? (
              <button onClick={handleRecoding} className="post-btn">
                Stop video Recording
              </button>
            ) : (
              <button onClick={handleRecoding} className="post-btn">
                Start video Recording
              </button>
            )}
            {audioRecord ? (
              <button onClick={handleAudio} className="post-btn">
                Stop Audio Recording
              </button>
            ) : (
              <button onClick={handleAudio} className="post-btn">
                Start Audio Recording
              </button>
            )}
          </div>

          <div className="video-container">
            <div className="row-1">
              <Screenrecoding ref={screenRef} />
              <Recodings ref={vedioRef} />
            </div>
            <div className="row-2">
              <AudioRecord ref={audioRef} />
            </div>
          </div>
          <div>
            <div className="upload-section">
              <Upload />
            </div>
          </div>
        </div>
      </div>
      {/* <Upload /> */}
    </>
  );
};

export default Home;
