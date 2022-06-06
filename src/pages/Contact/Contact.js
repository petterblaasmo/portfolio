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
      !projectMessage.length
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

    await axios.post(API_URL + "/contact", { body });
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

  return (
    <>
      <div className="contact-container">
        <h1 className="section-header">
          <b>05.</b>
          Contact
          <hr />
        </h1>
        <div className="contact-flex">
          <form>
            <ul>
              <div className="left">
                <li>
                  <label>Name</label>
                  <input
                    ref={nameRef}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    onFocus={() => changeRef(nameRef, "#7358d9")}
                    onBlur={(e) => setName(e.target.value)}
                  />
                </li>
                <li>
                  <label>Email</label>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="Your email"
                    onFocus={() => changeRef(emailRef, "#7358d9")}
                    onBlur={(e) => setEmail(e.target.value)}
                  />
                </li>
                <li>
                  <label>Message</label>
                  <textarea
                    ref={messageRef}
                    placeholder="General message"
                    onFocus={() => changeRef(messageRef, "#7358d9")}
                    onBlur={(e) => setMessage(e.target.value)}
                  />
                </li>
                <li
                  className="checkbox-li"
                  onClick={(e) => setCheckbox(!checkbox)}
                >
                  <div className="checkbox">
                    <div className={`check${checkbox ? " checked" : ""}`}></div>
                  </div>
                  <p>Looking to hire me</p>
                </li>
              </div>
              <div
                className="right"
                style={{ display: checkbox ? "block" : "none" }}
              >
                <li>
                  <label>Project message</label>
                  <textarea
                    ref={projectMessageRef}
                    onFocus={() => changeRef(projectMessageRef, "#7358d9")}
                    placeholder="Project information"
                    onBlur={(e) => setProjectMessage(e.target.value)}
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
        <button onClick={handleSubmit}>Contact me</button>
      </div>
    </>
  );
};

export default Wrapper(Contact, "contact");
