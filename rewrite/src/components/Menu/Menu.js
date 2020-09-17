import React from 'react';


export const Menu = () => {
  return (
    <div className="menu">
      
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/> 
        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon"></span>
        </label>
        <div className="navigation__background"></div>

        <nav className="navigation__nav">
          <ul className="navigation__list">

            <li className="navigation__item"><a href="/" className="navigation__link"><span>01</span>Home</a></li>
            <li className="navigation__item"><a href="/projects" className="navigation__link"><span>02</span>Projects</a></li>
            <li className="navigation__item"><a href="/work" className="navigation__link"><span>03</span>Work</a></li>


          </ul>
        </nav>
      </div>
    </div>

  );
}

export default Menu;