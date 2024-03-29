import "../../scss/body/Section.scss";

import React from "react";

interface IAttributes {
  title: string | "";
  subtitle: string | "";
  children: JSX.Element[] | JSX.Element;
}

export default function Section({ title, subtitle, children }: IAttributes) {
  return (
    <div className="section" id={title.toLowerCase()}>
      <div />
      <div className="p-4">
        <div className="bg-gray-900 rounded-lg pt-2 pb-1 mb-2 shadow-sm">
          <span className="title">{title}</span>
          {subtitle ? <span className="subtitle">{subtitle}</span> : null}
        </div>
        <div className="data">{children}</div>
      </div>
      <div />
    </div>
  );
}
