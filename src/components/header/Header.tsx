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
