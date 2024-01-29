import React, { useEffect, useState } from "react";
import Logo from "../../../PostVideo/Asset/SVG/dreampotential_Logo-01.svg";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

import Nothing from "../../Asset/Nothing.svg";
import Elon from "../../../PostVideo/Asset/Image/ElonMush.jpg";

import { CiMinimize1, CiMaximize1, CiStar } from "react-icons/ci";
import { GoChevronRight, GoChevronDown } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiInboxArrowDown } from "react-icons/hi2";
import { FaWindowMinimize } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import {
  IoReturnUpForwardOutline,
  IoReturnUpBackOutline,
  IoMailUnreadOutline,
} from "react-icons/io5";
import {
  MdAttachFile,
  MdOutlineEdit,
  MdDeleteOutline,
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import {
  getMails,
  sentMail,
  setRead,
  deleteMail,
  unDeleteMail,
  getSentMails,
} from "../../services/helper";
import { useToast } from "@chakra-ui/react";

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
  const [midBar, setMidBar] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [showMaillists, setShowMaillists] = useState(false);
  const [hamburgerMenu, sethamburgerMenu] = useState(false);
  const toast = useToast();

  const [toggleSection, setToggleSection] = useState({
    Groups: false,
    Inbox: true,
    Spam: false,
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
    localStorage.removeItem("Token");
    navigate("/login");
  };

  const handleToggleSection = (toggle) => {
    setToggleSection(() => ({
      Groups: toggle === "Groups" && true,
      Inbox: toggle === "Inbox" && true,
      Spam: toggle === "Spam" && true,
      Drafts: toggle === "Drafts" && true,
      Send: toggle === "Send" && true,
      Deleted: toggle === "Deleted" && true,
      Archive: toggle === "Archive" && true,
      Notes: toggle === "Notes" && true,
    }));

    setMails([]);
    console.log(mails);

    if (
      toggleSection.Groups ||
      toggleSection.Spam ||
      toggleSection.Drafts ||
      toggleSection.Archive ||
      toggleSection.Notes
    ) {
      console.log(toggle);
      setTogglefolder(toggle);
    } else if (toggleSection.Send) {
      setTogglefolder(toggle);
      fetchMails(getSentMails);
    } else {
      setTogglefolder(toggle);
      fetchMails(getMails);
    }
    console.log(mails);
    if (window.innerWidth < 1050) {
      setSideBar(false);
    }
  };

  const fetchMails = async (method) => {
    const response = await fetchRequest(method, {}, "", "");
    if (response.status === 200) {
      const email = response.data.map((data) => data);
      if (toggleSection.Inbox || toggleSection.Deleted) {
        const filteredEmails = filterEmails(email);
        setMails(filteredEmails);
      } else {
        setMails(email);
      }
    }
  };

  const filterEmails = (emails) => {
    if (toggleSection.Deleted) {
      return emails.filter((mail) => mail.deleted === true);
    } else if (toggleSection.Inbox) {
      return emails.filter((mail) => mail.deleted === false);
    } else {
      return null;
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
      message_text: valuesregi.discription,
    };
    setShowModal(false);
    setValuesregi({ tosent: "", subject: "", discription: "" });
    setAttachments([]);

    fetchRequest(
      sentMail,
      body,
      "Email sent successfully",
      "Email not sent some error occured, please try again!"
    );
  };

  const updateMailState = async (prop) => {
    setMailsDetails(prop);
    if (!mailsDetails.read && toggleSection.Send === true) {
      fetchRequest(setRead, { id: prop.id }, "", "");
      fetchMails(getSentMails);
    } else if (!mailsDetails.read) {
      fetchRequest(setRead, { id: prop.id }, "", "");
      fetchMails(getMails);
    }
  };

  const mailMenu = async (prop) => {
    setShowMenu(!showMenu);
    if (prop === "delete") {
      const response = await fetchRequest(
        deleteMail,
        { id: mailsDetails.id },
        "Email is deleted successfully",
        "Some error occured. Please try again!"
      );
    } else if (prop === "Undelete") {
      const response = await fetchRequest(
        unDeleteMail,
        { id: mailsDetails.id },
        "Email is deleted successfully",
        "Some error occured. Please try again!"
      );
    } else if (prop === "UnRead") {
      const response = await fetchRequest(
        unDeleteMail,
        { id: mailsDetails.id },
        "Email is deleted successfully",
        "Some error occured. Please try again!"
      );
    } else {
      return;
    }
    setShowMenu(false);
    setMailsDetails(null);
    fetchMails(getMails);
  };

  const fetchRequest = async (method, payload, successMsg, errorMsg) => {
    let defaultError = "Some Error Occured, PLease reload the page";
    let defaultSuccess = "Successfull";

    if (typeof method === "function" && typeof payload === "object") {
      try {
        const response = await method(payload === null ? {} : payload);
        if (response.status === 200) {
          toast({
            title: successMsg !== "" ? successMsg : defaultSuccess,
            status: "success",
            duration: 1000,
          });
          return response;
        } else {
          toast({
            title: errorMsg !== "" ? errorMsg : defaultError,
            status: "error",
            duration: 2000,
          });

          throw new Error("Invalid method");
        }
      } catch (error) {
        if (error.response) {
          toast({
            title: defaultError,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
          throw error.response.data;
        }
      }
    } else {
      toast({
        title: "Please provide correct props",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchMails(getMails);
    return () => {};
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1050) {
        setSideBar(false);
      }
      if (window.innerWidth >= 650) {
        setMidBar(true);
      }
      if (window.innerWidth >= 1050) {
        setSideBar(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mail__container">
      <div className="navbar">
        <div className="flex__row flex__center navLeft">
          <FaBars fontSize={24} onClick={() => setSideBar(!sideBar)} />
          <Link to="/" className="nav-logo">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex__row flex__center nav_dropDown">
          <div
            className={`flex__row flex__center ${
              hamburgerMenu ? "nav_Show" : "nav_Hide"
            }`}
            style={{ gap: "1rem" }}
          >
            <Link to="/chatai">ChatAi</Link>
            <Link to="/postVideo">Post Video</Link>
          </div>
          {hamburgerMenu ? (
            <RxCross1
              fontSize={24}
              onClick={() => sethamburgerMenu(!hamburgerMenu)}
            />
          ) : (
            <FaBars
              fontSize={24}
              onClick={() => sethamburgerMenu(!hamburgerMenu)}
            />
          )}
          <IoIosLogOut color="#FFF" fontSize={30} onClick={userLogOut} />
        </div>
      </div>
      <div className="mail__content">
        {/* // ----------------- Mails Forlder -------------------------- // */}
        {sideBar && (
          <div
            className={`mail__sidebar mail__sidebar_overlay LeftBar ${
              sideBar ? "slide-right" : ""
            }`}
          >
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
                  onClick={() => handleToggleSection("Spam")}
                >
                  <span>Spam</span>
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

        <MailLists
          mails={mails}
          midBar={midBar}
          setMidBar={setMidBar}
          togglefolder={togglefolder}
          toggleSection={toggleSection}
          updateMailState={updateMailState}
        />

        {/* // ----------------- Mail Details -------------------------- // */}
        <div className="mail__details flex__col flex__start">
          {mailsDetails !== null && (
            <MailDetails
              mailsDetails={mailsDetails}
              mailMenu={mailMenu}
              showMenu={showMenu}
              toggleSection={toggleSection}
            />
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
      <div className="toast"></div>
    </div>
  );
};

export default Home;

const MailDetails = ({ mailsDetails, mailMenu, showMenu, toggleSection }) => {
  return (
    <>
      <div className="mail__subject flex__row flex__start">
        <p>{mailsDetails.subject}</p>
      </div>
      <div className="mail__description">
        <div className="send__info flex__row flex__start">
          <div className="sender_img flex__row flex__center">
            <img src={Elon} alt="user" />
          </div>
          <div className="sender__det flex__row">
            <div className="flex__col flex__start" style={{ gap: 0 }}>
              <p>{mailsDetails.mail_from}</p>
              <p style={{ color: "var(--chakra-colors-gray-700)" }}>
                {toggleSection.Send === true
                  ? `${mailsDetails.mail_to}`
                  : "to me"}
              </p>
            </div>
            <div className="sender__det_menu flex__row flex__start">
              <p>{mailsDetails.local_date.slice(20, 26)}</p>
              <CiStar color="#000" fontSize={24} />
              <BsThreeDotsVertical
                color="#000"
                fontSize={24}
                onClick={() => mailMenu("show")}
              />
              {showMenu && (
                <ul className="sender__menu_modal">
                  {toggleSection.Deleted ? (
                    <li
                      className="menu_modal_li flex__row"
                      id="delete"
                      onClick={() => mailMenu("Undelete")}
                    >
                      <HiInboxArrowDown fontSize={24} />
                      <label htmlFor="delete">Move to Inbox</label>
                    </li>
                  ) : (
                    <li
                      className="menu_modal_li flex__row"
                      id="delete"
                      onClick={() => mailMenu("delete")}
                    >
                      <MdDeleteOutline fontSize={24} />
                      <label htmlFor="delete">Delete this Messege</label>
                    </li>
                  )}
                  <li
                    className="menu_modal_li flex__row"
                    id="delete"
                    onClick={() => mailMenu("forward")}
                  >
                    <IoReturnUpForwardOutline fontSize={24} />
                    <label htmlFor="delete">Forward this Messege</label>
                  </li>
                  <li
                    className="menu_modal_li flex__row"
                    id="delete"
                    onClick={() => mailMenu("reply")}
                  >
                    <IoReturnUpBackOutline fontSize={24} />
                    <label htmlFor="delete">Reply this Messege</label>
                  </li>
                  <li
                    className="menu_modal_li flex__row"
                    id="delete"
                    onClick={() => mailMenu("UnRead")}
                  >
                    <IoMailUnreadOutline fontSize={24} />
                    <label htmlFor="delete">Mark as unread</label>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="send__info_det">
          <p>{mailsDetails.message}</p>
        </div>
      </div>
    </>
  );
};

const MailLists = ({
  mails,
  midBar,
  setMidBar,
  togglefolder,
  toggleSection,
  updateMailState,
}) => {
  return (
    <>
      <div className="mailMidbar_btn">
        {midBar ? (
          <MdOutlineArrowBackIosNew
            fontSize={24}
            onClick={() => setMidBar(!midBar)}
          />
        ) : (
          <MdOutlineArrowForwardIos
            fontSize={24}
            onClick={() => setMidBar(!midBar)}
          />
        )}
      </div>
      {midBar && (
        <div
          className={`mail__midbar mail__midbar_overlay ${
            midBar ? "slide-right" : ""
          }`}
        >
          {toggleSection.Groups === false && (
            <div className="mail__header flex__row flex__start">
              <p>{togglefolder}</p>
              <CiStar color="#000" fontSize={24} />
            </div>
          )}
          {mails.length !== 0 ? (
            <div className="mail__list flex__col">
              <ul className="flex__col flex__start">
                {mails.map((mail) => (
                  <li
                    style={{
                      backgroundColor:
                        mail.read && "var(--chakra-colors-gray-400)",
                    }}
                    className="__mail flex__row flex__center"
                    onClick={() => updateMailState(mail)}
                    key={mail.id}
                    id={mail.id}
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
      )}
    </>
  );
};
