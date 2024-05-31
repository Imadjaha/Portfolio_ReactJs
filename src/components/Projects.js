import React from "react";
import PROJECTS from "../data/projects";
import { useState, useEffect } from "react";
import "../index.css";

const Projects = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    ...new Set(PROJECTS.flatMap((PROJECT) => PROJECT.catategory)),
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((c) => c !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const filteredProjects =
    selectedCategories.length === 0
      ? PROJECTS
      : PROJECTS.filter((project) =>
          selectedCategories.every((category) =>
            project.catategory.includes(category)
          )
        );

  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={
              selectedCategories.includes(category)
                ? "selectedProjects"
                : "projects"
            }
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        {filteredProjects.map((PROJECT) => (
          <Project key={PROJECT.id} project={PROJECT} />
        ))}
      </div>
    </div>
  );
};

const Project = (props) => {
  const { title, description, image, link } = props.project;
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);
  }, []);

  return (
    <div className={`card ${isShown ? "show" : ""}`}>
      <img src={image} alt="Project1 pic" style={{ width: "100%" }} />
      <h3 style={{ color: "grey", fontSize: 20 }}>{title}</h3>
      <p style={{ fontSize: 17, padding: 4 }}>{description}</p>
      <button
        onClick={() => {
          window.open(link, "_blank");
        }}
      >
        Take A Look
      </button>
    </div>
  );
};

export default Projects;
