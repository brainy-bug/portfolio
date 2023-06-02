import { useEffect, useState } from "react";

import ModalContainer from "../../Modal/ModalContainer";

import { useFetchContext } from "../../../contexts/FetchContext";
import { testimonials_url as url } from "../../../utils/constants";


const Testimonials = () => {
  const { fetchTable, testimonials } = useFetchContext();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    fetchTable(url, "testimonials");
  }, []);

  const handleClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <section className='testimonials'>
      <h3 className='h3 testimonials-title'>Testimonials</h3>

      <ul className='testimonials-list has-scrollbar'>
        {testimonials?.map((item,index) => {
          const { id, name, testimonial, imageURL } = item;

          return (
            <>
              <li
                className='testimonials-item'
                key={index}
                onClick={() => handleClick(item)}
              >
                <div className='content-card'>
                  <figure className='testimonials-avatar-box'>
                    <img src={imageURL} alt={name} width='60' />
                  </figure>

                  <h4 className='h4 testimonials-item-title'>{name}</h4>

                  <div className='testimonials-text'>
                    <p>{testimonial}</p>
                    <p>{testimonial}</p>
                  </div>
                </div>
              </li>
              {showModal && (
                <ModalContainer
                  key={index}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  {...modalContent}
                />
              )}
            </>
          );
        })}
      </ul>
    </section>
  );
};
export default Testimonials;
