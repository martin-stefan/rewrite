// page that will contain all of my projects

import React from 'react';
import Card from '../../components/Card/Card';

const Projects = (props) => {
  return (
    <div>
      <h1>Personal & School Projects</h1>
      <div className="list">
        <Card 
          title="The Loop"
          company="RPI"
          time="December 2019"
          desc="I did all of this stuff"
        />
        <Card 
          title="FiNd"
          company=" Hack RPI"
          time="November 2019"
          desc="I did all of this stuff"
        />

        <Card 
          title="Bad UI"
          company="Personal"
          time="August 2020"
          desc="I did all of this stuff"
        />

        <Card 
          title="Anime Generator"
          company="Personal"
          time="Augst 2020"
          desc="I did all of this stuff"
        />
      </div>

      <h1>Online Course Projects</h1>

      <div className="list">
        <Card 
          title="Natours"
          company="Course"
          time="June 2020"
          desc="I did all of this stuff"
        />

        <Card 
          title="Budgety"
          company="Course"
          time="July 2020"
          desc="I did all of this stuff"
        />

        <Card 
          title="Forkify"
          company="Course"
          time="July 2020"
          desc="I did all of this stuff"
        />
      </div>

    </div>
  );
}

export default Projects;
