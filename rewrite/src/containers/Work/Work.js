import React from "react";

const Work = () => {

  const jobs = [
    {
      title: "Computer Science Instructor",
      company: "Juni Learning", 
      time: "June 2020 - Present",
      desc: "Teach courses in Python to learn the basics of programming as well as JavaScript to serve as an \
      introduction to web development including topics ranging from the box model to CRUD and SQL."
    },
    {
      title: "Stock Worker",
      company: "Haywards Ice Cream Shop", 
      time: "June 2019 - May 2020",
      desc: ""
    },
    {
      title: "Birthday Party Host",
      company: "Launch Trampoline Park", 
      time: "June 2017 - July 2019",
      desc: ""
    }
  ]
  return (
    <div className="work">
      {
        jobs.map((el, i) => (
          <div className="work__item">
            <p className="work__item--title">{el.title}</p>
            <p className="work__item--company">{el.company}</p>
            <p className="work__item--time">{el.time}</p>
            <p className="work__item--desc">{el.desc}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Work;