import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TeacherUI.css"
// const Settings = () => {
const TeacherUI = () => {

const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

 const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };



return(
    <div>
    <div className='row'>
    <div className='col-4 first'>
    <div className='header'>
    <div className='img-div'>
    <div className='img'></div>
    </div>
    <div className='icon-div'>
    
    <span className="icons"><div className="_3OtEr rOo0o"><div aria-disabled="false" role="button" tabindex="0" className="_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1" data-tab="2" title="Communities" aria-label="Communities"><span data-icon="community-tab" className=

""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=

"" fill="none"><g clip-path="url(#clip0_20095_12594)"><path d="M4.7595 14.0357C4.65644 14.0313 4.55139 14.029 4.44446 14.029C3.65152 14.029 2.96238 14.1558 2.41872 14.3088C1.95159 14.4403 1.42115 14.656 0.975466 14.9996C0.521192 15.3498 0.107939 15.8739 0.0263682 16.5959C-0.0117388 16.9332 2.95136e-05 17.6554 0.00922726 18.0644C0.0256195 18.7935 0.623061 19.3623 1.33916 19.3623H4.31303C4.13562 18.9875 4.03074 18.5698 4.01771 18.1256C4.00494 17.6905 3.97075 16.5163 4.05525 15.893C4.09928 15.5682 4.17628 15.2639 4.27738 14.982C4.40496 14.6263 4.57082 14.3123 4.7595 14.0357Z" fill="currentColor"></path><path d="M19.6869 19.3623H22.6608C23.3769 19.3623 23.9744 18.7935 23.9908 18.0644C24 17.6554 24.0117 16.9332 23.9736 16.5959C23.8921 15.8739 23.4788 15.3498 23.0245 14.9996C22.5788 14.656 22.0484 14.4403 21.5813 14.3088C21.0376 14.1558 20.3485 14.029 19.5555 14.029C19.4486 14.029 19.3435 14.0313 19.2405 14.0357C19.4291 14.3123 19.595 14.6263 19.7226 14.982C19.8237 15.2639 19.9007 15.5682 19.9447 15.893C20.0292 16.5163 19.995 17.6905 19.9822 18.1256C19.9692 18.5698 19.8643 18.9875 19.6869 19.3623Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.52831 13.6265C9.36687 13.3837 10.5649 13.1401 12 13.1401C13.4351 13.1401 14.6331 13.3837 15.4716 13.6265C15.9039 13.7517 16.4206 13.9288 16.8826 14.2131C17.352 14.5019 17.8167 14.934 18.0492 15.5821C18.1097 15.751 18.1563 15.9344 18.183 16.1318C18.243 16.5742 18.22 17.5691 18.2052 18.0735C18.184 18.7987 17.5884 19.3623 16.8756 19.3623H7.12434C6.41155 19.3623 5.81599 18.7987 5.79472 18.0735C5.77992 17.5691 5.75694 16.5742 5.81691 16.1318C5.84367 15.9344 5.89021 15.751 5.95079 15.5821C6.18324 14.934 6.64793 14.5019 7.11736 14.2131C7.57933 13.9288 8.09602 13.7517 8.52831 13.6265Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.8889 9.97001C16.8889 8.49726 18.0828 7.31001 19.5555 7.31001C21.0283 7.31001 22.2222 8.49726 22.2222 9.97001C22.2222 11.4428 21.0283 12.64 19.5555 12.64C18.0828 12.64 16.8889 11.4428 16.8889 9.97001Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.44443 8.20001C8.44443 6.23634 10.0363 4.64001 12 4.64001C13.9636 4.64001 15.5555 6.23634 15.5555 8.20001C15.5555 10.1637 13.9636 11.75 12 11.75C10.0363 11.75 8.44443 10.1637 8.44443 8.20001Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.77777 9.97001C1.77777 8.49726 2.97168 7.31001 4.44444 7.31001C5.91719 7.31001 7.1111 8.49726 7.1111 9.97001C7.1111 11.4428 5.91719 12.64 4.44444 12.64C2.97168 12.64 1.77777 11.4428 1.77777 9.97001Z" fill="currentColor"></path></g><defs><clipPath id="clip0_20095_12594"><rect width="24" height="24" fill="10101"></rect></clipPath></defs></svg></span></div><span></span></div><div className=

"_3OtEr"><div aria-disabled="false" role="button" tabindex="0" className=

"_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1" data-tab="2" title="Status" aria-label="Status"><span data-icon="status-v3" className=

""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=

"" fill="none"><circle cx="12" cy="12" r="6" fill="currentColor"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 12.9267 19.8424 13.8166 19.5526 14.6444C19.3824 15.1305 19.5352 15.6866 19.9709 15.9613C20.4736 16.2782 21.1446 16.0964 21.3551 15.5406C21.7719 14.44 22 13.2466 22 12C22 7.15998 18.5615 3.12307 13.9941 2.19883C13.4118 2.08101 12.9 2.55153 12.9 3.14558C12.9 3.66061 13.2896 4.08652 13.7916 4.20139C17.3473 5.0149 20 8.19767 20 12ZM12 20C14.2014 20 16.1951 19.1108 17.6416 17.672C18.0063 17.3094 18.5733 17.208 19.0083 17.4823C19.5115 17.7995 19.6362 18.4841 19.2249 18.9138C17.4045 20.8156 14.8406 22 12 22C9.13243 22 6.54677 20.793 4.72334 18.8594C4.31526 18.4266 4.44515 17.7429 4.95068 17.4295C5.38777 17.1585 5.95401 17.2641 6.31591 17.6295C7.76573 19.0933 9.77697 20 12 20ZM3.9996 15.9013C4.43726 15.63 4.59424 15.075 4.42776 14.5877C4.15046 13.776 4 12.9056 4 12C4 8.19767 6.65269 5.0149 10.2084 4.20139C10.7104 4.08652 11.1 3.66061 11.1 3.14558C11.1 2.55153 10.5882 2.08101 10.0059 2.19883C5.4385 3.12307 2 7.15998 2 12C2 13.2201 2.21851 14.3892 2.61853 15.4702C2.82479 16.0276 3.49447 16.2145 3.9996 15.9013ZM12.0438 2.00009L12 2L11.9562 2.00009H12.0438Z" fill="currentColor"></path></svg></span></div><span></span></div><div className=

"_3OtEr"><div aria-disabled="false" role="button" tabindex="0" className=

"_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1" data-tab="2" title="New chat" aria-label="New chat"><span data-icon="new-chat" className=

""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=

"" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.16667 3.75C3.69391 3.75 2.5 4.94391 2.5 6.41667V17.5833C2.5 19.0561 3.69391 20.25 5.16667 20.25H18.8333C20.3061 20.25 21.5 19.0561 21.5 17.5833V8.75L23.7458 5.29499C24.1782 4.62974 23.7008 3.75 22.9073 3.75H5.16667ZM14.9672 12.9911H12.9914V14.9671C12.9914 15.3999 12.7366 15.8175 12.3238 15.9488C11.6391 16.1661 11.009 15.6613 11.009 15.009V12.9911H9.03279C8.59949 12.9911 8.1819 12.7358 8.05099 12.3226C7.83412 11.6381 8.33942 11.0089 8.99134 11.0089H11.009V9.03332C11.009 8.60007 11.2639 8.18252 11.6767 8.05119C12.3609 7.83391 12.9914 8.33872 12.9914 8.991V11.0089H15.0091C15.6606 11.0089 16.1659 11.6381 15.949 12.3226C15.8185 12.7358 15.4005 12.9911 14.9672 12.9911Z" fill="currentColor"></path></svg></span></div><span></span></div><span></span><div className=

"_3OtEr"><div aria-disabled="false" role="button" tabindex="0" className=

"_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1" data-tab="2" title="Menu" aria-label="Menu"><span data-icon="menu" className=

""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=

"" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span></div><span></span></div></span>
    </div>
    </div>
    <div className='search'>
     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <span data-icon="filter" className="filter"><svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M10,18.1h4v-2h-4V18.1z M3,6.1v2h18v-2H3z M6,13.1h12v-2H6V13.1z"></path></svg></span>
    
    </div>
     <div className='contacts'>
    <div className='img-div'>
    <div className='img'></div>
    </div>
    <div className='icon-div'>
    <div className='nametime'>
     <h6>Priti </h6>
     {/* <p>kdfvdkj</p> */}
     <span className="aprpv14t">10:06 PM</span>
    </div>
   
    <p>djfvbjsk sds</p>
    
    </div>
    </div>
    <hr />
     <div className='contacts'>
    <div className='img-div'>
    <div className='img'></div>
    </div>
    <div className='icon-div'>
    <div className='nametime'>
     <h6>Priti </h6>
     {/* <p>kdfvdkj</p> */}
     <span className="aprpv14t">10:06 PM</span>
    </div>
   
    <p>djfvbjsk sds</p>
    
    </div>
    </div>
    <hr />
     <div className='contacts'>
    <div className='img-div'>
    <div className='img'></div>
    </div>
    <div className='icon-div'>
    <div className='nametime'>
     <h6>Priti </h6>
     {/* <p>kdfvdkj</p> */}
     <span className="aprpv14t">10:06 PM</span>
    </div>
   
    <p>djfvbjsk sds</p>
    
    </div>
    </div>
    <hr />
 <div className='contacts'>
    <div className='img-div'>
    <div className='img'></div>
    </div>
    <div className='icon-div'>
    <div className='nametime'>
     <h6>Priti </h6>
     {/* <p>kdfvdkj</p> */}
     <span className="aprpv14t">10:06 PM</span>
    </div>
   
    <p>djfvbjsk sds</p>
    
    </div>
    </div>
    <hr />
     <div className='contacts'>
    <div className='img-div'>
    <div className='img'></div>
    </div>
    <div className='icon-div'>
    <div className='nametime'>
     <h6>Priti </h6>
     {/* <p>kdfvdkj</p> */}
     <span className="aprpv14t">10:06 PM</span>
    </div>
   
    <p>djfvbjsk sds</p>
    
    </div>
    </div>
    <hr />
    <div className='contacts'>
    <div className='img-div'>
    <div className='img'></div>
    </div>
    <div className='icon-div'>
    <div className='nametime'>
     <h6>Priti </h6>
     {/* <p>kdfvdkj</p> */}
     <span className="aprpv14t">10:06 PM</span>
    </div>
   
    <p>djfvbjsk sds</p>
    
    </div>
    </div>
    <hr />
    
    
    </div>
    <div className='col-8 second'>
      <div className='header'>
    <div className='img-div'>
    <div className='img'></div>
    <p className='secp'>Priti</p>

    </div>
    <div className='icon-div'>
    {/* <div className="_1sPvB _2XdMx"><div className="g0rxnol2 ppled2lx lqxn65m8 aqkazoap o0zo6k6a pcwnqdp4 ariinwu3 p4t1lx4y pu4k07i0 dciaqwlg jc5r8rrh n2rn87hu frw6cidt tboxp40l now7levk q9zfbx75 shq4gd5h a3oefunm itegkywt rppts313 qomlamqu aa0kojfi neyzb4f4 cyhhvqf0 kgq50qsy q0zge5a5"><button className="namebtn i5tg98hk f9ovudaz przvwfww gx1rr48f shdiholb phqmzxqs gtscxtjd ajgl1lbb thr4l2wc cc8mgx9x eta5aym1 d9802myq e4xiuwjv" tabindex="0" data-tab="6" title="Get the app for calling" type="button" aria-label="Get the app for calling"><div className="tvf2evcx m0h2a7mj lb5m6g5c j7l1k36l ktfrpxia nu7pwgvd p357zi0d dnb887gk gjuq5ydh i2cterl7 ac2vgrno sap93d0t gndfcl4n k41sb3ws"><span data-icon="video-call" className="claouzo6"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><path d="M3.27096 7.31042C3 7.82381 3 8.49587 3 9.84V14.16C3 15.5041 3 16.1762 3.27096 16.6896C3.5093 17.1412 3.88961 17.5083 4.35738 17.7384C4.88916 18 5.58531 18 6.9776 18H13.1097C14.502 18 15.1982 18 15.7299 17.7384C16.1977 17.5083 16.578 17.1412 16.8164 16.6896C17.0873 16.1762 17.0873 15.5041 17.0873 14.16V9.84C17.0873 8.49587 17.0873 7.82381 16.8164 7.31042C16.578 6.85883 16.1977 6.49168 15.7299 6.26158C15.1982 6 14.502 6 13.1097 6H6.9776C5.58531 6 4.88916 6 4.35738 6.26158C3.88961 6.49168 3.5093 6.85883 3.27096 7.31042Z" fill="currentColor"></path><path d="M18.7308 9.60844C18.5601 9.75994 18.4629 9.97355 18.4629 10.1974V13.8026C18.4629 14.0264 18.5601 14.2401 18.7308 14.3916L20.9567 16.3669C21.4879 16.8384 22.3462 16.4746 22.3462 15.778V8.22203C22.3462 7.52542 21.4879 7.16163 20.9567 7.63306L18.7308 9.60844Z" fill="currentColor"></path></svg></span><span data-icon="chevron-down-alt" className=""><svg viewBox="0 0 17 13" height="10" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 17 13"><path fill="currentColor" d="M3.202,2.5l5.2,5.2l5.2-5.2l1.5,1.5l-6.7,6.5l-6.6-6.6L3.202,2.5z"></path></svg></span></div></button></div><div className="_3OtEr"><div aria-disabled="false" role="button" tabindex="0" className="_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1" data-tab="6" title="Search…" aria-label="Search…"><span data-icon="search-alt" className=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg></span></div><span></span></div><div className="_3vsRF"><div className="_3OtEr"><div aria-disabled="false" role="button" tabindex="0" className="_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1" data-tab="6" title="Menu" aria-label="Menu"><span data-icon="menu" className="kiiy14zj"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span></div><span></span></div></div></div> */}
    <div className="_1sPvB _2XdMx"><div className="g0rxnol2 ppled2lx lqxn65m8 aqkazoap o0zo6k6a pcwnqdp4 ariinwu3 p4t1lx4y pu4k07i0 dciaqwlg jc5r8rrh n2rn87hu frw6cidt tboxp40l now7levk q9zfbx75 shq4gd5h a3oefunm itegkywt rppts313 qomlamqu aa0kojfi neyzb4f4 cyhhvqf0 kgq50qsy q0zge5a5"><button className="namebtn i5tg98hk f9ovudaz przvwfww gx1rr48f shdiholb phqmzxqs gtscxtjd ajgl1lbb thr4l2wc cc8mgx9x eta5aym1 d9802myq e4xiuwjv" tabindex="0" data-tab="6" title="Get the app for calling" type="button" aria-label="Get the app for calling"><div className=" video-icon tvf2evcx m0h2a7mj lb5m6g5c j7l1k36l ktfrpxia nu7pwgvd p357zi0d dnb887gk gjuq5ydh i2cterl7 ac2vgrno sap93d0t gndfcl4n k41sb3ws"><span data-icon="video-call" className="claouzo6"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><path d="M3.27096 7.31042C3 7.82381 3 8.49587 3 9.84V14.16C3 15.5041 3 16.1762 3.27096 16.6896C3.5093 17.1412 3.88961 17.5083 4.35738 17.7384C4.88916 18 5.58531 18 6.9776 18H13.1097C14.502 18 15.1982 18 15.7299 17.7384C16.1977 17.5083 16.578 17.1412 16.8164 16.6896C17.0873 16.1762 17.0873 15.5041 17.0873 14.16V9.84C17.0873 8.49587 17.0873 7.82381 16.8164 7.31042C16.578 6.85883 16.1977 6.49168 15.7299 6.26158C15.1982 6 14.502 6 13.1097 6H6.9776C5.58531 6 4.88916 6 4.35738 6.26158C3.88961 6.49168 3.5093 6.85883 3.27096 7.31042Z" fill="currentColor"></path><path d="M18.7308 9.60844C18.5601 9.75994 18.4629 9.97355 18.4629 10.1974V13.8026C18.4629 14.0264 18.5601 14.2401 18.7308 14.3916L20.9567 16.3669C21.4879 16.8384 22.3462 16.4746 22.3462 15.778V8.22203C22.3462 7.52542 21.4879 7.16163 20.9567 7.63306L18.7308 9.60844Z" fill="currentColor"></path></svg></span><span data-icon="chevron-down-alt" className="dataicon"><svg viewBox="0 0 17 13" height="10" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 17 13"><path fill="currentColor" d="M3.202,2.5l5.2,5.2l5.2-5.2l1.5,1.5l-6.7,6.5l-6.6-6.6L3.202,2.5z"></path></svg></span></div></button></div><div className="_3OtEr"><div aria-disabled="false" role="button" tabindex="0" className="_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1" data-tab="6" title="Search…" aria-label="Search…"><span data-icon="search-alt" className=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg></span></div><span></span></div><div className="_3vsRF"><div className="_3OtEr"><div aria-disabled="false" role="button" tabindex="0" className="_3ndVb fbgy3m38 ft2m32mm oq31bsqd nu34rnf1" data-tab="6" title="Menu" aria-label="Menu"><span data-icon="menu" className="kiiy14zj"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span></div><span></span></div></div></div>
    </div>
    </div>
    <div className='chat'>
   <div className='currentday'>
    <p>Today</p>
    </div>
    </div>
   
    <div className='chatbox'>
         <div className='chatmsg'>
      <p className='sec'>Hello</p>
        </div>
     <div className='chatRecieve'>
      <div className='chatmsgRecieve'>
        {messages.map((msg, index) => (
          <div className='chatpdiv'>
          <p className='chatp' key={index}>{msg}</p>
                  <div className="priti gq1t1y46 o38k74y6 e4p1bexh cr2cog7z le5p0ye3 p357zi0d gndfcl4n" role="button"><span className=

"l7jjieqr fewfhwl7" dir="auto">9:56 PM</span><div className=

"tick do8e0lj9 l7jjieqr k6y3xtnu"><span className="tick" aria-label=" Read " data-icon="msg-dblcheck" className=

"ajgik1ph"><svg viewBox="0 0 16 11" height="11" width="16" preserveAspectRatio="xMidYMid meet" className=

"" fill="none"><path d="M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 14.7657 0.754395L8.6212 8.32715Z" fill="currentColor"></path></svg></span></div></div>
          </div>
        ))}

      </div>
      </div>
     
    </div>
    <div className='foot'>
    <span data-icon="smiley" className="smile"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=

"ekdr8vow dhq51u3o" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>smiley</title><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg></span>
      <span data-icon="attach-menu-plus" className="plus"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=

"" fill="none"><title>attach-menu-plus</title><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z" fill="currentColor"></path></svg></span>  
        <input
          className='inptmsg'
          type="text"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message... "
        />
        <button className='submitbtn' onClick={handleSendMessage}><span data-icon="send" className=

""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=

"" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>send</title><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg></span></button>
        <span data-icon="ptt" className="mice"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=

"" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>ptt</title><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg></span>

      </div>
    </div>
     
    </div>
    </div>
)

}

export default TeacherUI;

