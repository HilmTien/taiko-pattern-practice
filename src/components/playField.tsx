"use client"

import Pattern from "@/components/pattern";
import React from "react";

export default function PlayField() {
  let [offset, setOffset] = React.useState(100)

  let getLeft = () => {
    if (offset < 0) {
      setOffset(100)
    }
    setOffset(offset - 1)
    return `${offset}%`
  }

  return (
    <div className="relative">
      <div className="absolute" style={{ left: getLeft() }}>
        <div className="relative h-36 w-screen">
          <Pattern patternString="ddK (dddK) [kkd-k]"></Pattern>
          {/* <Pattern patternString="KkDK"></Pattern> */}
        </div>
      </div>
    </div>
  );
}
