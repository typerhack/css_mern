import React from "react";
import PropTypes from "prop-types";

function btnHeader(props) {
  switch (props.btnType) {
    case "white":
      return (
        <a href="#" className="btn btn--white btn--animated">
          {props.btnText}
        </a>
      );
      break;
    case "green":
      return (
        <a href="#" className="btn btn--green">
          {props.btnText}
        </a>
      );
      break;
    case "text":
      return(
        <a href="#" className="btn-text">{props.btnText}</a>
      );
      break;

    default:
      return(<p> Button type is not specified</p>);
      break;
  }
}

btnHeader.propTypes = {
  btnText: PropTypes.string,
  btnType: PropTypes.string,
};

export default btnHeader;
