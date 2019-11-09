import React, { Fragment, Component } from "react";
import YouTube from "react-youtube";
import "./Ign.css"

class Ign extends Component {
  render() {
    const opts = {
      height: "390",
      width: "600",
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <Fragment>
        <div className="container youtube ">
          <div>
            <YouTube videoId="grJ1rKkLiZA" opts={opts} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Ign;
