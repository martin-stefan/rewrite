import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import images from '../../images/images';


const Details = props => {


  let [curImg, setCurImg] = useState(0);
  let { projectTitle } = useParams();

  const handleImgChange = (dir) => {
    const imgLen = images[projectTitle].length;
    if (curImg + dir > imgLen -1) {
      setCurImg(0);
    } else if (curImg + dir < 0) {
      setCurImg(imgLen - 1);
    } else {
      setCurImg(curImg + dir);
    }
  }
  
  return (
    <div>
      <Link to={"/projects"} className='link'>return</Link>
      {props.project}

      <img src={images[projectTitle][curImg]} alt="Project image" className='previewImg'/>
      {/* {
        
        images[projectTitle].map(el => {
          return <img src={el} alt="Project image" className='previewImg'/>
        })
      } */}

      <button className="imageScroll" onClick={() => handleImgChange(-1)}>Previous Image</button>
      <button className="imageScroll" onClick={() => handleImgChange(1)}>Next Image</button>

      {/* <Link to={{path: "/projects", state:{title: "list"}}} className='link'>Previous Project</Link>
      <Link to={{path: "/projects", state:{title: "list"}}} className='link'>Next Project</Link> */}
    </div>
  )
}

export default Details;