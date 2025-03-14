import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
const ContactSection = () => {
  return (
    <section className="contact-section pt_110 pb_30">
      {/* Contact Section */}
      <div className="flex flex-wrap p-4 my-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="w-full md:w-5/12 lg:w-4/12">
          <div className="bg-green-900 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <div className="bg-green-400 p-4 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold">Corporate Office</h3>
                  <p>0233 Brisbane Cir.</p>
                  <p>Shiloh, Australia 81063</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="bg-green-400 p-4 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold">Main Warehouse</h3>
                  <p>10445 Brisbane Cir.</p>
                  <p>Shiloh, Australia 81063</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="bg-green-400 p-4 rounded-full mr-4">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold">Email Address</h3>
                  <p>support@example.com</p>
                  <p>contact@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="bg-green-400 p-4 rounded-full mr-4">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold">Phone Number</h3>
                  <p>+(208) 544-0141</p>
                  <p>+(208) 544-0142</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="w-full md:w-7/12 lg:w-8/12 pl-0 md:pl-8 mt-8 md:mt-0">
          <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  type="text"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="subject"
                  type="text"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                  Write Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40"
                  id="message"
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <button
                className="bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-3 px-12 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default ContactSection;