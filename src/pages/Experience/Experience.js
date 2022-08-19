import "./Experience.scss";
import { Wrapper } from "../../lib/wrapper";
import { Work, School } from "../../config";
import { useState } from "react";
import { List } from "../../lib/functions";

const Experience = () => {
  const [active, setActive] = useState(0);
  const ShowList = [...Work, ...School];
  const job = ShowList[active];
  console.log(ShowList);

  return (
    <div className="work-container">
      <h1 className="section-header">
        <b>02.</b>
        Experience
        <hr />
      </h1>
      <div className="work-flex">
        <ul className="selector">
          <p className="work-header">Work</p>
          {Work.map((work, i) => {
            return (
              <li
                key={i}
                onClick={() => setActive(i)}
                className={i === active ? "active" : ""}
              >
                {work.name}
              </li>
            );
          })}
          <p className="school-header">School</p>
          {School.map((school, i) => {
            return (
              <li
                key={i + Work.length}
                onClick={() => setActive(i + Work.length)}
                className={i + Work.length === active ? "active" : ""}
              >
                {school.side || school.name}
              </li>
            );
          })}
        </ul>
        <div className="job-info">
          <h1>
            {job.category}{" "}
            <b>
              @{" "}
              <a href={job.link} target="_blank" rel="noreferrer">
                {job.name}
              </a>
            </b>
          </h1>
          <h2>
            {job.from} - {job.to}
          </h2>
          <List array={job.points} />
        </div>
      </div>
    </div>
  );
};

export default Wrapper(Experience, "work");
