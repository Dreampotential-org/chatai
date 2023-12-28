// Contacts.js

import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [showForm, setShowForm] = useState(false);
  const [contacts, setContacts] = useState([
    { name: 'Aaron Rosen', email: 'abc@gmail.com', company: 'XYZ Corp', message:"I'm a developer", jobTitle: 'Developer' },
    { name: 'Priti Sahani', email: 'def@gmail.com', company: 'ABC Inc', message:"I'm a developer", jobTitle: 'Designer' },
  ]);

  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    message: "",
  });

  const showCreateForm = () => {
    setShowForm(true);
  };

  const cancelForm = () => {
    setShowForm(false);
    setNewContact({
      name: '',
      email: '',
      company: '',
      jobTitle: '',
      message: "",
    });
  };

  const saveContact = () => {
    // Perform validation if needed
    if (newContact.name && newContact.email) {
      // Save the new contact
      setContacts([...contacts, newContact]);

      // Reset the form
      setNewContact({
        name: '',
        email: '',
        company: '',
        jobTitle: '',
        message: "",
      });

      // Hide the form
      setShowForm(false);
    } else {
      // Handle validation error (e.g., show an error message)
      console.error('Name and email are required fields.');
    }
  };

  return (<div className=''>
    <h1 className='heading'>Contacts</h1>
      <hr />
    <div className='contact'>
    <div className='data-div'>
      
      <h3 onClick={showCreateForm}>+ Create contact</h3>
  <h5>Contacts ({contacts.length})</h5>
      {contacts.map((contact, index) => (
        <div key={index} className='profile'>
          <div className='profile-img'>{contact.name[0]}</div>
          <div className='profile-text'>
            <p className='name'>{contact.name}</p>
            <p className='email'>{contact.email}</p>
            <p className='email'>{contact.company}</p>
            <p className='email'>{contact.message}</p>
          </div>
        </div>
      ))}
      </div>


      {showForm && (
        
        <div className='form-container'>
          <div className='form contact-form'>
            <label>Name:</label>
            <input
              type='text'
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            />

            <label>Email:</label>
            <input
              type='email'
              value={newContact.email}
              onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
            />

            <label>Company:</label>
            <input
              type='text'
              value={newContact.company}
              onChange={(e) => setNewContact({ ...newContact, company: e.target.value })}
            />

            {/* <label>Job Title:</label>
            <input
              type='text'
              value={newContact.jobTitle}
              onChange={(e) => setNewContact({ ...newContact, jobTitle: e.target.value })}
            /> */}
           <label>Message:</label>
            <input
              type='text'
              value={newContact.message}
              onChange={(e) => setNewContact({ ...newContact, message: e.target.value })}
            />

            <div className='button-container'>
              <button className='savebtn' onClick={saveContact}>Save</button>
              <button className='cancelbtn' onClick={cancelForm}>Cancel</button>
            </div>
          </div>
         </div>
      )}

      
    </div>
    </div>
  );
};

export default Contacts;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./Contacts.css"

// const Contacts = () => {
  

//   return (
//     <div className='contact'>
//       <h1>Contacts</h1>
//       <hr />
//       <h3> + Create contact</h3>
//       <h5>contact(1)</h5>
//       <div className='profile'>
//       <div className='profile-img'>A</div>
//       <div className='profile-text'>
//       <p className='name'>Aaron Rosen</p>
//       <p className='email'>abc@gmail.com</p>
//       </div>
//       </div>
//       <div className='profile'>
//       <div className='profile-img'>A</div>
//       <div className='profile-text'>
//       <p className='name'>Aaron Rosen</p>
//       <p className='email'>abc@gmail.com</p>
//       </div>
//       </div>
//       <div className='profile'>
//       <div className='profile-img'>A</div>
//       <div className='profile-text'>
//       <p className='name'>Aaron Rosen</p>
//       <p className='email'>abc@gmail.com</p>
//       </div>
//       </div>
//       <div className='profile'>
//       <div className='profile-img'>P</div>
//       <div className='profile-text'>
//       <p className='name'>Priti Sahani</p>
//       <p className='email'>abc@gmail.com</p>
//       </div>
//       </div>
//        <div className='profile'>
//       <div className='profile-img'>P</div>
//       <div className='profile-text'>
//       <p className='name'>Priti Sahani</p>
//       <p className='email'>abc@gmail.com</p>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Contacts;
