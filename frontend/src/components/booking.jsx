import React from "react";
import BtnHeader from "./btnHeader";

const booking = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">Start Booking Now</h2>
            </div>
            <form action="#" className="form">
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email Address"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email Address
                </label>
              </div>
              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button" />
                    Small tour group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button" />
                    Large tour group
                  </label>
                </div>
                <div className="form__group u-margin-top-medium u-margin-bottom-medium">
                  <button className="btn btn--green">Next step &rarr;</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default booking;
