import React from "react";
import group from "../assets/Group.png";
import a1 from "../assets/zip/a1.png";
import a2 from "../assets/zip/a2.png";
import b1 from "../assets/zip/b1.png";
import b2 from "../assets/zip/b2.png";
import c1 from "../assets/zip/c1.png";
import c2 from "../assets/zip/c2.png";
import d1 from "../assets/zip/d1.png";
import d2 from "../assets/zip/d2.png";
import e1 from "../assets/zip/e1.png";
import e2 from "../assets/zip/e2.png";

import Carousel from "react-grid-carousel";

function About() {
  return (
    <div className="about">
      <div className="area1 arealr">
        <div className="txt">
          <div className="header">WELCOME TO THE BORED KONG YACHT CLUB</div>
          <div className="paratxt">
            BKYC is collection of 10,000 Bored Kong NFTs unique Collectibles
            living on the Ethereum blockchain. Your Bored Kong doubles as
            benefits as your Yacht Club membership card, and grants access to
            members-only benefits, the first of which is access to THE MUTANT, a
            collabration graffiti board. Future areas and perks can be unlock by
            the community through roadmap activation.
          </div>
        </div>
        <img src={group} className="group" />
      </div>

      <div className="grnbox">
        <div className="greencnt">
          <div className="buy monbi1">BUY AN KONG</div>
          <div className="txtgr">
            The initial sale has sold out. To get your Bored Kong, check out the
            collection on OpenSea.
          </div>
          <a href="">
            <div className="darkbtn monb1">
              BUY AN APE ON <br /> OPENSEA
            </div>
          </a>
        </div>
      </div>

      <div className="imgcnt">
        <div className="imgarealine">
          <div className="group">
            <img src={e1} className="aa a" />
            <img src={e2} className="bb a" />
          </div>
          <div className="group">
            <img src={a1} className="aa a" />
            <img src={a2} className="bb a" />
          </div>
        </div>
        <div className="imgarealine">
          <div className="group">
            <img src={b1} className="aa a" />
            <img src={b2} className="bb a" />
          </div>
          <div className="group">
            <img src={c1} className="aa a" />
            <img src={c2} className="bb a" />
          </div>
        </div>
      </div>

      <div className="area2 arealr">
        <div className="imgs">
          <Carousel cols={2} rows={1} gap={15} loop autoplay={1800}>
            <Carousel.Item>
              <img
                src={a1}
                className="aa a"
                width="100%"
                border-radius="3rem"
                alt="img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={a2}
                className="bb a"
                width="100%"
                border-radius="3rem"
                alt="img"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={b1}
                className="aa a"
                width="100%"
                border-radius="3rem"
                alt="img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={b2}
                className="bb a"
                width="100%"
                border-radius="3rem"
                alt="img"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={c1}
                className="aa a"
                width="100%"
                border-radius="3rem"
                alt="img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={c2}
                className="bb a"
                width="100%"
                border-radius="3rem"
                alt="img"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={d1}
                className="aa a"
                width="100%"
                border-radius="3rem"
                alt="img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={d2}
                className="bb a"
                width="100%"
                border-radius="3rem"
                alt="img"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={e1}
                className="aa a"
                width="100%"
                border-radius="3rem"
                alt="img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={e2}
                className="bb a"
                width="100%"
                border-radius="3rem"
                alt="img"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        {/* <img src={d1} className="aa a" />
          <img src={d2} className="bb a" /> */}

        <div className="txt">
          <div className="header">THE SPECS</div>

          <div className="paratxt">
            Each Bored Kong is Evolved from Bored Ape because When Ethereum
            blockchain get Merge Bored Ape get stronger and valuable Then Ape
            Evolved in Kong. it's Rule of universe when get some change in
            Nature they will evolve.
            <br className="br" />
            To access members-only ares such as THE MUTANT, Kongholder will need
            to be signed into their Metamask Wallet
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
