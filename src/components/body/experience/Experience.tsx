import React, { ReactElement, useEffect } from "react";
import Section from "../Section";
import experience from "../../../data/experience.json";
import "../../../scss/body/Experience.scss";
import ExperienceBubble from "./ExperienceBubble";
import usePagination from "../../../hooks/usePagination";
import Dots from './Dots'

const getExperienceMeters = (): ReactElement[] => {
  return Object.entries(experience)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value], index) => (
      <ExperienceBubble key={index} id={index} decimal={value} title={key} />
    ));
};

export default function Experience() {
  const { next, prev, setPage, paginatedItems, page, pages, transitioning } = usePagination(6, getExperienceMeters());

  return (
    <>
      <Section title="Experience" subtitle="Places of work and technologies">
        <div className='bg-gray-800 rounded-xl p-4'>
          <div className="experience-grid">
            <div />
            <div id="experience-grid-items" className='grid justify-items-center auto-rows-auto grid-cols-3 gap-8 transform'>
              {paginatedItems}
            </div>
            <div />
          </div>
          <div className="flex justify-center">
            <div className="navigation-grid">
              <div className="arrow" onClick={transitioning ? _ => { } : prev}>&larr;</div>
              <Dots selectedIndex={page} count={pages} setPage={setPage} />
              <div className="arrow" onClick={transitioning ? _ => { } : next}>&rarr;</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}