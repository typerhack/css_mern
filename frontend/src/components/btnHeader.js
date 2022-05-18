import React from "react";
import PropTypes from "prop-types";

function btnHeader(props) {
  return (
    <a href="#" className="btn btn--white btn--animated">
      {props.btnText}
    </a>
  );
}

btnHeader.propTypes = {
  btnText: PropTypes.string,
};

export default btnHeader;
