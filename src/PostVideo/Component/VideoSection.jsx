import React, { memo, useEffect, useState } from "react";
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
  const [vedioId, setVedioId] = useState(id);
  const [vedioLink, setLedioLink] = useState(
    "http://media.w3.org/2010/05/sintel/trailer.mp4"
  );

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

  const getComments = () => {
    const token = localStorage.getItem("Token");
    try {
      const response = axios
        // .get(`${SERVER}storage/list_comments/${id} `, {
        .get(`${SERVER}storage/list_comments/${vedioId} `, {
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

  var play_time_seconds = 0;

  const incrementTime = () => {
    play_time_seconds += 1;
  };

  useEffect(() => {
    const video = document.getElementById("show-video");

    video.addEventListener("play", () => {
      const interval = setInterval(incrementTime, 1000);

      video.addEventListener("ended", () => {
        console.log("Ended");
        console.log(play_time_seconds);
        clearInterval(interval);
      });
      video.addEventListener("pause", () => {
        console.log("pause");
        console.log(play_time_seconds);
        clearInterval(interval);
      });
    });

    return () => {
      // Cleanup: Remove event listeners when the component unmounts
      video.removeEventListener("play", incrementTime);
      video.removeEventListener("pause", () => {
        console.log(play_time_seconds);
        clearInterval(interval);
      });
      video.removeEventListener("ended", () => {
        console.log(play_time_seconds);
        clearInterval(interval);
      });
      console.log(play_time_seconds);
    };
  }, []);

  return (
    <div className="main-video">
      <Navbar />
      <div className="main__cont">
        <VideosList setVedioId={setVedioId} setLedioLink={setLedioLink} />
        <div className="video_content">
          <div className="video_section">
            <video
              // src={`${SERVER}storage/stream-video/${id}`}
              // src={`${SERVER}storage/stream-video/${vedioId}`}
              src={vedioLink}
              id="show-video"
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
    </div>
  );
};

export default VideoSection;

const VideosList = memo(({ setVedioId, setLedioLink }) => {
  const list = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2024-01-31",
      thumbnail:
        "https://imgs.search.brave.com/kW5kn_rTl0NxCXtH5dqUojP1iIANl22QJoIxmjrm_lg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/NTQ1NTI1MC9maWxl/L29yaWdpbmFsLTZh/NjA0OGIzODQ2MjAz/MzNmNTcwYjgzNzgw/ZmFiZTAxLmpwZz9y/ZXNpemU9NDAweDMw/MCZ2ZXJ0aWNhbD1j/ZW50ZXI",
    },
    {
      id: 2,
      title: "Sample Title",
      description: "This is a sample description for the second item.",
      date: "2024-02-01",
      thumbnail:
        "https://imgs.search.brave.com/n8gMjE7XwC7AjyhremEoqq3uww5ytlFcaCH_X8lcfwM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9wdWJnLWdh/bWUtdG91cm5hbWVu/dC1wb3N0ZXItZGVz/aWduLXRlbXBsYXRl/LTY2ZWI2NGY2YjRh/MzU4M2FlYmM4MTBj/Mzg1MjUzZTY1Lmpw/Zz90cz0xNjAzMTc5/NzI2",
      link: "https://www.youtube.com/watch?v=r93s6afXg2c",
    },
    {
      id: 3,
      title: "Random Data",
      description: "Just some random data to fill up the description field.",
      date: "2024-02-02",
      thumbnail:
        "https://imgs.search.brave.com/VEjyzffCA84YXZ3VvqD132lstbC433pWOvPXBIy8MI4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9vbmxp/bmUudmlzdWFsLXBh/cmFkaWdtLmNvbS9y/ZXBvc2l0b3J5L2lt/YWdlcy80YWE3NzIx/Ny0wMTBiLTQxNDYt/OGE2Yi02ZGUzN2Qy/YWY2NTMveW91dHVi/ZS10aHVtYm5haWxz/LWRlc2lnbi9teS1h/bGwtdGltZS1mYXZv/cml0ZS1iZWF1dHkt/cHJvZHVjdC15b3V0/dWJlLXRodW1ibmFp/bC5wbmc_cz0zNjA",
      link: "https://www.youtube.com/watch?v=RKrMZqs-PMs",
    },
    {
      id: 4,
      title: "Dummy Entry",
      description: "A dummy entry with arbitrary information.",
      date: "2024-02-03",
      thumbnail:
        "https://imgs.search.brave.com/QoDylsRceMM8UUPv1G287yym9e-yAmf6sWFDThhJP10/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2VhL2Qw/LzgyL2VhZDA4Mjhh/ZWI3MjFiOWViMzIz/MWJlNmRiOWNiZDUy/LmpwZw",
      link: "https://www.youtube.com/watch?v=AxylHISI-iU",
    },
    {
      id: 5,
      title: "Placeholder",
      description: "This is a placeholder description for the fifth item.",
      date: "2024-02-04",
      thumbnail:
        "https://imgs.search.brave.com/W7XPYkowLcTwCzxViPUhUsVjdkXrq-KNumRK2c2wHIM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMWNz/YXJrejhvYmU5dS5j/bG91ZGZyb250Lm5l/dC9wb3N0ZXJwcmV2/aWV3cy9jYWxsLW9m/LWR1dHktdGh1bWJu/YWlsLWRlc2lnbi10/ZW1wbGF0ZS00MjQx/YmYwM2E2NzVhNzQ5/YTdlMzA5N2NlMmFi/MjNiOC5qcGc_dHM9/MTYwNDAzNjkxMg",
      link: "https://www.youtube.com/watch?v=jWoRuTfQ9PA",
    },
    {
      id: 6,
      title: "Title Six",
      description: "Description for the sixth item goes here.",
      date: "2024-02-05",
      thumbnail:
        "https://imgs.search.brave.com/sjHAzcyThWfj5BH5b82EhIBSOaaQOavGNNyWN6UgsWQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/eW91dHViZS12aWRl/by10aHVtYm5haWwt/d2ViLWJhbm5lci10/ZW1wbGF0ZV82MjIy/ODctOTc5LmpwZz9z/aXplPTYyNiZleHQ9/anBn",
      link: "https://www.youtube.com/watch?v=Lji4X0mChFA",
    },
    {
      id: 7,
      title: "Data Entry",
      description: "Another data entry with some content for description.",
      date: "2024-02-06",
      thumbnail:
        "https://imgs.search.brave.com/Nnx_3b9FE4liucdY_YykGGIXi-RcwPtkQ9eS73NJwhY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9lZGl0/Lm9yZy9pbWcvYmxv/Zy8yMDE4MTAxOTEz/LXlvdXR1YmUtdGh1/bWJuYWlsLXRlbXBs/YXRlLXZsb2cud2Vi/cA",
      link: "https://www.youtube.com/watch?v=14BL_FwQCpM",
    },
    {
      id: 8,
      title: "Item Eight",
      description: "Description for the eighth item in the list.",
      date: "2024-02-07",
      thumbnail:
        "https://imgs.search.brave.com/tSmeYxGaguXNCeTof8Z2J_xavXaWiwGYlCd1DExYFZo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVhaHViLmlvL3Bo/b3Rvcy9mdWxsLzI4/Ny0yODcxMTg0X2dy/YW5kLXRoZWZ0LWF1/dG8taW1hZ2UtMS10/aHVtYm5haWwtZ3Rh/LTUuanBn",
      link: "https://www.youtube.com/watch?v=r93s6afXg2c",
    },
    {
      id: 9,
      title: "Lorem Ipsum 2",
      description: "More Lorem Ipsum for the ninth item.",
      date: "2024-02-08",
      thumbnail:
        "https://imgs.search.brave.com/g2WTy0RzEYYQXbnp22HFlDElUCHVxfy7Q9ZzaaMTCao/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIzNzU1/MDQuanBn",
      link: "https://www.youtube.com/watch?v=RKrMZqs-PMs",
    },
    {
      id: 10,
      title: "Last Entry",
      description: "This is the last entry in the dummy data list.",
      date: "2024-02-09",
      thumbnail:
        "https://imgs.search.brave.com/JXFmMrLXeAN4_CkCt_8HetTGl162Fxn6jH03dt6nSSc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTIx/NTgwNy5qcGc",
      link: "https://www.youtube.com/watch?v=r93s6afXg2c",
    },
  ];

  return (
    <div className="video_sidebar">
      <ul className="flex__col flex__start">
        {list.map((ls) => (
          <li
            className="sd_li flex__row"
            onClick={() => setLedioLink(ls.link)}
            key={ls.id}
            id={ls.id}
          >
            <img src={ls.thumbnail} alt="user" />
            <div className="sd__desc flex__col flex__start">
              <p>{ls.title}</p>
              <p>{ls.description}</p>
              <span>{ls.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});
