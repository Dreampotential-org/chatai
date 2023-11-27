import React, { useRef, useState } from "react";
import {
  AudioRecord,
  Recodings,
  Screenrecoding,
  UploadVideo,
} from "../../Component/index";
import Logo from "../../Asset/SVG/dreampotential_Logo-01.svg";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [screenRecord, setScreenRecord] = useState(false);
  const [audioRecord, setaudioRecord] = useState(false);
  const [recording, setRecording] = useState(false);
  const [recordd, setRecord] = useState(false);

  const screenRef = useRef(null);
  const audioRef = useRef(null);
  const vedioRef = useRef(null);

  const navigate = useNavigate();

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
  const userLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="main">
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="Logo" width={180} height={40} />
          </div>
          <div className="nav-links">
            <Link to="/chatai">Chat Ai</Link>
            <Link to="./viewVideo">Dashboard</Link>
            <button type="button" className="post-btn" onClick={userLogOut}>
              Log Out
            </button>
          </div>
        </div>
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
              <UploadVideo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
