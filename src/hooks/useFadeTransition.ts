import { useState, useEffect, MutableRefObject, Dispatch, SetStateAction } from "react";
import useIsInViewport from "./useIsInViewport";
import anime, { AnimeTimelineInstance } from "animejs";

const useFadeTransition = (ref: MutableRefObject<any>) => {
  const [isInViewport, targetRef] = useIsInViewport({
    target: ref,
  });
  const [timeline, setTimeline] = useState<AnimeTimelineInstance>();

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
        timeline.restart()
      }
    }
  }, [isInViewport]);

  return [isInViewport, targetRef];
};

export default useFadeTransition;
