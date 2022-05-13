import "./Home.scss";
import selfie from "../../lib/images/selfie.jpg";

const Home = () => {
  return (
    <section id="home">
      <img src={selfie} alt="selfie" />
    </section>
  );
};

export default Home;
