// page that will contain all of my projects

import React from 'react';
import Aux from '../../Auxilliary';
import Card from '../../components/Card/Card';

const Projects = (props) => {
  return (
    <Aux>
      <h1 className="pageTitle">Projects</h1>
      <p className="intro">This page is dedicated to showing some of the projects that I have done within the past year.
        Some of these projects have been for school assignments, others have been for courses that I have taken
        on Udemy, and some just for fun. Although none of these projects are completed/released, they 
        all helped me enrich my web development skills and knowledge. </p>




      <section className="cardDisplay">

        <section className="cards">

        
          <h1 className="cards__title">Personal & School Projects</h1>

          <article className="cards__list">
            <Card 
              title="The Loop"
              company="RPI"
              time="December 2019"
              desc="The Loop is an application designed to display all events happening around campus. 
                Through this project, my group memebers and I learned a great amount about PHP, MySQL, 
                and development with a team."
            />
            <Card 
              title="FiNd"
              company=" Hack RPI"
              time="November 2019"
              desc="In a 24 hour long hackathon, my group and I developed a simple application which would
              serve as a login system for shelters to keep track of missing persons during a natural disaster."
            />

            <Card 
              title="Bad UI"
              company="Personal"
              time="August 2020"
              desc="This a project that I am building for fun. The purpose of it is to experiment with 
                JavaScript and to create a website that tests the patience of its users. "
            />

            <Card 
              title="Anime Generator"
              company="Personal"
              time="Augst 2020"
              desc="This is a simple application that allows a user to find a random anime to watch."
            />
          </article>

        </section>

        <section className="cards">

          <h1  className="cards__title">Online Course Projects</h1>

          <article className="cards__list">
            <Card 
              title="Natours"
              company="Course"
              time="June 2020"
              desc="Natours a small application meant to serve as a landing page for an imaginary 
                company which offers tours around the world. It introduced me to many new design 
                principles and tools that are availabe with CSS and SCSS."
            />

            <Card 
              title="Budgety"
              company="Course"
              time="July 2020"
              desc="This project is a simple budget calculator. In building 
                this project, I learned more about modern JavaScript, utilizing classes and state management."
            />

            <Card 
              title="Forkify"
              company="Course"
              time="July 2020"
              desc="Forkify is an application that utilizes an API to search for recipes of a given word
                from many different websites and resources. This project emphasized
                asynchronous JavaScript, API usage, and more state management"
            />
          </article>
        </section>

      </section>
    </Aux>
  );
}

export default Projects;
