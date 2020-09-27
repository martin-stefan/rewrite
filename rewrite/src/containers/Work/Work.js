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
            title="Computer Science Instructor"
            company="Juni Learning"
            time="June 2020 - Present"
            desc="I teach two different courses, JavaScript Level 1 and Python Level 1. "
            img=''
          />
          <Banner 
            title="Stock Worker"
            company="Hayward's Ice Cream Shop"
            time="June 2019 - May 2020"
            desc="Consisted of completing food orders and managing an adequate amount of supplies 
              throughout the building."
            img=''
          />
          <Banner 
            title="Birthday Party Host"
            company="Launch Trampoline Park"
            time="June 2017 - July 2019"
            desc="Directed birthday party events that consisted of ~10-20 attendees and ensured
              a worry free and amazing experience for the children and their parents."
            img=''
          />

        </div>
      </div>
    </Aux>
  );
}

export default Work;
