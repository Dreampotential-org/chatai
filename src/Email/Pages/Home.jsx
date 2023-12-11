import React, { useEffect, useState } from "react";
import Logo from "../../PostVideo/Asset/SVG/dreampotential_Logo-01.svg";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

import Nothing from "../Asset/Nothing.svg";
import Elon from "../../PostVideo/Asset/Image/ElonMush.jpg";

import { MdOutlineEdit, MdAttachFile, MdLink } from "react-icons/md";
import { CiMinimize1, CiMaximize1, CiStar } from "react-icons/ci";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaWindowMinimize } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

import { getMails, sentMail } from "../services/helper";

const Home = () => {
  const navigate = useNavigate();
  const [toggleFavourites, setToggleFavourites] = useState(false);
  const [toggleFolder, setToggleFolder] = useState(true);
  const [toggleGroup, setToggleGroup] = useState(false);
  const [togglefolder, setTogglefolder] = useState("Inbox");

  const [mails, setMails] = useState([]);
  const [mailsDetails, setMailsDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sentModalMin, setSentModalMin] = useState(false);
  const [sideBar, setSideBar] = useState(true);
  const [attachments, setAttachments] = useState([]);

  const [toggleSection, setToggleSection] = useState({
    Groups: false,
    Inbox: true,
    JunkEmail: false,
    Drafts: false,
    Send: false,
    Deleted: false,
    Notes: false,
    Archive: false,
  });

  const [valuesregi, setValuesregi] = useState({
    tosent: "",
    subject: "",
    discription: "",
    link: "",
  });

  const userLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleToggleSection = (toggle) => {
    setToggleSection(() => ({
      Groups: toggle === "Groups" && true,
      Inbox: toggle === "Inbox" && true,
      JunkEmail: toggle === "JunkEmail" && true,
      Drafts: toggle === "Drafts" && true,
      Send: toggle === "Send" && true,
      Deleted: toggle === "Deleted" && true,
      Archive: toggle === "Archive" && true,
      Notes: toggle === "Notes" && true,
    }));
    setTogglefolder(toggle);
    // setMails(null);
    if (toggle === "Inbox") {
      fetch(getMails);
    }
  };

  const overlayModal = (prop) => {
    const overlay = document.getElementById("overlay");
    if (prop === "max") {
      overlay.classList.toggle("overlayMax");
      overlay.classList.remove("overlayMin");
    } else {
      overlay.classList.toggle("overlayMin");
      overlay.classList.remove("overlayMax");
      setSentModalMin(!sentModalMin);
    }
  };

  const fetch = async (method) => {
    try {
      if (typeof method === "function") {
        const response = await method();
        const email = response.data.map((data) => data);
        setMails(email);
      } else {
        throw new Error("Invalid method");
      }
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    console.log(selectedFiles);
    setAttachments([...attachments, ...selectedFiles]);
  };

  const handleRemoveAttachment = (index) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  const onChangeregi = (e) => {
    setValuesregi((valuesregi) => ({
      ...valuesregi,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    let body = {
      mail_from: "saurabh@agentstat.com",
      reply_to: valuesregi.tosent,
      mail_to: valuesregi.tosent,
      subject: valuesregi.subject,
      // message_text: { msg: valuesregi.discription, attachment: attachments },
      message_text: valuesregi.discription,
    };
    setShowModal(false);
    setValuesregi({ tosent: "", subject: "", discription: "" });
    setAttachments([]);

    try {
      const response = await sentMail(body);
      const email = response.data.map((data) => data);
      setMails(email);
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      }
    }
  };

  useEffect(() => {
    fetch(getMails);
    return () => {};
  }, []);

  return (
    <div className="mail__container">
      <div className="navbar">
        <div className="nav-links" style={{ alignItems: "center" }}>
          <FaBars fontSize={24} onClick={() => setSideBar(!sideBar)} />
          <img src={Logo} alt="Logo" width={180} height={40} />
          <Link to="/postVideo/analytics">Home</Link>
          <Link to="/chatai">View</Link>
          <Link to="/postVideo/viewVideo">Help</Link>
          <button type="button" className="post-btn" onClick={userLogOut}>
            Log Out
          </button>
        </div>
      </div>
      <div className="mail__content flex__row flex__start">
        {/* // ----------------- Mails Forlder -------------------------- // */}
        {sideBar && (
          <div className="mail__sidebar">
            <div className="new_mail flex__row flex__start">
              <button
                className="flex__row flex__center"
                onClick={() => setShowModal(true)}
              >
                <MdOutlineEdit
                  fontSize={28}
                  color="var(--chakra-colors-messenger-900)"
                />
                <span>Compose</span>
              </button>
            </div>
            <div className="dropdown_menu">
              <label
                htmlFor="Favourites"
                className="flex__row"
                onClick={() => setToggleFavourites(!toggleFavourites)}
              >
                {!toggleFavourites ? <GoChevronRight /> : <GoChevronDown />}
                <span>Favourites</span>
              </label>
              <ul
                className="dropdown__list flex__col flex__start"
                style={{ display: `${toggleFavourites ? "flex" : "none"}` }}
              >
                <li
                  className="flex__row flex__start"
                  onClick={() => handleToggleSection("Groups")}
                >
                  <span>Your Family</span>
                  <span>2</span>
                </li>
              </ul>
            </div>
            <div className="dropdown_menu">
              <label
                htmlFor="Folders"
                className="flex__row"
                onClick={() => setToggleFolder(!toggleFolder)}
              >
                {!toggleFolder ? <GoChevronRight /> : <GoChevronDown />}
                <span id="Folders">Folders</span>
              </label>
              <ul
                className="dropdown__list flex__col flex__start"
                style={{ display: `${toggleFolder ? "flex" : "none"}` }}
              >
                <li
                  className="flex__row flex__start"
                  onClick={() => handleToggleSection("Inbox")}
                >
                  <span>Inbox</span>
                </li>
                <li
                  className="flex__row flex__start"
                  onClick={() => handleToggleSection("JunkEmail")}
                >
                  <span>Junk Email</span>
                </li>
                <li
                  className="flex__row flex__start"
                  onClick={() => handleToggleSection("Drafts")}
                >
                  <span>Drafts</span>
                </li>
                <li
                  className="flex__row flex__start"
                  onClick={() => handleToggleSection("Send")}
                >
                  <span>Send Items</span>
                </li>
                <li
                  className="flex__row flex__start"
                  onClick={() => handleToggleSection("Deleted")}
                >
                  <span>Deleted Items</span>
                </li>
                <li
                  className="flex__row flex__start"
                  onClick={() => handleToggleSection("Archive")}
                >
                  <span>Archive</span>
                </li>
                <li
                  className="flex__row flex__start"
                  onClick={() => handleToggleSection("Notes")}
                >
                  <span>Notes</span>
                </li>
              </ul>
            </div>
            <div className="dropdown_menu">
              <label
                htmlFor="Groups"
                className="flex__row"
                onClick={() => setToggleGroup(!toggleGroup)}
              >
                {!toggleGroup ? <GoChevronRight /> : <GoChevronDown />}
                <span>Groups</span>
              </label>
              <ul
                className="dropdown__list flex__col flex__start"
                style={{ display: `${toggleGroup ? "flex" : "none"}` }}
              >
                <li
                  className="flex__row flex__start"
                  onClick={() => handleToggleSection("Groups")}
                >
                  <span>Your family</span>
                  <span>2</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* // ----------------- Mail In Folder -------------------------- // */}
        <div className="mail__midbar">
          {toggleSection.Groups === false && (
            <div className="mail__header flex__row flex__start">
              <p>{togglefolder}</p>
              <CiStar color="#000" fontSize={24} />
            </div>
          )}
          {mails !== null ? (
            <div className="mail__list flex__col">
              <ul className="flex__col flex__start">
                {mails.map((mail) => (
                  <li
                    className="__mail flex__row flex__center"
                    onClick={() => setMailsDetails(mail)}
                    key={mail.id}
                  >
                    <img src={Elon} alt="user" />
                    <div className="mail__user flex__col flex__start">
                      <p>{mail.mail_from}</p>
                      <p>{mail.subject}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="nothing flex__col flex__center">
              <img src={Nothing} alt="Empty" />
              <p>Nothing in Folder</p>
              <span>Enjoy your day</span>
            </div>
          )}
        </div>
        {/* // ----------------- Mail Detrails -------------------------- // */}
        <div className="mail__details flex__col flex__start">
          {mailsDetails !== null && (
            <>
              <div className="mail__subject flex__row flex__start">
                <p>{mailsDetails.subject}</p>
              </div>
              <div className="mail__description">
                <div className="send__info flex__row flex__start">
                  <div className="sender_img">
                    <img src={Elon} alt="user" />
                  </div>
                  <div className="sender__det flex__row">
                    <div className="flex__col flex__start" style={{ gap: 0 }}>
                      <p>{mailsDetails.mail_from}</p>
                      <p style={{ color: "var(--chakra-colors-gray-700)" }}>
                        to me
                      </p>
                    </div>
                    <div className="flex__row flex__start">
                      <p>{mailsDetails.local_date.slice(20, 26)}</p>
                      <CiStar color="#000" fontSize={24} />
                      <BsThreeDotsVertical color="#000" fontSize={24} />
                    </div>
                  </div>
                </div>
                <div className="send__info_det">
                  <p>{mailsDetails.message}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* // ----------------- Send Mail Overlay Modal -------------------------- // */}
      <div
        className="sent_mail__overlay flex__col"
        id="overlay"
        style={{ display: `${showModal ? "flex" : "none"}` }}
      >
        <div className="overlay__header flex__row">
          <p>New Message</p>
          <div className="overlay__buttons flex__row flex__center">
            <FaWindowMinimize
              fontSize={22}
              onClick={() => overlayModal("min")}
            />
            <CiMaximize1 fontSize={24} onClick={() => overlayModal("max")} />
            <RxCross2 fontSize={28} onClick={() => setShowModal(false)} />
          </div>
        </div>
        <div
          className="sent_mail__content"
          style={{ display: `${!sentModalMin ? "flex" : "none"}` }}
        >
          <form className="flex__col flex__start">
            <label htmlFor="sentTo" style={{ height: "37px" }}>
              <input
                type="text"
                id="sentTo"
                name="tosent"
                placeholder="To"
                value={valuesregi.tosent}
                onChange={onChangeregi}
              />
            </label>
            <label htmlFor="subject" style={{ height: "37px" }}>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={valuesregi.subject}
                onChange={onChangeregi}
              />
            </label>
            <label htmlFor="discription" style={{ height: "100%" }}>
              <textarea
                id="discription"
                name="discription"
                placeholder="Discription"
                value={valuesregi.discription}
                onChange={onChangeregi}
                required
              />
            </label>
            <div className="overlay__buttons flex__row flex__center">
              <button type="button" onClick={handleSubmit}>
                SEND
              </button>
              <input
                type="file"
                multiple
                id="uploadVideo"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label htmlFor="uploadVideo">
                <MdAttachFile fontSize={22} color="#FFF" />
              </label>
              {/* <MdLink fontSize={50} /> */}
            </div>
            <ul className="file__attachment flex__col flex__center">
              {attachments.map((fl, index) => (
                <li key={index} className="flex__row flex__start">
                  <span>{fl.name}</span>
                  <RxCross2
                    fontSize={16}
                    onClick={() => handleRemoveAttachment(index)}
                  />
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
