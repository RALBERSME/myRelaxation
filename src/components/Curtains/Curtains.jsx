import React from "react";
import "./Curtains.css";
const Curtains = () => {
  return (
    <div className="cur-wrapper">
      <div>
        <div className="cur-container">
          <div className="curtain">
            <div className="curtain-image curtain-left">
              <img src="/curtain.jpg" alt="curtain" />
            </div>
            <div className="curtain-image curtain-right">
              <img src="/curtain.jpg" alt="curtain" />
            </div>

            <video controls width="100%" height="100%" autoPlay>
              <source src="/dance.mp4" type="video/mp4" />
            </video>
            <div className="cur-text">
              Hover over curtain to start
              <br /> dancing all tension out of you
            </div>
            <div className="cur-text cur-hidden">
              <marquee>
                Just click on dancer and music box to dance with me!
              </marquee>
              <audio controls autoPlay className="cur-audio">
                <source
                  src="background-music-summer-tropical-house-funny-dance-music-for-vlog-60s-byWhiteRecords.mp3"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curtains;
