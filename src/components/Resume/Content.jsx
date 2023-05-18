import TimelineList from "../TimelineList";
import React from "react";

const Content = ({ heading, data }) => {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <ion-icon name='book-outline'></ion-icon>
        </div>
        <h3 className='h3'>{heading}</h3>
      </div>
      <TimelineList data={data} />
    </section>
  );
};
export default Experience;
