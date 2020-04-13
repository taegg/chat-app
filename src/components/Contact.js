import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <div>
        <div className="name">{props.name}</div>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"} />
          <div className="status-text">
            {props.online ? "online" : "offline"}
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Contact;
