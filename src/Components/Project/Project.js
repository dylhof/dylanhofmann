import React from 'react';

export const Project = ({ title, git, url, description, thumbnail}) => {
  return(
    <div>
      <h2>{title}</h2>
      <img src={thumbnail}/>
      <p>{description}</p>
      <p>gitHub link: <a href={git} target='blank'>{git}</a></p>
      <p>Live link: <a href={url} target='blank'>{url}</a></p>
    </div>
  )
};
