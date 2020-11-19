import React from "react";
import "./card.css";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";
import instagram from "../../images/instagram.png";
import fabio from "../../images/fabio.jpg";
import fernando from "../../images/fernando.jpg";
import raul from "../../images/Raul.jpg";
import luisa from "../../images/luisa.jpg";

function Cards() {
  return (
    <div id="container-geral">
      <div className="TeamContainer">
        <div className="TeamCard">
          <img className="TeamImage" src={fabio} alt="foto"></img>
          <strong className="TeamName">Fabio Frasson</strong>
          <div class="TeamSocialMedia">
            <img className="TeamIcon" src={facebook} alt="facebook" />
            <img className="TeamIcon" src={twitter} alt="twitter" />
            <img className="TeamIcon" src={instagram} alt="instagram" />
            <img className="TeamIcon" src={linkedin} alt="linkedin" />
          </div>
        </div>

        <div className="TeamCard">
          <img className="TeamImage" src={raul} alt="foto"></img>
          <strong className="TeamName">Raul Rios</strong>
          <div class="TeamSocialMedia">
            <img className="TeamIcon" src={facebook} alt="facebook" />
            <img className="TeamIcon" src={twitter} alt="twitter" />
            <img className="TeamIcon" src={instagram} alt="instagram" />
            <img className="TeamIcon" src={linkedin} alt="linkedin" />
          </div>
        </div>

        <div className="TeamCard">
          <img className="TeamImage" src={fernando} alt="foto"></img>
          <strong className="TeamName">Fernando Fritzen</strong>
          <div class="TeamSocialMedia">
            <img className="TeamIcon" src={facebook} alt="facebook" />
            <img className="TeamIcon" src={twitter} alt="twitter" />
            <img className="TeamIcon" src={instagram} alt="instagram" />
            <img className="TeamIcon" src={linkedin} alt="linkedin" />
          </div>
        </div>

        <div className="TeamCard">
          <img className="TeamImage" src={luisa} alt="foto"></img>
          <strong className="TeamName">Luisa Ghellere</strong>
          <div class="TeamSocialMedia">
            <img className="TeamIcon" src={facebook} alt="facebook" />
            <img className="TeamIcon" src={twitter} alt="twitter" />
            <img className="TeamIcon" src={instagram} alt="instagram" />
            <img className="TeamIcon" src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
