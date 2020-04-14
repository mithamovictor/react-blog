import React from 'react';
import logo from '../../logo.svg';

const Header = (props) => {
  return (
    <header>
      <div className="grid-x">
        <div className="cell small-12 large-shrink">
          <div className="grid-x">
            <div className="cell auto">
              <div className="logo">
                <img src={logo} alt="logo" width="100%" height="auto" />
              </div>
            </div>
            <div className="cell shrink">
              <div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
                <button className="menu-icon" type="button" data-toggle="responsive-menu"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="cell small-12 large-auto">
          <nav className="top-bar" id="responsive-menu">
            <div className="top-bar-right">
              <ul className="menu">
                <li><a href="#0">Home</a></li>
                <li><a href="#0">About</a></li>
                <li><a href="#0">Blog</a></li>
                <li><a href="#0">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
