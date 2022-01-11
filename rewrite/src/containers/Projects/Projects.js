import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import { Link, useLocation } from 'react-router-dom'; 

const Projects = (props) => {

  const personal = [
    {
      title: "The Loop",
      company: "RPI",
      time: "August 2021 - December 2019",
      desc: "The Loop is an application designed to display all events happening around campus. \
            Through this project, my group memebers and I learned  about PHP, MySQL, \
                and development with a team.",
      images: []
    },

    {
      title: "Defazio's",
      company: "Defazio's/RPI",
      time: "August 2021 - December 2021",
      desc: "Worked as the lead developer for a team of 5 creating a mobile application for a \
                    pizzeria in Troy, NY to give customers the ability to view the menu, \
                    make a reservation, cater, and more.",
      images: []
    },

    {
      title: "Pizzi",
      company: "RPI",
      time: "August 2020 - December 2020",
      desc: "Co-led a team of five individuals to develop a social media application which focused on creating \
             a simplistic method of sharing and connecting with others through music.",
      images: []
    },

    {
      title: "Spects",
      company: "Personal",
      time: "June 2021 - Present",
      desc: "This is some info",
      images: []
    },
    {
      title: "Natours",
      company: "Course",
      time: "June 2020",
      desc: "Natours a small application meant to serve as a landing page for an imaginary \
                company which offers tours around the world. It introduced me to many new design \
                principles and tools that are availabe with CSS and SCSS.",
      images: []
    },
  
    {
      title: "Budgety",
      company: "Course",
      time: "July 2020",
      desc: "This project is a simple budget calculator. In building \
                this project, I learned more about modern JavaScript, utilizing classes and state management.",
      images: []
    },
  
    {
      title: "Forkify",
      company: "Course",
      time: "July 2020",
      desc: "Forkify is an application that utilizes an API to search for recipes of a given word \
                from many different websites and resources. This project emphasized \
                asynchronous JavaScript, API usage, and more state management",
      images: []
    },
  ]

  const projectClickHandler = project => {
    setShowProject(project)
  }

  const [ showProject, setShowProject ] = useState('list');
  let content = "";
  
  const location = useLocation()
  let title = location.state?.title;
  
  useEffect(() => {

    if (title) {
      setShowProject(title)
    }
  }, [title])
  console.log(title)



  if (showProject == "list") {
    content = 
      <section className="cardDisplay">
        <section className="cards">
          <h1 className="cards__title">Personal & School Projects</h1>
          <article className="cards__list">
            {
              personal.map((el, i) => {
                if (el.company != "Course") {
                  return <Card 
                    title={el.title}
                    company={el.company}
                    time={el.time}
                    desc={el.desc}
                  />

                }
            })
            }
          </article>
        </section>

        <section className="cards">
          <h1 className="cards__title">Online Course Projects</h1>
          <article className="cards__list">
            {
              personal.map((el, i) => {
                if (el.company == "Course") {
                  return <Card 
                    title={el.title}
                    company={el.company}
                    time={el.time}
                    desc={el.desc}
                  />

                }
              })
            }
          </article>
        </section>
      </section>
  } else {
    let target = null;
    for (let i = 0; i < personal.length; i++) {
      const element = personal[i];
      if (element.title == showProject) {
        target = element;
      }
    }
    content = <div>
                <button className="return" onClick={() => projectClickHandler("list")}>Return</button>
                <Card 
                  title={target.title}
                  company={target.company}
                  time={target.time}
                  desc={target.desc}
                />
              </div>

  
  }

  return (
    <div id="projects">
      { content }
    </div>
  );
}

export default Projects;
