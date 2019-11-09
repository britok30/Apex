import React, { Component, Fragment } from "react";
import "../Search/Search.css";

class Search extends Component {
  render() {
    const { searchPlatform, searchGamerTag, submit } = this.props;

    return (
      <Fragment>
        <div className="search-container">
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="platform" className="label">
                Platform
              </label>
              <input
                type="text"
                name="text"
                id="platform"
                placeholder="Please enter 'psn' for Playstation; 'xbl' for Xbox; 'origin' for Origin"
                onChange={searchPlatform}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="gamertag" className="label">
                Gamertag
              </label>
              <input
                type="text"
                name="text"
                id="gamertag"
                placeholder="Origin ID, Xbox Live gamertag, PSN ID, etc."
                onChange={searchGamerTag}
                required
              />
              <p style={{marginTop: 5, fontSize: "1.2rem"}}>*Gamertag must be exactly how you have it in your system & must be valid</p>
            </div>
            <div className="form-group">
              <button
                type="submit"
                value="Submit"
                onSubmit={submit}
                className="btn btn-outline-light button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Search;
