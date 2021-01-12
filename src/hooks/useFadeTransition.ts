import { useState, useEffect, MutableRefObject } from "react";
import useIsInViewport from "./useIsInViewport";
import anime from "animejs";

const useFadeTransition = (ref: MutableRefObject<any>) => {
  const [isInViewport, targetRef] = useIsInViewport({
    target: ref,
  });
  const [timeline, setTimeline]: [any, any] = useState();

  useEffect(() => {
    if (isInViewport !== null && isInViewport !== undefined) {
      if (!timeline) {
        setTimeline(
          anime.timeline().add({
            autoplay: false,
            targets: ref.current,
            translateX: [-100, 0],
            opacity: [0, 1],
            easing: "easeInOutExpo",
            duration: 700,
          })
        );
      }
      if (timeline?.began) {
        timeline.reverse();

        if (timeline.progress === 100 && timeline.direction === "reverse")
          timeline.completed = false;
      }

      if (timeline?.paused) timeline.play();
    }
  }, [isInViewport]);

  return [isInViewport, targetRef];
};

export default useFadeTransition;
