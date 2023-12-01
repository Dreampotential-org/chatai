import React, { useState } from "react";
import "../Asset/CSS/Dashboard.css";
import Navbar from "./Navbar";
import Sidebar from "../Constant/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Thumbnail from "../Asset/Image/thumbnail.jpeg";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

const Analytics = () => {
  return (
    <div className="analytics">
      <Navbar />
      <div className="dashboard__content">
        <Sidebar />
        <div className="db__sidebar_Compoenents">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Analytics;

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const iconFont = 16;
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

const Content = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Channel dashboard</h1>
      </div>
    </div>
  );
};
