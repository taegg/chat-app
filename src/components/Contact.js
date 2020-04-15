import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends React.Component{
   
  
  constructor(props){
      super(props);
      this.state={
         online:false
      };

    } 

    
    render() {
      
      return(
          <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt={this.props.name} />
            <div>
              <div className="name">{this.props.name}</div>
              <div className="status" onClick={event=>{
                  const statusChanged = ! this.state.online;
                  this.setState({online: statusChanged});    
                }} >

                <div className={this.state.online ? "status-online" : "status-offline"} />
                <div className="status-text">
                  {this.state.online ? "online" : "offline"}
                </div>
              </div>
            </div>
          </div>
        );
      }
    }


Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Contact;
