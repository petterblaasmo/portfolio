import "./Contact.scss";
import React, { useState, useRef } from "react";
import { Wrapper } from "../../lib/wrapper";
import Slider from "@mui/material/Slider";
import { API_URL } from "../../config";
import axios from "axios";

//import { motion } from "framer-motion";
//import { AlertBox } from "../../components";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [projectMessage, setProjectMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [budget, setBudget] = useState(0);
  const [time, setTime] = useState(0);

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const projectMessageRef = useRef();

  const handleSlider = (e, value) => setBudget(value);
  const handleSlider2 = (e, value) => setTime(value);

  const valuetext = (value) => {
    return `$${value}+`;
  };

  const changeRef = (ref, color) => (ref.current.style.outlineColor = color);

  const handleSubmit = async () => {
    const errorRef = (ref) => changeRef(ref, "red");

    if (
      !name.length ||
      !email.length ||
      !message.length ||
      (checkbox && !projectMessage.length)
    ) {
      if (!name.length) errorRef(nameRef);
      if (!email.length) errorRef(emailRef);
      if (!message.length) errorRef(messageRef);
      if (checkbox && !projectMessage.length) errorRef(projectMessageRef);
      return;
    }

    const body = {
      name: name,
      email: email,
      message: message,
      hire: checkbox,
      projectMessage: projectMessage,
      budget: budget,
      duration: time,
    };

    const res = await axios.post(API_URL + "/contact", { body });
    console.log(res);
    //const contact =
    //const response = contact.data;

    setName("");
    setEmail("");
    setMessage("");
    setProjectMessage("");
    setCheckbox(false);
    setBudget(0);
    setTime(0);
  };

  const days = [
    { day: "Sunday", available: false },
    { day: "Monday", available: true },
    { day: "Tuesday", available: true },
    { day: "Wednesday", available: true },
    { day: "Thursday", available: true },
    { day: "Friday", available: true },
    { day: "Saturday", available: false },
  ];

  const DayMessage = () => {
    const current = days[new Date().getDay()];

    const NextAvailable = () => (
      <h2>
        I will be available on <b>Monday</b>
      </h2>
    );

    return (
      <>
        <h1>
          It's <b>{current.day}</b> and I'm{" "}
          <b style={{ color: current.available ? "#9bf74f" : "#f74f4f" }}>
            {current.available ? "available" : "not available"}
          </b>
          .
        </h1>
        {!current.available ? <NextAvailable /> : null}
      </>
    );
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-flex-two">
          <h1 className="section-header">
            <b>05.</b>
            Contact
            <hr />
          </h1>
          <p className="normal-email">
            Maybe you prefer sending me an ordinary email instead? Do so{" "}
            <a
              href="mailto:petterblaasmo@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              here
            </a>
            !
          </p>
          <div className="contact-flex">
            <div className="contact-text">
              <p>
                There are multiple reasons you would want to use the contact
                form; maybe you would like to collaborate with me on a project
                or hire me to help you develop your product. Do not hesitate to
                message me with any of your inquiries.
              </p>
              <DayMessage />
            </div>
            <form>
              <ul>
                <div className="left">
                  <li>
                    <label>Name</label>
                    <input
                      ref={nameRef}
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Your name"
                      onFocus={() => changeRef(nameRef, "#7358d9")}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </li>
                  <li>
                    <label>Email</label>
                    <input
                      ref={emailRef}
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Your email"
                      onFocus={() => changeRef(emailRef, "#7358d9")}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </li>
                  <li>
                    <label>Message</label>
                    <textarea
                      ref={messageRef}
                      placeholder="General message"
                      value={message}
                      onFocus={() => changeRef(messageRef, "#7358d9")}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </li>
                </div>
                <div className={`right${checkbox ? " checked" : " unchecked"}`}>
                  <li>
                    <label>Project message</label>
                    <textarea
                      ref={projectMessageRef}
                      value={projectMessage}
                      onFocus={() => changeRef(projectMessageRef, "#7358d9")}
                      placeholder="Project information"
                      onChange={(e) => setProjectMessage(e.target.value)}
                    />
                  </li>
                  <li>
                    <label>Budget: ${budget}+</label>
                    <div className="slider">
                      <Slider
                        aria-label="Budget"
                        value={budget}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={100}
                        min={0}
                        max={5000}
                        onChange={handleSlider}
                      />
                    </div>
                  </li>
                  <li>
                    <label>
                      Duration:{" "}
                      {time === 0
                        ? "As fast as possible"
                        : `${time} month${time === 1 ? "" : "s"}+`}
                    </label>
                    <div className="slider">
                      <Slider
                        aria-label="Duration"
                        value={time}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={1}
                        min={0}
                        max={6}
                        onChange={handleSlider2}
                      />
                    </div>
                  </li>
                </div>
              </ul>
            </form>
          </div>
        </div>
        <div className="checkbox-li" onClick={(e) => setCheckbox(!checkbox)}>
          <div className="checkbox">
            <div className={`check${checkbox ? " checked" : ""}`}></div>
          </div>
          <p>Looking to hire me</p>
        </div>
        <button onClick={handleSubmit}>Contact me</button>
      </div>
    </>
  );
};

export default Wrapper(Contact, "contact");
