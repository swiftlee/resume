import React, { ReactElement } from "react";
import Section from "../Section";
import experience from "../../../data/experience.json";
import "../../../scss/body/Experience.scss";
import ExperienceBubble from "./ExperienceBubble";
import Divider from "../../utils/Divider";
import usePagination from "../../../hooks/usePagination";
import Dots from './Dots'
import Workplaces from "./Workplaces";

const getExperienceMeters = (): ReactElement[] => {
  return Object.entries(experience)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value], index) => (
      <ExperienceBubble key={index} id={index} decimal={value} title={key} />
    ));
};

export default function Experience() {
  const { next, prev, setPage, paginatedItems, page, pages, transitioning } = usePagination(6, getExperienceMeters());

  const btnClass = `arrow ${transitioning ? 'opacity-50 cursor-not-allowed' : 'cursor-default'}`

  return (
    <>
      <Section title="Experience" subtitle="Workplaces and technologies">
        <div className='bg-gray-900 rounded-xl p-4'>
          <Workplaces />
          <Divider text="Framework/language comfortability ranking" />
          <div className="experience-grid">
            <div />
            <div id="experience-grid-items" className='grid justify-items-center auto-rows-auto grid-cols-3 gap-8 transform'>
              {paginatedItems}
            </div>
            <div />
          </div>
          <div className="flex justify-center">
            <div className="navigation-grid">
              <button className={btnClass} onClick={transitioning ? _ => { } : prev} disabled={transitioning}>&larr;</button>
              <Dots selectedIndex={page} count={pages} setPage={setPage} transitioning={transitioning} />
              <button className={btnClass} onClick={transitioning ? _ => { } : next} disabled={transitioning}>&rarr;</button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}