import React from "react";
import { Pagination } from "../../components";
import { motion } from "framer-motion";

const Wrapper = (Component, id) =>
  function HOC() {
    return (
      <motion.div
        className="section"
        id={id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.5 }}
      >
        <Component />
        <Pagination active={id} />
      </motion.div>
    );
  };

export default Wrapper;
