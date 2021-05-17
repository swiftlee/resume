import { useState, useEffect } from 'react'

export function useDetectViewportWidth({ phoneStyle = '', otherStyle = '' }: { [key: string]: string }, state: any) {

  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{ [key: string]: number | undefined }>({
    width: undefined,
    height: undefined,
  });

  const [responsiveStyle, setStyle] = useState('')
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // set style according to width of screen
      setStyle(window.innerWidth >= 640 ? otherStyle : phoneStyle)
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [state]); // Update based on provided state
  return { windowSize, responsiveStyle };
}