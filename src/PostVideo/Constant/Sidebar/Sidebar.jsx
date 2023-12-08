import React, { useState } from "react";
import ElonDP from "../../Asset/Image/ElonMush.jpg";
import {
  MdAnalytics,
  MdCopyright,
  MdDashboard,
  MdOutlineAttachMoney,
  MdOutlineInsertComment,
  MdOutlineSubtitles,
  MdCancelPresentation,
} from "react-icons/md";
import { BsCollectionPlayFill, BsFileMusic } from "react-icons/bs";
import { FaMagic, FaBars } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ handleToggleSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("Dashboard");
  const toggle = () => setIsOpen(!isOpen);
  const iconFont = 22;

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <MdDashboard fontSize={iconFont} />,
    },
    {
      path: "/about",
      name: "Content",
      icon: <BsCollectionPlayFill fontSize={iconFont} />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <MdAnalytics fontSize={iconFont} />,
    },
    {
      path: "/comment",
      name: "Comments",
      icon: <MdOutlineInsertComment fontSize={iconFont} />,
    },
    {
      path: "/product",
      name: "Subtitle",
      icon: <MdOutlineSubtitles fontSize={iconFont} />,
    },
    // {
    //   path: "/productList",
    //   name: "Copyright",
    //   icon: <MdCopyright fontSize={iconFont} />,
    // },
    {
      path: "/productList",
      name: "Earn",
      icon: <MdOutlineAttachMoney fontSize={iconFont} />,
    },
    {
      path: "/productList",
      name: "Customization",
      icon: <FaMagic fontSize={iconFont} />,
    },
    {
      path: "/productList",
      name: "Audio library",
      icon: <BsFileMusic fontSize={iconFont} />,
    },
  ];

  const handleSection = (section) => {
    handleToggleSection(section);
    setView(section);
  };

  let active = {
    backgroundColor: "var(--chakra-colors-blackAlpha-500)",
    borderLeft: "5px solid red",
  };

  return (
    <div
      className="dashboard__sidebar"
      style={{
        width: isOpen ? "250px" : "70px",
      }}
    >
      <div className="userDetail__setion">
        <img
          src={ElonDP}
          alt="DP"
          width={isOpen ? 180 : 50}
          height={isOpen ? 180 : 50}
        />
        {isOpen && (
          <>
            <h3>Your Channel</h3>
            <p>elontheBillionair</p>
          </>
        )}
      </div>
      <div className="bars">
        {isOpen ? (
          <MdCancelPresentation onClick={toggle} fontSize={iconFont} />
        ) : (
          <FaBars onClick={toggle} fontSize={iconFont} />
        )}
      </div>
      <div className="sidebar_menu">
        <ul>
          {menuItem.map((item, index) => (
            <li
              key={index}
              className="link"
              onClick={() => {
                handleSection(item.name);
              }}
              style={view === item.name ? { ...active } : {}}
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
