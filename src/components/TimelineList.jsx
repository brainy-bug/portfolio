import React from "react";

const TimelineList = ({ data }) => {
  return (
    <ol className='timeline-list'>
      {data.map((singleData) => {
        const { text, entry_year, final_year, title } = singleData;

        return (
          <li className='timeline-item'>
            <h4 className='h3 timeline-item-title'>{title}</h4>
            <span>{`${entry_year} — ${final_year}`}</span>
            {text && <p className='timeline-text'>{text}</p>}
          </li>
        );
      })}
    </ol>
  );
};

export default TimelineList;
