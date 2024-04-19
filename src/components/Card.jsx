import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, referenece }) {
  return (
    <motion.div
      drag
      dragConstraints={referenece}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className=" relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex items-center justify-between mb-3 py-5 px-8">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose color="#000" />
            ) : (
              <LuDownload size=".7em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex item-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
