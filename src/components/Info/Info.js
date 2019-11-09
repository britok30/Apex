import React, { Fragment } from "react";
import "./Info.css";

const Info = () => {
  return (
    <Fragment>
      <div className="row moreinfo">
        <div className="col-md-6 twitch">
          <div className="twitch-text">
            <h2 className="twitch-header">Check out Apex on Twitch</h2>
            <a
              href="https://www.twitch.tv/directory/game/Apex%20Legends"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline-light twitch-btn">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="col-md-6 eanews">
          <div className="twitch-text">
            <h2 className="news-header">EA Apex Legends News</h2>
            <a
              href="https://www.ea.com/games/apex-legends/news"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline-light twitch-btn">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Info;
