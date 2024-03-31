import React from "react";
import PROJECTS from "../data/projects";

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {PROJECTS.map((PROJECT) => {
          return <Project key={PROJECT.id} project={PROJECT} />;
        })}
      </div>
    </div>
  );
};

const Project = (props) => {
   

    const {title, description, image , link } = props.project; // means     let title = props.project.title;
                                                                        // let description = props.project.description;
                                                                        // let image = props.project.image;
                                                                        // let link = props.project.link;
  return (
    <div className="card">
      <img src={image} alt="Project1 puic" style={{ width: "100%" }} />
      <h3 style={{ color: "grey", fontSize: 20 }}>{title}</h3>
      <p style={{ fontSize: 17, padding: 4 }}>
       {description}
      </p>
      <button onClick={() => {
       // window.location.href = link;
        window.open(link, '_blank');
      }} >Take A Look</button>
    </div>
  );
};

export default Projects;
