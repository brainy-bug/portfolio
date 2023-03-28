import { education } from "../utils/constants";
import TimelineList from "./TimelineList";

const Education = () => {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <ion-icon name='book-outline'></ion-icon>
        </div>
        <h3 className='h3'>Education</h3>
      </div>
      <TimelineList data={education} />
    </section>
  );
};
export default Education;
