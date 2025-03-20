import React from "react";
import img1 from "../assets/team1.png";
import img2 from "../assets/team2.png";
import img3 from "../assets/team3.png";

function Team() {
  return (
    <div className="team">
      <div className="header">THE TEAM</div>
      <div className="teamimgcnt">
        <div className="teamcnt">
          {" "}
          <img src={img1} className="teamimg" />
          <div className="header gr">KingKong</div>
        </div>
        <div className="teamcnt">
          {" "}
          <img src={img2} className="teamimg" />
          <div className="header">SniperKong</div>
        </div>
        <div className="teamcnt">
          {" "}
          <img src={img3} className="teamimg" />
          <div className="header gr">YoisSilver</div>
        </div>
      </div>
      <div className="contractaddress">
        <p className="monb1"> VERIFIED SMART CONTRACT ADDRESS: </p>

        <p className="gr und">0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</p>
      </div>
    </div>
  );
}

export default Team;
