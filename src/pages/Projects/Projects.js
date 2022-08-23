import "./Projects.scss";
import React from "react";
import { Wrapper } from "../../lib/wrapper";
import { projects } from "./project.js";
import { Icon, IconGitHub } from "../../lib/icons";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h1 className="section-header">
          <b>03.</b>
          Projects
          <hr />
        </h1>
        <ul className="projects">
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
                  rel="noreferrer"
                >
                  <img src="" />
                  <div className="card">
                    <div className="header">
                      <h1 className="title">{project.project}</h1>
                      <div className="icons">
                        <a
                          className="exclude"
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Icon />
                        </a>
                        {project.github ? (
                          <a
                            className="exclude"
                            href={project.github}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <IconGitHub />
                          </a>
                        ) : (
                          <p className="disabled">
                            <IconGitHub />
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="description">
                      <p>{project.description}</p>
                    </div>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Wrapper(Projects, "projects");
