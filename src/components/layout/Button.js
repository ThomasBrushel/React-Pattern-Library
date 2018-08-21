import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  render() {
    const {  
      href, 
      buttonTarget, 
      text, 
      buttonBrand
    } = this.props;

    return (
      <div>
        <a href={ href }
           target={ buttonTarget }>
          <button className={`btn ${buttonBrand}`}>{text}</button>
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  href: "#",
  buttonTarget: "_blank",
  text: "Button Text",
};

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
