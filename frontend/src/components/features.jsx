import "../styles/font/icon-font.css";
import React from "react";

const features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world" />
            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
            <p className="featurebox__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, autem rem suscipit.</p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass" />
            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
            <p className="featurebox__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, autem rem suscipit.</p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map" />
            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
            <p className="featurebox__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, autem rem suscipit.</p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart" />
            <h3 className="heading-tertiary u-margin-bottom-small">Live a healtier life</h3>
            <p className="featurebox__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, autem rem suscipit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default features;
