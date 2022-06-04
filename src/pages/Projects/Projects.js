import "./Projects.scss";
import React, { Component } from "react";
import { Wrapper } from "../../lib/wrapper";
import { projects } from "./project.js";
import { Icon } from "../../lib/icons";
import { motion } from "framer-motion";

const Projects = () => {
  const IconLink = ({ icon, link }) => (
    <a className={`exclude icon-link ${icon}`} href={link}>
      <Icon name={icon} />
    </a>
  );

  return (
    <>
      <ul className="projects-container">
        <h1 className="section-header">
          <b>03.</b>
          Projects
          <hr />
        </h1>
        <div className="projects-length">
          <h1>
            <b>{projects.length}</b> Noteworthy Projects
          </h1>
          <h1>
            <b>{projects.filter((project) => project.github).length}</b> Open
            Source
          </h1>
        </div>
        <div className="projects">
          {projects.map((project, i) => {
            return (
              <motion.li
                initial={{ opacity: 0 }}
                transition={{ delay: (i + 1) * 0.1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                key={project.project}
                className={project.margin ? "margin" : ""}
              >
                <a
                  className="exclude"
                  href={project.link}
                  target="_blank"
                  rel="norefferer"
                >
                  <div className="header">
                    {project.github ? (
                      <IconLink icon="Github" link={project.github} />
                    ) : null}
                    <IconLink icon="External" />
                  </div>
                  <h1 className="title">{project.project}</h1>
                  <p className="description">{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <p>{tag}</p>
                    ))}
                  </div>
                </a>
              </motion.li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default Wrapper(Projects, "projects");
