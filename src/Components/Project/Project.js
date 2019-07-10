import React from 'react';

export const Project = ({ title, git, url, description, thumbnail}) => {
  if(url.length === 0) {
    url = 'There is no live version of this app.'
  }
  return(
    <div className='project-div'>
      <h2>{title}</h2>
      <img src={thumbnail} alt={title}/>
      <p className='project-description-p'>{description}</p>
      <p>gitHub link: </p>
      <a href={git} target='blank'>{git}</a>
      <p>Live link: </p>
      <a href={url} target='blank'>{url}</a>
    </div>
  )
};
