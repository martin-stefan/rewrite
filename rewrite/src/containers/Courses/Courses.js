import React, { useState } from "react";
import Course from "../../components/Course/Course";


const Courses = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  

  const data = [
    {
      title: "Managing IT Resources",
      desc: "Hands-on classroom experience focusing on modern web design topics such as API’s & \
      authentication/authorization using tools including AngularJS, React, Express, and MongoDB. ",
      time: "Fall 2021"
    }, 
    {
      title: "Intro to Algo",
      desc: "stuff",
      time: "Fall 2021"
    },
    {
      title: "Data Structures",
      desc: "stuff",
      time: "Spring 2020"
    },
    {
      title: "Foundations of Computer Science",
      desc: "stuff",
      time: "Fall 2020"
    },

    {
      title: "Web Science Systems Develeopment",
      desc: "stuff",
      time: "Spring 2021"
    },
    {
      title: "Web Systems Development",
      desc: "stuff",
      time: "Fall 2020"
    },
    {
      title: "Computer Science 1",
      desc: "stuff",
      time: "Fall 2019"
    },

  ]
  return (
    <div className="courses">
      {
        data.map((el, i) => (
          <Course title={el.title} desc={el.desc} time={el.time} clickHandler={toggle} open={selected} item={i}/>
        ))
      }
    </div>
  );
}

export default Courses;