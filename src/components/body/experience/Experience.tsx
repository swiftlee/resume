import React, { useEffect, useState } from "react";
import Section from "../Section";
import experience from "../../../data/experience.json";
import "../../../scss/body/Experience.scss";
import ExperienceBubble from "./ExperienceBubble";
import usePagination from "../../../hooks/usePagination";

const getExperienceMeters = (): JSX.Element[] => {
  return Object.entries(experience)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value], index) => (
      <ExperienceBubble key={index} id={index} decimal={value} title={key} />
    ));
};

export default function Experience() {
  const {next, prev, paginatedItems, page, pages} = usePagination(6, getExperienceMeters());
  return (
    <>
      <Section title="Experience" subtitle="Comfortability ranking">
        <div className="experience-grid">
          <span className="arrow" onClick={prev}>
            &larr;
          </span>
          <div className="grid justify-items-center auto-rows-auto grid-cols-3 gap-8">
            {paginatedItems}
          </div>
          <span
            className="arrow"
            onClick={next}
          >
            &rarr;
          </span>
        </div>
        <div className="text-center">
          {page}/{pages}
        </div>
      </Section>
    </>
  );
}
