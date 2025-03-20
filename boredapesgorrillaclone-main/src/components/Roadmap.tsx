import React from "react";
import imgsd1 from "../assets/shirt.png";

function Roadmap() {
  return (
    <div className="roadmap">
      <div className="header">ROADMAP ACTIVATIONS</div>
      <div className="toptxt">
        We're in this for long haul.
        <br /> <br /> we're set up some goalposts for ourselves.
        <br />
        once we hit a target sell through percentage, we will begin to work on
        realizing the stated goal.
      </div>
      <div className="roadmapcnt">
        <div className="txtcnts">
          <div className="cnt">
            <p className="txt mom monbi1 gr">10%</p>
            <p className="txt">We Pay back to our mom</p>
          </div>
          <div className="cnt">
            <p className="txt monbi1 gr">20%</p>
            <p className="txt">
              BKYC get own YouTube music Channel, Community votes the music
              genre.
            </p>
          </div>
          <div className="cnt">
            <p className="txt monbi1 gr">50%</p>
            <p className="txt">
              Rarity Ranking Bored Kong to see Rere unique Evolved Kong
            </p>
          </div>

          <div className="cnt">
            <p className="txt monbi1 gr">60%</p>
            <p className="txt">Do Giveaway of Golden Kong for Holder</p>
          </div>

          <div className="cnt">
            <p className="txt monbi1 gr">80%</p>
            <p className="txt">
              Give 1/1 Mutant gift's to community Leaders and Supporters
            </p>
          </div>

          <div className="cnt">
            <p className="txt monbi1 gr">100%</p>
            <p className="txt">
              The Mutant Kong (NFT breeding) Kong will eat Mutant Bananas get
              evolve in Mutant
            </p>
          </div>
        </div>

        <img src={imgsd1} className="imgsd1" />
      </div>
    </div>
  );
}

export default Roadmap;
