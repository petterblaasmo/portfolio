import "./Skills.scss";
import { useRef } from "react";
import { Wrapper } from "../../lib/wrapper";
import { Skills } from "../../config";
import { motion } from "framer-motion";

const SkillPage = () => {
  const RenderBar = ({ type, progress }) => {
    const ref = useRef();
    return (
      <div ref={ref} className="progress-bar">
        <h1>{type}</h1>
        <div className="progress">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: progress + "%" }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
            className="actual"
          ></motion.div>
        </div>
      </div>
    );
  };

  return (
    <div className="skill-page">
      <div className="text">
        <h1 className="section-header">
          <b>04.</b>
          Skills
          <hr />
        </h1>
        <p>
          Since I began my web developer journey{" "}
          {Number(new Date().getFullYear()) - 2018} years ago, I've done quite
          variable work for a lot of different clients while also collaborating
          with talented developers.
        </p>
        <p>
          I mostly create responsive websites for startup businesses to help
          them get out on the market, but you will also see me doing other types
          of projects from time to time.
        </p>
        <p>
          I am against CMS solutions and prefer to do my projects in code where
          I use various libraries and frameworks to accomplish the best results.
        </p>
      </div>
      <div className="skills">
        <div className="category">
          <h1>Category</h1>
          {Skills.category.map((skill) => {
            return <RenderBar type={skill.type} progress={skill.progress} />;
          })}
        </div>
        <div className="category">
          <h1>Tools</h1>
          {Skills.individual.map((skill) => {
            return <RenderBar type={skill.type} progress={skill.progress} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Wrapper(SkillPage, "skills");
