// this will contain my work experience so far

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Aux from '../../Auxilliary';

const Work = (props) => {
  return (
    <Aux>

      <h1 className="pageTitle">Work Experience</h1>

      <div className="work">
        <div  className="work__list">
          <Banner 
            title="Programming Instructor"
            company="Juni Learning"
            time="June 2020 - Present"
            desc="Currently I am working with Juni Learning as a programming instructor. The two courses
            that I teach are Python Level 1 and JavaScript Level 1. "
            img=''
          />
          <Banner 
            title="Stock Worker"
            company="Hayward's Ice Cream Shop"
            time="June 2019 - May 2020"
            desc="I did all of this stuff"
            img=''
          />
          <Banner 
            title="Birthday Host"
            company="Launch Trampoline Park"
            time="June 2017 - July 2019"
            desc="I did all of this stuff"
            img=''
          />

        </div>
      </div>
    </Aux>
  );
}

export default Work;
