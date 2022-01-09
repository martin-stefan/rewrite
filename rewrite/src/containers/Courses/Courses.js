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
      desc: "jddddddddddddddddddddddddddddddddddddddddddddd"
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