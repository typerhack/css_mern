import React from "react";
import BtnHeader from "./btnHeader";

import nat8 from "../img/nat-8.jpg";
import nat9 from "../img/nat-9.jpg";

import vidmp4 from "../vid/video.mp4";
import vidwebm from "../vid/video.webm";

const stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={vidmp4} type="video/mp4" />
          <source src={vidwebm} type="video/webm" />
          Your browser is not supported.
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__img" src={nat8} alt="Person on a tour" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family.
            </h3>
            <p className=" u-text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              tenetur, facilis sunt animi, ea accusamus fuga et similique iste
              repudiandae fugit veniam possimus quod, quo quis quibusdam
              pariatur consequuntur totam!Repellat tenetur, repudiandae fugit
              veniam possimus quod.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img className="story__img" src={nat9} alt="Person on a tour" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now.
            </h3>
            <p className=" u-text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              tenetur, facilis sunt animi, ea accusamus fuga et similique iste
              repudiandae fugit veniam possimus quod, quo quis quibusdam
              pariatur consequuntur totam!Repellat tenetur, repudiandae fugit
              veniam possimus quod.
            </p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-bottom-huge">
        <BtnHeader btnText="Read all stories &rarr;" btnType="text" />
      </div>
    </section>
  );
};

export default stories;
