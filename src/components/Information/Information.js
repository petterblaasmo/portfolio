import "./Information.scss";

import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../config";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      discord: false,
    };
  }

  async componentDidMount() {
    const fetchItems = async () => {
      const spotify = await axios.get(API_URL + "/spotify");
      const spotifyRes = spotify.data;
      const discord = await axios.get(API_URL + "/discord");
      const discordRes = discord.data;
      this.setState({ playing: spotifyRes, discord: discordRes });
    };

    await fetchItems();
    setInterval(async () => await fetchItems(), 60 * 1000);
  }

  render() {
    const { playing, discord } = this.state;
    const artist = playing?.artist?.split(",")[0];
    return (
      <div className="info">
        <a
          style={{ display: !playing.title ? "none" : null }}
          href={playing?.songUrl}
          className="spotify exclude"
        >
          <img src={playing?.albumImageUrl} alt="playing" />
          <div className="song">
            <h1>
              {playing.title?.length > 20
                ? playing?.title.slice(0, 15) + "..."
                : playing?.title}
              {playing?.isPlaying ? "" : <p className="paused">Paused</p>}
            </h1>
            <h2>
              {artist?.length > 20 ? artist.slice(0, 15) + "..." : artist}
            </h2>
          </div>
        </a>

        <a
          style={{ display: !discord ? "none" : null }}
          href="https://discord.com/users/216260135771701248"
          className="discord exclude"
        >
          <div className="image">
            <img src={discord.member?.displayAvatarURL} alt="discord" />
            <div
              className="status"
              style={{
                background:
                  discord.presence?.status === "online"
                    ? "#43b581"
                    : discord.presence?.status === "dnd"
                    ? "#f04747"
                    : discord.presence?.status === "idle"
                    ? "#faa61a"
                    : "grey",
              }}
            ></div>
          </div>
          <div className="user">
            <h1>{discord.member?.tag}</h1>
            <h2>
              {discord.presence?.activity[0] === "Nothing"
                ? "No status"
                : `${
                    discord.presence?.activity.type[0]
                  }${discord.presence?.activity.type.slice(1).toLowerCase()} ${
                    discord.presence?.activity.name
                  }`}
            </h2>
          </div>
        </a>
      </div>
    );
  }
}

export default Information;
