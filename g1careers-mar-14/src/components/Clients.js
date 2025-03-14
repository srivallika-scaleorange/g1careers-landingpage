// src/components/Clients.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import client1 from '../assets/images/clients/clients-1.png';
import client2 from '../assets/images/clients/clients-2.png';
import client3 from '../assets/images/clients/clients-3.png';
import client4 from '../assets/images/clients/clients-4.png';
import client5 from '../assets/images/clients/clients-5.png';
function Clients() {
  return (
    <section className="clients-section">
      <div className="auto-container">
        <div className="inner-container">
        
            <div className="clients-box">
              <figure className="clients-logo">
                <Link to="/"><img src={client1} alt="" /></Link>
              </figure>
              <figure className="overlay-logo">
                <Link to="/"><img src={client1} alt="" /></Link>
              </figure>
   
            </div>
            <div className="clients-box">  <figure className="clients-logo">
                <Link to="/"><img src={client2} alt="" /></Link>
              </figure>
              <figure className="overlay-logo">
                <Link to="/"><img src={client2} alt="" /></Link>
              </figure> </div>
              <div className="clients-box">     <figure className="clients-logo">
                <Link to="/"><img src={client3} alt="" /></Link>
              </figure>
              <figure className="overlay-logo">
                <Link to="/"><img src={client3} alt="" /></Link>
              </figure> 
              </div>

          <div className="clients-box">  
          <figure className="clients-logo">
                <Link to="/"><img src={client4} alt="" /></Link>
              </figure>
              <figure className="overlay-logo">
                <Link to="/"><img src={client4} alt="" /></Link>
              </figure> 
              </div>
              <div className="clients-box">
              <figure className="clients-logo">
                <Link to="/"><img src={client5} alt="" /></Link>
              </figure>
              <figure className="overlay-logo">
                <Link to="/"><img src={client5} alt="" /></Link>
              </figure> 
              </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;