import { css } from "restyle";
import React from "react";

export default function Dot({ color, ...p }) {
  const [classNames, styleElement] = css({
    position: "absolute",
    cursor: "pointer",
    width: 0,
    height: 0,
    borderColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    transform: "translate(50%, 50%)",
    borderRightWidth: `${p.size / 2}px`,
    borderBottomWidth: `${p.size / 2}px`,
    borderLeftWidth: `${p.size / 2}px`,
    marginLeft: `${p.x}px`,
    marginTop: `${p.y}px`,
  });
  return (
    <>
      <div {...p} className={classNames} style={{ borderBottomColor: color }} />
      {styleElement}
    </>
  );
}
