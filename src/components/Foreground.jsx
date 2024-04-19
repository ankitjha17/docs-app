import React, { useRef } from "react";
import Card from "./Card";


function ForeGround() {

    const ref = useRef(null);
  const data = [
    {
      desc: "Lorem 1e nasd ujiasjkan ollloaskdoasm.",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "SEEMA AND ABHINAY.",
        fileSize: "0.9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "Lorem 1e nasd ujiasjkan ollloaskdoasm.",
        fileSize: "0.9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
  ];
  return (
    <div ref={ref} className="fixed top-0left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((items, index) => (
        <Card data={items} referenece={ref}/>
      ))}
    </div>
  );
}

export default ForeGround;
