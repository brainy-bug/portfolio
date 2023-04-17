import { useEffect } from "react";
import { useFetchContext } from "../contexts/FetchContext";
import { testimonials_url as url } from "../utils/constants";

const Testimonials = () => {
  const { fetchTable, testimonials } = useFetchContext();
  useEffect(() => {
    fetchTable(url, "testimonials");
  }, []);

  return (
    <section class='testimonials'>
      <h3 class='h3 testimonials-title'>Testimonials</h3>

      <ul class='testimonials-list has-scrollbar'>
        {testimonials?.map((item) => {
          const { id, name, testimonial, imageURL } = item;

          return (
            <li class='testimonials-item' key={id}>
              <div class='content-card'>
                <figure class='testimonials-avatar-box'>
                  <img src={imageURL} alt={name} width='60' />
                </figure>

                <h4 class='h4 testimonials-item-title'>{name}</h4>

                <div class='testimonials-text'>
                  <p>{testimonial}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Testimonials;
