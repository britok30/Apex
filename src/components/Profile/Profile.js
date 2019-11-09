import React, { Component, Fragment } from "react";
import axios from "axios";
import Search from "../Search/Search";
import xbox from "../../image/xbox.png";
import ps from "../../image/ps4.png";
import origin from "../../image/origin.png";
import "./Profile.css";

class Profile extends Component {
  state = {
    profileData: null,
    showError: true,
    loading: true,
    platform: "psn",
    gamertag: "XednimTTV"
  };

  getData = () => {
    const { platform, gamertag } = this.state;
    const config = {
      headers: { "TRN-API-KEY": "423b2a99-14c5-4bc2-8570-9bae451ccb1b" }
    };

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${gamertag}`,
        config
      )
      .then(res => {
        console.log(res.data.data);
        this.setState({
          profileData: res.data.data,
          loading: false
        });
      })
      .catch(err => console.log(err));;
  };

  async componentDidMount() {
    await this.getData();
  }

  
  //EVENT HANDLERS

  onSubmit = e => {
    e.preventDefault();
    const { platform, gamertag, error, loading } = this.state;
    const config = {
      headers: { "TRN-API-KEY": "423b2a99-14c5-4bc2-8570-9bae451ccb1b" }
    };

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/apex/standard/profile/${platform}/${gamertag}`,
        config
      )
      .then(res => {
        console.log(res.data.data);
        this.setState({
          profileData: res.data.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
  };

  onChangePlat = e => {
    this.setState({ platform: e.target.value.toLowerCase() });
  };

  onChangeGamer = e => {
    this.setState({ gamertag: e.target.value });
  };

  render() {
    const { profileData, loading, error } = this.state;

    return (
      <Fragment>
        <Search
          searchPlatform={this.onChangePlat}
          searchGamerTag={this.onChangeGamer}
          submit={this.onSubmit}
        />
        <div>
          {loading === true ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Profile Not Found</h1>
          ) : (
            <div>
              {profileData ? (
                <div className="player-container">
                  <h1 className="gamertag">
                    <img
                      src={profileData.platformInfo.avatarUrl}
                      alt=""
                      className="platform-avatar"
                    />{" "}
                    {profileData.platformInfo.platformUserId}
                    {profileData.platformInfo.platformSlug === "xbl" ? (
                      <img className="xbox" src={xbox} alt="xbox" />
                    ) : null}
                    {profileData.platformInfo.platformSlug === "psn" ? (
                      <img className="ps" src={ps} alt="psn" />
                    ) : null}
                    {profileData.platformInfo.platformSlug === "origin" ? (
                      <img className="origin" src={origin} alt="origin" />
                    ) : null}
                  </h1>
                  <div className="grid">
                    <div>
                      <img
                        src={profileData.segments[1].metadata.imageUrl}
                        alt=""
                        className="character"
                      />
                    </div>
                    <div>
                      <ul>
                        <li>
                          <h3 className="sub-heading">Selected Legend</h3>
                          <p>{profileData.metadata.activeLegendName}</p>
                        </li>

                        {profileData.segments[0].stats.season2Wins ? (
                          <li>
                            <h3 className="sub-heading">Season 2 Wins</h3>
                            <p>
                              {
                                profileData.segments[0].stats.season2Wins
                                  .displayValue
                              }
                            </p>
                            <span>
                              (
                              {
                                profileData.segments[0].stats.season2Wins
                                  .percentile
                              }
                              %)
                            </span>
                          </li>
                        ) : (
                          <li>
                            <h3 className="sub-heading">Season 2 Wins</h3>
                            <p>N/A</p>
                          </li>
                        )}

                        {profileData.segments[0].stats.level ? (
                          <li>
                            <h3 className="sub-heading">Apex Level</h3>
                            <p>
                              {profileData.segments[0].stats.level.displayValue}
                            </p>
                            <span>
                              ({profileData.segments[0].stats.level.percentile}
                              %)
                            </span>
                          </li>
                        ) : (
                          <li>
                            <h3 className="sub-heading">Apex Level</h3>
                            <p>N/A</p>
                          </li>
                        )}

                        {profileData.segments[0].stats.level ? (
                          <li>
                            <h3 className="sub-heading">Lifetime Kills</h3>
                            <p>
                              {profileData.segments[0].stats.kills.displayValue}
                            </p>
                            <span>
                              ({profileData.segments[0].stats.kills.percentile}
                              %)
                            </span>
                          </li>
                        ) : (
                          <li>
                            <h3 className="sub-heading">Lifetime Kills</h3>
                            <p>N/A</p>
                          </li>
                        )}

                        {profileData.segments[0].stats.level ? (
                          <li>
                            <h3 className="sub-heading">Damage Done</h3>
                            <p>
                              {
                                profileData.segments[0].stats.damage
                                  .displayValue
                              }
                            </p>
                            <span>
                              ({profileData.segments[0].stats.damage.percentile}
                              %)
                            </span>
                          </li>
                        ) : (
                          <li>
                            <h3 className="sub-heading">Damage Done</h3>
                            <p>N/A</p>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Profile;
