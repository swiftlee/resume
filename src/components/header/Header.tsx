import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import "../../scss/header/Header.scss";
import { header } from "../../helpers/anime";
import Description from './description/Description'
import ContactButton from "./description/ContactButton";
import HideUntilScroll from "../utils/HideUntilScroll";

const {
  performHorizontalAnim,
  performLoadingTextAnim,
  performSubtitleAnim,
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
    setTimeout(() => {
      setText((prevState) => {
        return { text: "Jon Conlin", textClass: "name", loading: false };
      });
      performSubtitleAnim(document.querySelector(".subtitle"));
    }, 3250 / 2);
  }, []);

  return (
    <div className="top flex flex-col overflow-hidden justify-start bg-opacity-25 border-b border-opacity-10 border-gray-800 bg-gray-800" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="grid header-grid m-0 w-full">
        <div className="bg-gray-800 filler-gap" style={{ zIndex: -1, transform: 'scaleY(13) translateY(-20px)' }} />
        <div className="logo-grid inline-flex flex-col text-gray-300 w-full">
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
      <HideUntilScroll>
        <Description />
        <ContactButton />
      </HideUntilScroll>
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
