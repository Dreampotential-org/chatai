import React, { useEffect, useState } from "react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { FaWindowMinimize } from "react-icons/fa";
import { Check, CloseIcon, Loading } from "../Asset/SVG/index";
import { uploadRes, updateRes } from "../../Store/StoreCart/StoreCart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Asset/CSS/Uploader.css";

const Upload = () => {
  const [modal, setModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const token = localStorage.getItem("Token");
  const SERVER = "https://api.dreampotential.org/";
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allCart.res);
  const navigate = useNavigate();

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

  function updateProgress(e) {
    let swaltitle = document.getElementById("progress");
    swaltitle.textContent = parseInt((e.loaded / e.total) * 100) + "%";
  }

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
          onUploadProgress: (progressEvent) => {
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
      );
      if (response.status === 200) {
        dispatch(
          updateRes({
            id: files[currentFileIndex].name,
            status: true,
            vidId: response.data.id,
          })
        );
      } else {
        dispatch(
          updateRes({
            id: files[currentFileIndex].name,
            status: false,
            vidId: null,
          })
        );
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      dispatch(
        updateRes({
          id: files[currentFileIndex].name,
          status: false,
          vidId: null,
        })
      );
    }
  };

  const handleUpload = async () => {
    if (currentFileIndex === 0) {
      for (let i = 0; i < files.length; i++) {
        let res = {
          id: i + "asndkga" + Math.floor(Math.random() * 5499),
          title: files[i].name,
          loading: true,
          status: null,
          videoId: null,
        };
        dispatch(uploadRes(res));
      }
    }
    try {
      const currentFile = files[currentFileIndex];
      if (currentFile) {
        await uploadFile(currentFile);
        // uploadFile(currentFile);
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
    } else if (files.length > 0 && currentFileIndex === files.length) {
      // Reset currentFileIndex and files state after all files have been uploaded
      setCurrentFileIndex(0);
      setFiles([]);
    }
  }, [files, currentFileIndex]);

  const redirectToVideo = (prop) => {
    navigate(`/postVideo/videoSection/${prop.videoId}`);
  };

  useEffect(() => {
    if (items.length > 0) {
      setModal(true);
    }
  }, []);

  return (
    <>
      {modal && (
        <div className="uploader" id="upload_overlay">
          <div className="top_sec flex__row">
            <p>
              {currentFileIndex < files.length
                ? `Uploading ${files.length} files`
                : `Uploaded all files`}
            </p>
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
                <li
                  className="flex__row"
                  key={item.id}
                  onClick={() => redirectToVideo(item)}
                >
                  <p>{item.title}</p>
                  {item.status === null && (
                    <div className="flex__row">
                      <p id="progress">%0</p>
                      <Loading />
                    </div>
                  )}
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
          Upload Video
        </label>
      </div>
    </>
  );
};

export default Upload;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { RxCross2 } from "react-icons/rx";
// import { FaWindowMinimize } from "react-icons/fa";
// import { Check, CloseIcon, Loading } from "../Asset/SVG/index";
// import { uploadRes, updateRes } from "../../Store/StoreCart/StoreCart";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import "../Asset/CSS/Uploader.css";

// const Upload = () => {
//   const [modal, setModal] = useState(false);
//   const [files, setFiles] = useState([]);
//   const [progress, setProgress] = useState(Array(files.length).fill(0));
//   const token = localStorage.getItem("Token");
//   const SERVER = "https://api.dreampotential.org/";
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.allCart.res);
//   const navigate = useNavigate();

//   const overlayModal = (prop) => {
//     const overlay = document.getElementById("upload_overlay");
//     if (prop === "min") {
//       overlay.classList.toggle("upload_min");
//     } else {
//       setModal(false);
//     }
//   };

//   const handleFileChange = (event) => {
//     const selectedFiles = Array.from(event.target.files);
//     setFiles(selectedFiles);
//     setProgress(Array(selectedFiles.length).fill(0));
//   };

//   const updateProgress = (index, value) => {
//     setProgress((prevProgress) => {
//       const newProgress = [...prevProgress];
//       newProgress[index] = value;
//       return newProgress;
//     });
//   };

//   const uploadFiles = async () => {
//     const uploadPromises = files.map((file, index) => {
//       return new Promise(async (resolve) => {
//         const formData = new FormData();
//         formData.append("file", file, file.name);
//         formData.append("source", window.location.host);

//         try {
//           const response = await axios.post(
//             `${SERVER}storage/file-upload/`,
//             formData,
//             {
//               headers: {
//                 Authorization: `Token ${token}`,
//               },
//               onUploadProgress: (progressEvent) => {
//                 const percentCompleted = Math.round(
//                   (progressEvent.loaded / progressEvent.total) * 100
//                 );
//                 updateProgress(index, percentCompleted);
//               },
//             }
//           );

//           if (response.status === 200) {
//             dispatch(
//               updateRes({
//                 id: file.name,
//                 status: true,
//                 vidId: response.data.id,
//               })
//             );
//           } else {
//             dispatch(
//               updateRes({
//                 id: file.name,
//                 status: false,
//                 vidId: null,
//               })
//             );
//           }
//         } catch (error) {
//           console.error("Error uploading file:", error);
//         }

//         resolve();
//       });
//     });

//     await Promise.all(uploadPromises);
//   };

//   const handleUpload = async () => {
//     try {
//       await uploadFiles();
//       setModal(false);
//     } catch (error) {
//       console.error("Error during file upload:", error);
//     }
//   };

//   useEffect(() => {
//     if (files.length > 0) {
//       handleUpload();
//       setModal(true);
//     }
//   }, [files]);

//   const redirectToVideo = (prop) => {
//     navigate(`/postVideo/videoSection/${prop.videoId}`);
//   };

//   useEffect(() => {
//     if (items.length > 0) {
//       setModal(true);
//     }
//   }, []);

//   return (
//     <>
//       {modal && (
//         <div className="uploader" id="upload_overlay">
//           <div className="top_sec flex__row">
//             <p>{`Uploading ${files.length} files`}</p>
//             <div className="flex__row flex__center">
//               <FaWindowMinimize
//                 fontSize={24}
//                 color="#000"
//                 onClick={() => overlayModal("min")}
//               />
//               <RxCross2
//                 fontSize={28}
//                 color="#000"
//                 onClick={() => overlayModal("close")}
//               />
//             </div>
//           </div>
//           <div className="main_sec">
//             <ul className="flex__col">
//               {files.map((file, index) => (
//                 <li key={file.name}>
//                   <p>{file.name}</p>
//                   <div className="flex__row">
//                     <p id="progress">{`${progress[index]}%`}</p>
//                     <Loading />
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//       <div>
//         <input
//           type="file"
//           accept="video/*"
//           multiple
//           onChange={handleFileChange}
//           id="uploadVideo"
//           style={{ display: "none" }}
//         />
//         <label htmlFor="uploadVideo" className="post-btn">
//           Upload Video
//         </label>
//       </div>
//     </>
//   );
// };

// export default Upload;
