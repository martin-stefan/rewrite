import React from 'react'
import { Link, useParams } from 'react-router-dom';
import images from '../../images/images';


const Details = props => {

  let { projectTitle } = useParams()
  return (
    <div>
      <Link to={"/projects"} className='link'>return</Link>
      {props.project}

      {
        images[projectTitle].map(el => {
          return <img src={el} alt="Project image" className='previewImg'/>
        })
      }

      <Link to={{path: "/projects", state:{title: "list"}}} className='link'>Previous Project</Link>
      <Link to={{path: "/projects", state:{title: "list"}}} className='link'>Next Project</Link>
    </div>
  )
}

export default Details;