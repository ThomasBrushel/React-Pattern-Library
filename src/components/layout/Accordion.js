import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      shown: true,
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    const { 
      panelText, 
      text, 
      accordionBrand
    } = this.props;

    const hidden = {
      display: this.state.shown ? "none" : "block"
    }

    return (
      <div>
        <div className={accordionBrand} onClick={this.toggle.bind(this)}>
          <p>{ panelText }</p>
          <div className="accordion-toggle">+</div>
        </div>
        <div className="panel" style={ hidden }>
          <p>{ text }</p>
        </div>
      </div>
    )
  }
}

Accordion.defaultProps = {
  panelText: "Enter the panel header",
  text: "Accordion body text goes here...",
  accordionBrand: "accordion"
}

Accordion.propTypes = {
  panelText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}


export default Accordion;