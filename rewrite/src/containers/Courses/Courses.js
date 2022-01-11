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
      authentication/authorization using tools including AngularJS, React, Express, and MongoDB. "
    }, 
    {
      title: "Intro to Algo",
      desc: "stuff"
    },
    {
      title: "Data Structures",
      desc: "stuff"
    },
    {
      title: "Computer Science 1",
      desc: "stuff"
    },

  ]
  return (
    <div className="courses">
      {
        data.map((el, i) => (
          <Course title={el.title} desc={el.desc} clickHandler={toggle} open={selected} item={i}/>
        ))
      }
    </div>
  );
}

export default Courses;