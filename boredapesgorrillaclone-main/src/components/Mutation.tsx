import React from "react";
import mut1 from "../assets/mut1.png";
import mut2 from "../assets/mut2.png";
import mut3 from "../assets/mut3.png";

function Mutation() {
  return (
    <div className="commoncnttwo">
      <div className="mutation">
        <img src={mut1} className="mutimg" />
        <div className="plusico monb1">+</div>
        <img src={mut2} className="mutimg" />
        <div className="plusico monb1">=</div>

        <img src={mut3} className="mutimg" />
      </div>

      <div className="community">
        <div className="txt">
          <div className="header">COMMUNITY TOOLS</div>
          <div className="txtsm">
            Here are some helpful tools created by the Bored Kong Yacht Club
            community. Please note that these are unofficial in nature. Every
            assignment of an ape's overall value or rarity is inherently
            subjective.
          </div>
        </div>

        <div className="btns">
          <div className="grndrkbtn monb1">NFTEXP.IO</div>
          <div className="grndrkbtn monb1">RARITY.TOOLS</div>
        </div>
      </div>
    </div>
  );
}

export default Mutation;
