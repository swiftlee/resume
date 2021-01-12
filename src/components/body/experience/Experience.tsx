import React, { useEffect, useState } from "react";
import Section from "../Section";
import experience from "../../../data/experience.json";
import { useIncrementTo } from "../../../hooks/useIncrement";
import "../../../scss/body/Experience.scss";

const getExperienceMeters = (): JSX.Element[] => {
  return Object.entries(experience)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value], index) => (
      <Percentage key={index} id={index} decimal={value} title={key} />
    ));
};

export default function Experience() {
  const [page, setPage] = useState(1);
  const meters = getExperienceMeters();
  const paginatedMeters = meters.slice(page * 6 - 6, page * 6);
  const pages = Math.ceil(meters.length / 6);
  return (
    <>
      <Section title="Experience" subtitle="Comfortability ranking">
        <div className="experience-grid">
          <div className="arrow" onClick={() => setPage(Math.max(1, page - 1))}>
            &larr;
          </div>
          <div className="grid justify-items-center auto-rows-auto grid-cols-3 gap-8">
            {paginatedMeters}
          </div>
          <div
            className="arrow"
            onClick={() => setPage(Math.min(pages, page + 1))}
          >
            &rarr;
          </div>
        </div>
      </Section>
    </>
  );
}

interface IPercentageAttributes {
  title: string;
  decimal: number;
  id: number;
}

function Percentage({
  decimal,
  title,
  id,
}: IPercentageAttributes): JSX.Element {
  const [, percent] = useIncrementTo(0, decimal, 650 / (decimal + 1));

  return (
    <div className="percent-container">
      <span className="label">{title}</span>
      <div className="flex items-center justify-center">
        <svg viewBox="0 0 36 36">
          <path
            id={`meter${id}`}
            strokeDasharray={`${decimal}, 100`}
            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="absolute text-4xl">{percent}%</span>
      </div>
    </div>
  );
}
