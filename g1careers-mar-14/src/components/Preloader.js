// Preloader.js
import React from 'react';

const Preloader = () => {
  return (
    <div className="loader-wrap">
      <div className="preloader">
        <div className="preloader-close">
          <i className="icon-27"></i>
        </div>
        <div className="handle-preloader">

          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              {['g', '1', 'c', 'a', 'r', 'e', 'e', 'r', 's'].map((letter, index) => (
                <span
                  key={index}
                  data-text-preloader={letter}
                  className="letters-loading"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;