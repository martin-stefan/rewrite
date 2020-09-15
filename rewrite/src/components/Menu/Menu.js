import React from 'react';


export const Menu = () => {
  return (
    <div className="menu">
      
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/> 
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon"></span>
        </label>
        <div class="navigation__background"></div>

        <nav class="navigation__nav">
          <ul class="navigation__list">

            <li class="navigation__item"><a href="/" class="navigation__link"><span>01</span>Home</a></li>
            <li class="navigation__item"><a href="/projects" class="navigation__link"><span>02</span>Projects</a></li>
            <li class="navigation__item"><a href="/work" class="navigation__link"><span>03</span>Work</a></li>


          </ul>
        </nav>
      </div>
    </div>

  );
}

export default Menu;