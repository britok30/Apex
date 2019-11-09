import React from "react";

const InfoText = () => {
  return (
    <div className="row">
      <div className="col-md-6" style={{ margin: " 2rem auto" }}>
        <h2 className="sub-heading">About Apex Legends</h2>
        <p style={{ fontSize: "1.5rem" }}>
          Conquer with character in Apex Legends, a free-to-play* Battle Royale
          shooter where legendary characters with powerful abilities team up to
          battle for fame and fortune on the fringes of the Frontier. Master an
          ever-growing roster of diverse legends, deep tactical squad play, and
          bold new innovations that level-up the Battle Royale experience—all
          within a rugged world where anything goes. Welcome to the next
          evolution of Battle Royale.
        </p>
        <ul>
          <li>
            {" "}
            <h3 style={{ fontSize: "1.8rem" }}>Genre</h3>
            <p style={{ fontSize: "1.3rem" }}>Action/Multiplayer</p>
          </li>
          <li>
            {" "}
            <h3 style={{ fontSize: "1.3rem" }}>Platforms</h3>
            <p style={{ fontSize: "1.3rem" }}>PC - PS - XBOX</p>
          </li>
          <li>
            <h3 style={{ fontSize: "1.8rem" }}>Publisher</h3>
            <p style={{ fontSize: "1.3rem" }}>Electronic Arts</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoText;
