import React from "react";
import { motion } from "framer-motion";

const Motion = (Component) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.2 }}
      >
        <Component />
      </motion.div>
    );
  };

export default Motion;
