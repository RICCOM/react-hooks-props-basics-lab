import React from "react";

function About(props) {
  function Displaybio(props){
      if (!props.bio){
        return null;
      }else{
        return <p>{props.bio}</p>
      }
    }
  
  return (
    <div id="about">
      <h2>About Me</h2>
      <Displaybio bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <h3>Links</h3>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default About;
