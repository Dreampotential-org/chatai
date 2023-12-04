import React, { useEffect, useState } from "react";
import "../Asset/CSS/Analytics.css";
import Navbar from "./Navbar";
import Sidebar from "../Constant/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Thumbnail from "../Asset/Image/thumbnail.jpeg";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { RiYoutubeLine } from "react-icons/ri";

import { listVideo } from "../../ChatAi/services/helper";
import Graph from "../Constant/Graph/Graph";

const Analytics = () => {
  const iconFont = 16;
  return (
    <div className="analytics">
      <Navbar />
      <div className="dashboard__content">
        <Sidebar />
        <div className="db__sidebar_Compoenents">
          {/* <Dashboard iconFont={iconFont} /> */}
          {/* <Content iconFont={iconFont} /> */}
          <Graphs />
        </div>
      </div>
    </div>
  );
};

export default Analytics;

const Dashboard = ({ iconFont }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="container">
      <div className="title">
        <h1>Channel Dashboard</h1>
      </div>
      <div className="container__grid">
        <div className="grid__colo">
          <div className="grid__box flex__col flex__start">
            <div className="box__title">
              <h1>Latest video perfomance</h1>
            </div>
            <div className="box__img">
              <img src={Thumbnail} alt="Thumbnail" />
              <p>Video title</p>
            </div>
            <div className="box__video-details flex__row">
              <div className="bv__analytics flex__row">
                <div className="bv__det flex__row">
                  <SiSimpleanalytics fontSize={iconFont - 4} />
                  <span>4</span>
                </div>
                <div className="bv__det flex__row">
                  <BiCommentDetail fontSize={iconFont} />
                  <span>0</span>
                </div>
                <div className="bv__det flex__row">
                  <AiOutlineLike fontSize={iconFont} />
                  <span>0</span>
                </div>
              </div>
              <div className="collapsed__btn">
                {isOpen ? (
                  <IoChevronUpOutline
                    onClick={toggle}
                    fontSize={iconFont + 4}
                  />
                ) : (
                  <IoChevronDownOutline
                    onClick={toggle}
                    fontSize={iconFont + 4}
                  />
                )}
              </div>
            </div>
            {isOpen && (
              <div className="box__collapsed flex__col">
                <span>First 6 days</span>
                <div className="box__flex flex__row">
                  <p>Ranking by views</p>
                  <p>2 of 5</p>
                </div>
                <div className="box__flex flex__row">
                  <p>Views</p>
                  <p>5</p>
                </div>
                <div className="box__flex flex__row">
                  <p>Impressions click-through rate</p>
                  <p>6.7%</p>
                </div>
                <div className="box__flex flex__row">
                  <p>Average view duration</p>
                  <p>0.07</p>
                </div>
              </div>
            )}
            <div className="box__links flex__col flex__start">
              <Link to="#">GO TO VIDEO ANALYTICS</Link>
              <Link to="#">SEE COMMENTS (0)</Link>
            </div>
          </div>
          {/* <div className="grid__box"></div> */}
        </div>
        <div className="grid__colo">
          <div className="grid__box flex__col flex__start">
            <div className="box__title flex__start">
              <h1>Channel analytics</h1>
            </div>
            <div className="box__title flex__col flex__start">
              <p>Current Follower</p>
              <h1 style={{ fontSize: "2.5rem" }}>2</h1>
            </div>
            <div className="box__summury flex__col flex__start">
              <div className="box__flex flex__col flex__start">
                <p>Summary</p>
                <span>Last 28 days</span>
              </div>
              <div className="box__flex flex__row">
                <p>Views</p>
                <p>8</p>
              </div>
              <div className="box__flex flex__row">
                <p>Watch time (hours)</p>
                <p>0.08</p>
              </div>
            </div>
            <div className="box__title flex__col flex__start">
              <p>Top videos</p>
              <span>Last 48 hours · Views</span>
            </div>
            <div className="box__links flex__col flex__start">
              <Link to="#">GO TO CHANNEL ANALYTICS</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = ({ iconFont }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await listVideo();
        // console.log(res);
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container" style={{ padding: "1rem 0" }}>
      <div className="title" style={{ padding: "1rem 2rem" }}>
        <h1>Channel dashboard</h1>
      </div>
      <div className="Content__Type">
        <ul className="flex__row flex__start">
          <li>Screen</li>
          <li>Vedio</li>
          <li>Audio</li>
        </ul>
      </div>
      <div className="video__table">
        <table className="table">
          <thead>
            <tr>
              <th className="th__col" scope="col">
                #
              </th>
              <th
                style={{ padding: "0.5rem 0" }}
                className="td__video"
                scope="col"
              >
                Vedio
              </th>
              <th className="th__col" scope="col">
                Visibility
              </th>
              <th className="th__col" scope="col">
                Date
              </th>
              <th className="th__col" scope="col">
                Views
              </th>
              <th className="th__col" scope="col">
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            {videos.map((item, index) => (
              <tr key={item.id}>
                <th className="th__col" style={{ width: "50px" }} scope="row">
                  {index}
                </th>
                <td className="td__video">
                  <video
                    src={
                      "https://api.dreampotential.org/storage/stream-video/" +
                      item.id
                    }
                    width="100"
                    height="65"
                  ></video>
                  <div className="video__details flex__col flex__start">
                    <p>
                      Mystery of Q-Star | The AI which threatens Humanity | Open
                      AI | Microsoft | Dhruv Rathee
                    </p>
                    <div className="video__btn flex__row flex__start">
                      <MdOutlineEdit fontSize={iconFont + 6} />
                      <SiSimpleanalytics fontSize={iconFont + 2} />
                      <BiCommentDetail fontSize={iconFont + 6} />
                      <RiYoutubeLine fontSize={iconFont + 6} />
                      <MdDeleteOutline fontSize={iconFont + 6} />
                    </div>
                  </div>
                </td>
                <td className="th__col">Public</td>
                <td className="th__col">{item.created_at.slice(0, 10)}</td>
                <td className="th__col">5</td>
                <td className="th__col">{item.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Graphs = () => {
  const [toggleSection, setToggleSection] = useState({
    view: true,
    watchtime: false,
    followers: false,
  });

  const handleToggleSection = (toggle) => {
    console.log(toggle);
    setToggleSection((prevState) => ({
      view: toggle === "view" ? !prevState.view : false,
      watchtime: toggle === "watchtime" ? !prevState.watchtime : false,
      followers: toggle === "followers" ? !prevState.followers : false,
    }));
  };

  const labels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="container" style={{ padding: "1rem 0" }}>
      <div className="title" style={{ padding: "1rem 2rem" }}>
        <h1>Channel dashboard</h1>
      </div>
      <div className="dashboard__analytics">
        <div className="Content__Type">
          <ul className="flex__row flex__start">
            <li>Overview</li>
            <li>Content</li>
            <li>Audience</li>
          </ul>
        </div>
        <div>
          <div className="dashboard__chart">
            <div
              className="title flex__row flex__center"
              style={{ padding: "1rem 2rem", width: "100%" }}
            >
              <h1 style={{ fontSize: "2.3rem" }}>Channel dashboard</h1>
            </div>
            <div className="graph__container">
              <div className="graph__section flex__row flex__center">
                <div
                  className="g__section flex__col flex__center"
                  onClick={() => {
                    handleToggleSection("view");
                  }}
                >
                  <span>Views</span>
                  <p>10</p>
                  <span> 11% more than previous 28 days</span>
                </div>
                <div
                  className="g__section flex__col flex__center"
                  onClick={() => {
                    handleToggleSection("watchtime");
                  }}
                >
                  <span>Watch time (hours)</span>
                  <p>0.0</p>
                  <span> 47% less than previous 28 days</span>
                </div>
                <div
                  className="g__section flex__col flex__center"
                  onClick={() => {
                    handleToggleSection("followers");
                  }}
                >
                  <span>Followers </span>
                  <p>+1</p>
                  <span>94% less than previous 28 days</span>
                </div>
              </div>
              <div className="graph__toggle">
                {toggleSection.view && <Graph labels={labels} />}
                {toggleSection.watchtime && <Graph labels={labels} />}
                {toggleSection.followers && <Graph labels={labels} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
