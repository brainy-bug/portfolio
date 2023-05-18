import { experience } from "../../utils/constants";
import TimelineList from "../TimelineList";
import React from "react";

const Experience = () => {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <ion-icon name='book-outline'></ion-icon>
        </div>
        <h3 className='h3'>Experience</h3>
      </div>
      <TimelineList data={experience} />
    </section>
  );
};
export default Experience;
