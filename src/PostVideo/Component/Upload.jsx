import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Asset/CSS/Uploader.css";
import { RxCross2 } from "react-icons/rx";
import { FaWindowMinimize } from "react-icons/fa";
import Loading from "../Asset/SVG/Loading";
import Check from "../Asset/SVG/Check";
import CloseIcon from "../Asset/SVG/CloseIcon";
import { uploadRes, updateRes } from "../../Store/StoreCart/StoreCart";
import { useDispatch, useSelector } from "react-redux";

const Upload = () => {
  const [modal, setModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [uploadResponses, setUploadResponses] = useState([]);
  const token = localStorage.getItem("Token");
  const SERVER = "https://api.dreampotential.org/";
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allCart.res);

  const overlayModal = (prop) => {
    const overlay = document.getElementById("upload_overlay");
    if (prop === "min") {
      overlay.classList.toggle("upload_min");
    } else {
      setModal(false);
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("source", window.location.host);

    try {
      const response = await axios.post(
        `${SERVER}storage/file-upload/`,
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch(updateRes({ id: currentFileIndex, status: true }));
      } else {
        dispatch(updateRes({ id: currentFileIndex, status: false }));
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleUpload = async () => {
    if (currentFileIndex === 0) {
      for (let i = 0; i < files.length; i++) {
        let res = {
          id: i,
          title: files[i].name,
          loading: true,
          status: null,
        };
        dispatch(uploadRes(res));
      }
    }
    try {
      const currentFile = files[currentFileIndex];
      if (currentFile) {
        await uploadFile(currentFile);
        setCurrentFileIndex((prevIndex) => prevIndex + 1);
      } else {
        console.log("All files uploaded successfully!");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  useEffect(() => {
    if (files.length > 0 && currentFileIndex < files.length) {
      handleUpload();
      setModal(true);
    }
  }, [files, currentFileIndex]);

  return (
    <>
      {modal && (
        <div className="uploader" id="upload_overlay">
          <div className="top_sec flex__row">
            <p>Uploading 2 files</p>
            <div className="flex__row flex__center">
              <FaWindowMinimize
                fontSize={24}
                color="#000"
                onClick={() => overlayModal("min")}
              />
              <RxCross2
                fontSize={28}
                color="#000"
                onClick={() => overlayModal("close")}
              />
            </div>
          </div>
          <div className="main_sec">
            <ul className="flex__col">
              {items.map((item, index) => (
                <li className="flex__row" key={item.id}>
                  <p>{item.title}</p>
                  {item.status === null && <Loading />}
                  {item.status === true && <Check />}
                  {item.status === false && <CloseIcon />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div>
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={handleFileChange}
          id="uploadVideo"
          style={{ display: "none" }}
        />
        <label htmlFor="uploadVideo" className="post-btn">
          Upload File
        </label>
      </div>
    </>
  );
};

export default Upload;

const FileUploadComponent = () => {
  const [files, setFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [uploadResponses, setUploadResponses] = useState([]);
  const token = localStorage.getItem("Token");
  const SERVER = "https://api.dreampotential.org/";
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("source", window.location.host);

    try {
      const response = await axios.post(
        `${SERVER}storage/file-upload/`,
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (response.status === 200) {
        dispatch(updateRes({ id: currentFileIndex, status: true }));
      } else {
        dispatch(updateRes({ id: currentFileIndex, status: false }));
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleUpload = async () => {
    if (currentFileIndex === 0) {
      for (let i = 0; i < files.length; i++) {
        let res = {
          id: i,
          title: files[i].name,
          loading: true,
          status: null,
        };
        dispatch(uploadRes(res));
      }
    }
    try {
      const currentFile = files[currentFileIndex];
      if (currentFile) {
        await uploadFile(currentFile);
        setCurrentFileIndex((prevIndex) => prevIndex + 1);
      } else {
        console.log("All files uploaded successfully!");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  useEffect(() => {
    if (files.length > 0 && currentFileIndex < files.length) {
      handleUpload();
    }
  }, [files, currentFileIndex]);

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        multiple
        onChange={handleFileChange}
      />
      <div>
        <h3>Upload Responses:</h3>
        <ul>
          {uploadResponses.map((response, index) => (
            <li key={index}>{JSON.stringify(response)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
