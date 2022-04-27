import { useState, useEffect } from "react";

const Pagination = () => {
  const getWindowDimentions = () => {
    const { initialWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimentions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimentions());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowDimensions);

  return <ul></ul>;
};

export default Pagination;
