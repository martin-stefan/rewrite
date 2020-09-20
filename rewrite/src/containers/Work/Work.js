// this will contain my work experience so far

// page that will contain all of my projects

import React from 'react';
import Banner from '../../components/Banner/Banner';

const Work = (props) => {
  return (
    <div className="work">
      <h1>Work Experience</h1>
      <div  className="work__list">
        <Banner 
          title="Programming Instructor"
          company="Juni Learning"
          time="June 2020 - Present"
          desc="I did all of this stuff"
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
  );
}

export default Work;
