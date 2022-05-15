import React from "react";
import { Pagination } from "../../components";

const Wrapper = (Component, id) =>
  function HOC() {
    return (
      <section id={id}>
        <Component />
        <Pagination active={id} />
      </section>
    );
  };

export default Wrapper;
