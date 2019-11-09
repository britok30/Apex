import React, { Fragment, Component } from "react";
import YouTube from "react-youtube";

class Ign extends Component {
  render() {
    const opts = {
      height: "600",
      width: "1140",
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <Fragment>
        <div style={{ margin: "3rem 0" }}>
          <YouTube videoId="grJ1rKkLiZA" opts={opts} />
        </div>
        <div style={{ margin: "1rem 0" }}>
          <YouTube videoId="jJ3N4LiNWwY" opts={opts} />
        </div>
      </Fragment>
    );
  }
}

export default Ign;
