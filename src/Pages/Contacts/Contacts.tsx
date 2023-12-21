import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Contacts.css"

const Contacts = () => {
  

  return (
    <div className='contact'>
      <h1>Contacts</h1>
      <hr />
      <h3> + Create contact</h3>
      <h5>contact(1)</h5>
      <div className='profile'>
      <div className='profile-img'>A</div>
      <div className='profile-text'>
      <p className='name'>Aaron Rosen</p>
      <p className='email'>abc@gmail.com</p>
      </div>
      </div>
      <div className='profile'>
      <div className='profile-img'>A</div>
      <div className='profile-text'>
      <p className='name'>Aaron Rosen</p>
      <p className='email'>abc@gmail.com</p>
      </div>
      </div>
      <div className='profile'>
      <div className='profile-img'>A</div>
      <div className='profile-text'>
      <p className='name'>Aaron Rosen</p>
      <p className='email'>abc@gmail.com</p>
      </div>
      </div>
      <div className='profile'>
      <div className='profile-img'>P</div>
      <div className='profile-text'>
      <p className='name'>Priti Sahani</p>
      <p className='email'>abc@gmail.com</p>
      </div>
      </div>
       <div className='profile'>
      <div className='profile-img'>P</div>
      <div className='profile-text'>
      <p className='name'>Priti Sahani</p>
      <p className='email'>abc@gmail.com</p>
      </div>
      </div>
    </div>
  );
};

export default Contacts;
