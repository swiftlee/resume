import React, { useRef } from "react";
import useFadeTransition from "../..//hooks/useFadeTransition";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const HideUntilScroll = ({ children }: Props) => {
  const ref = useRef();
  const [, targetRef] = useFadeTransition(ref);
  /* @ts-ignore */
  return <div ref={targetRef}>{children}</div>;
};

export default HideUntilScroll;
