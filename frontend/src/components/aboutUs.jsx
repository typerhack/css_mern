import React from "react";
import BtnHeader from "./btnHeader";

import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";

function aboutUs() {
  return (
    <section className="section-about">
      <div className="u-center-text">
        <h2 className="heading-secondary u-margin-bottom-big">
          Exciting tours for adventurous people.
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You are going to fall in love with nature.
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            porro voluptatum quas! Quasi atque incidunt ad doloremque officia?
            Tempore minima itaque sed perspiciatis eveniet ullam reiciendis
            autem dolorem iure aut.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventure like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod
            numquam commodi recusandae necessitatibus deleniti rerum, ipsam sint
            eaque tempora, iusto harum quos tempore tenetur iste sed debitis
            mollitia nesciunt!
          </p>
          <BtnHeader btnText="Load more &rarr;" btnType="text" />
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src={nat1} alt="photo1" className="composition__photo composition__photo--p1" />
            <img src={nat2} alt="photo2" className="composition__photo composition__photo--p2" />
            <img src={nat3} alt="photo3" className="composition__photo composition__photo--p3" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default aboutUs;
