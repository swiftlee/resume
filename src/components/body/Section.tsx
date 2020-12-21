import { readFileSync } from "fs";

import React from "react";

interface IAttributes {
  title: string;
  subtitle: string;
  contentElement: JSX.Element;
}

export default function Section({
  title,
  subtitle,
  contentElement,
}: IAttributes) {
  return <div className="w-full"></div>;
}
