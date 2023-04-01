import { services } from "../../utils/constants";
import FadeInWhenVisible from "../FadeInWhenVisible";

const Services = () => {
  return (
    <section className='service'>
      <FadeInWhenVisible>
        <h3 className='h3 service-title'>What i'm doing</h3>
      </FadeInWhenVisible>
      <ul className='service-list'>
        {services.map(({ title, id, image, description }) => {
          return (
            <FadeInWhenVisible>
              <li className='service-item' key={id}>
                <div className='service-icon-box'>
                  <img src={image} alt={title} width='40' />
                </div>

                <div className='service-content-box'>
                  <h4 className='h4 service-item-title'>{title}</h4>

                  <p className='service-item-text'>{description}</p>
                </div>
              </li>
            </FadeInWhenVisible>
          );
        })}
      </ul>
    </section>
  );
};
export default Services;
