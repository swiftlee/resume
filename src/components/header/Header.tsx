import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import "../../scss/header/Header.scss";
import { header } from "../../helpers/anime";
import Navbar from "./Navbar";

const {
  performHorizontalAnim,
  performLoadingTextAnim,
  performSubtitleAnim,
  performWavesAnim,
} = header;

export default function Header() {
  const [{ text, textClass, loading }, setText] = useState({
    text: "Loading...",
    textClass: "loading",
    loading: true,
  });

  useEffect(() => {
    performHorizontalAnim();
    performLoadingTextAnim();
    performWavesAnim();
    setTimeout(() => {
      setText((prevState) => {
        return { text: "Jon Conlin", textClass: "name", loading: false };
      });
      performSubtitleAnim(document.querySelector(".subtitle"));
    }, 3250 / 2);
  }, []);

  return (
    <div className="flex justify-center bg-opacity-25 border-b border-opacity-10 border-gray-800 bg-gray-800">
      <div className="grid header-grid m-0 w-full">
        <Navbar />
        <div className="logo-grid flex flex-col text-gray-300 w-full">
          <hr className="hr-left my-auto place-self-start"></hr>
          <ProfileImage />
          <hr className="hr-right my-auto place-self-end"></hr>
        </div>
        <div className={`mt-0 mx-auto ${textClass}`}>
          {spannedLetters(text)}
        </div>
        <div className="w-full">
          <div className="flex flex-row mt-0 justify-center">
            <Subtitle loading={loading} />
          </div>
          <div className="waves w-full">
            <svg
              height="200px"
              fill="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#365f91" />
                <stop offset="50%" stop-color="#111827" />
                <stop offset="100%" stop-color="#355b97" />
              </linearGradient>
              <path
                fill="url(#grad1)"
                d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 
          
          V 359 
          H 0 
          V 67
          Z"
              >
                <animate
                  repeatCount="indefinite"
                  fill="url(#grad1)"
                  attributeName="d"
                  dur="15s"
                  attributeType="XML"
                  values="
            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z
            "
                ></animate>
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const spannedLetters = (text: string): JSX.Element[] =>
  text.split("").map((c: string) => {
    return <span className="letter">{c === " " ? <>&nbsp;</> : c}</span>;
  });

interface IProps {
  loading: Boolean;
}

function Subtitle({ loading }: IProps): JSX.Element {
  if (loading) {
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  }

  return (
    <div className="subtitle block">
      <div className="letters">{spannedLetters("Full Stack Developer.")}</div>
      <span className="cursor" />
    </div>
  );
}
