import React, { Fragment } from "react";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Ign from "../IGN/Ign";
import Info from "../Info/Info";
import InfoText from "../Info/InfoText";
import Footer from "../Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
      </div>
      <div className="container">
        <InfoText />
        <div className="row" style={{ marginTop: "3rem" }}>
          <Profile />
        </div>
        <div className="row">
          <Ign />
        </div>
        <Info />
      </div>
      <div className="container-fluid">
        <div className="row">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
