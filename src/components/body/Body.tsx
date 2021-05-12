import React from "react";
import "../../scss/body/Percent.scss";
import HideUntilScroll from "../utils/HideUntilScroll";
import About from "./about/About";
import Experience from "./experience/Experience";

// TODO: hide body items until
// significant scroll down or selection made from navbar
export default function Body() {
  return (
    <div className="m-auto">
      <HideUntilScroll>
        <About key="About" />
      </HideUntilScroll>
      <HideUntilScroll>
        <Experience key="Experience" />
      </HideUntilScroll>
    </div>
  );
}
