import "./Home.scss";
import selfie from "../../lib/images/selfie.jpg";

import { Wrapper, Motion } from "../../lib/wrapper";

const Home = () => {
  const Cards = () => {
    const Items = [
      { name: "Intern", left: -100, top: 200 },
      { name: "Student", left: 310, top: 0 },
      { name: "Developer", left: 280, top: 300 },
    ];

    return Items.map((item, i) => {
      return (
        <div
          style={{
            left: `${item.left}px`,
            top: `${item.top}px`,
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          {item.name}
        </div>
      );
    });
  };

  return (
    <>
      <div className="container">
        <div className="hello-card">
          <p>Hi, I am</p>
          <h1>Petter Blåsmo 👋</h1>
        </div>
        <Cards />
        <img src={selfie} alt="selfie" />
      </div>
    </>
  );
};

export default Wrapper(Motion(Home), "home");
