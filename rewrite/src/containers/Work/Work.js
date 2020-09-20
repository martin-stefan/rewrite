// this will contain my work experience so far

// page that will contain all of my projects

import React from 'react';
import Card from '../../components/Card/Card';

const Work = (props) => {
  return (
    <div className="work">
      <h1>Work Experience</h1>
      <div  className="work__list">
        <Card 
          title="Programming Instructor"
          company="Juni Learning"
          time="June 2020 - Present"
          desc="I did all of this stuff"
          img=''
        />
        <Card 
          title="Stock Worker"
          company="Hayward's Ice Cream Shop"
          time="June 2019 - May 2020"
          desc="I did all of this stuff"
          img=''
        />
        <Card 
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
