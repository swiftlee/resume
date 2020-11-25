import anime from "animejs";

export const header = {
  performLogoAnim: () => {
    // this call does the actual line drawing animations
    anime({
      targets: "#logo path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3000 / 2,
      direction: "normal",
      autoplay: true,
    });

    // this is to fix the fill so it is never the 'error' color which is just a solid black
    anime({
      targets: ".logoStroke",
      fill: ["rgba(0,0,0,0)", "rgba(0,0,0,0)"],
      easing: "linear",
      delay: 2750 / 2,
      autoplay: true,
    });

    // fades in the logo fill colors
    anime({
      targets: ".logoFill",
      opacity: [0, 1],
      easing: "linear",
      delay: 2750 / 2,
      autoplay: true,
    });
  },

  performHorizontalAnim: () => {
    anime.timeline({ autoplay: true }).add({
      targets: ".hr-left, .hr-right",
      width: [0, "100%"],
      easing: "easeOutExpo",
      duration: 3000 / 2,
      direction: "normal",
      delay: 1000 / 2,
    });
  },

  performLoadingTextAnim: () => {
    anime
      .timeline({ autoplay: true })
      .add({
        targets: ".loading .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200 / 2,
        delay: (el, i) => (500 + 15 * i) / 2,
        autoplay: true,
      })
      .add({
        targets: ".loading .letter",
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1100 / 2,
        delay: (el, i) => (100 + 15 * i) / 2,
        autoplay: true,
      })
      .add({
        targets: ".loading .letter",
        translateX: [-30, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600 / 2,
        offset: "-=775/2",
        delay: (el, i) => (34 * (i + 1)) / 2,
      });
  },

  performWavesAnim: () => {
    anime({
      targets: ".waves",
      opacity: [0, 0.4],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: 1250,
    });
  },

  performSubtitleAnim: (el: any) => {
    const letters: HTMLElement[] = Array.from(el.querySelectorAll(".letter"));
    const TYPE_AFTER_MS = 250;
    const JUMP_AFTER_MS = 100 + Math.random() * 75;

    let blink = anime({
      targets: ".subtitle .cursor",
      duration: 1250,
      opacity: [{ value: [1, 1] }, { value: [0, 0] }],
    });

    anime
      .timeline()
      .add(
        {
          targets: ".subtitle .cursor",
          translateX: letters.map((letter: HTMLElement, i) => ({
            value: letter.offsetLeft + letter.offsetWidth,
            duration: 1,
            delay: i === 0 ? 0 : JUMP_AFTER_MS,
          })),
        },
        TYPE_AFTER_MS
      )
      .add(
        {
          targets: ".subtitle .letter",
          opacity: [0, 1],
          duration: 1,
          delay: anime.stagger(JUMP_AFTER_MS),
          changeBegin: () => {
            blink.play();
            blink.pause();
          },
          changeComplete: () => {
            blink.restart();
          },
        },
        TYPE_AFTER_MS
      );
  },
};
