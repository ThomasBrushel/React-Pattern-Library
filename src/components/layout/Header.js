import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {

  const { 
    logo,
    navBrand 
  } = props;

  return (
    <div>
      <nav className={`nav ${navBrand}`}>
        <div className="container">
          <div className="col-4 center">
            <a href="/">{ logo }</a>
          </div>
          <div className="col-8 align-end">
            <ul>
              <li><a href="/">Home</a></li>
              <li>
                <Link to="/components">Components</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  logo: "Place Logo Here",
  navBrand: "nav-grey"
};

Header.propTypes = {
  logo: PropTypes.string.isRequired
};

export default Header;
