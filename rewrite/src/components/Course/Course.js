import React from "react";

const Course = props => {
  return (
    <div className="course">
      <h4 classNme="course__title">{ props.title }</h4>
      <p className="course__desc">{ props.desc }</p>
    </div>
  );
}

export default Course;