"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EhNavigation() {
  const [open, setOpen] = useState(false);

  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const menuWrapper = {
    open: {
      width: "300px",
      height: "600px",
    },
  };
  const middleBar = {
    open: {
      width: "0",
      height: "0",
      opacity: "0",
      transition: {
        duration: 0.05,
      },
    },
  };

  const sideBar = {
    open: {
      height: "30%",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="fixed right-12 top-12">
      <motion.div
        className="fixed right-5 top-5 size-[48px] overflow-hidden"
        animate={open ? "open" : "closed"}
        variants={menuWrapper}
      >
        <motion.span className="absolute left-0 top-0 z-30 h-1 w-full rounded-tr-full bg-black" />
        <motion.div
          variants={sideBar}
          className="absolute right-0 top-0 z-30 h-3 w-1 rounded-tr-full bg-black"
        />
        <motion.div
          variants={middleBar}
          className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-black"
        />
        <motion.span className="absolute bottom-0 left-0 z-30 h-1 w-full rounded-bl-full bg-black" />
        <motion.div
          variants={sideBar}
          className="absolute bottom-0 left-0 z-30 h-3 w-1 rounded-bl-full bg-black"
        />
        <button
          onClick={() => {
            setOpen(!open);
          }}
          type="button"
          aria-label="button"
          className="absolute right-0 top-0 z-10 size-12"
        />

        <motion.div
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top" }}
          className="absolute flex size-full flex-col gap-2 overflow-hidden bg-white p-2 shadow-xl"
        >
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
