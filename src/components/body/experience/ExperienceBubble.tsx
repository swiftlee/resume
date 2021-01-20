import React from 'react'
import { useIncrementTo } from "../../../hooks/useIncrement";

interface IPercentageAttributes {
  title: string;
  decimal: number;
  id: number;
}

export default function ExperienceBubble({
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