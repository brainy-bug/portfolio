import { services } from "../../../data/services";
import FadeIn from "../../FadeIn";

const Services = () => {
  return (
    <section className='service'>
      <FadeIn>
        <h3 className='h3 service-title'>What i'm doing</h3>
      </FadeIn>
      <ul className='service-list'>
        {services.map(({ title, id, image, description }) => {
          return (
            <FadeIn key={id}>
              <li className='service-item'>
                <div className='service-icon-box'>
                  <img src={image} alt={title} width='40' />
                </div>

                <div className='service-content-box'>
                  <h4 className='h4 service-item-title'>{title}</h4>

                  <p className='service-item-text'>{description}</p>
                </div>
              </li>
            </FadeIn>
          );
        })}
      </ul>
    </section>
  );
};
export default Services;
