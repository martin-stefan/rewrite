import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import '../../sass/main.scss';



 const Scroll = () => {

  const {x, y} = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrolled((y/height) * 100)
  }, [y]);

  return (
    <div className="scroll__container">
      <div className="scroll__bar" style={{ width: `${scrolled}%` }}></div>
    </div>
  );

}

export default Scroll