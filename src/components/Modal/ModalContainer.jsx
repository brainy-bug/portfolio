import ModalContent from "./ModalContent";

import quoteSVG from "../../assets/images/icon-quote.svg";

const ModalContainer = ({
  name,
  testimonial,
  imageURL,
  setShowModal,
  showModal,
}) => {
  return (
    <div
      className={`${showModal ? "modal-container active" : "modal-container"}`}
    >
      <div
        className={`${showModal ? "overlay active" : "overlay"}`}
        onClick={() => setShowModal(false)}
      ></div>

      <section className='testimonials-modal'>
        <button className='modal-close-btn' onClick={() => setShowModal(false)}>
          <ion-icon name='close-outline'></ion-icon>
        </button>

        <div className='modal-img-wrapper'>
          <figure className='modal-avatar-box'>
            <img src={imageURL} alt={name} width='80' />
          </figure>

          <img src={quoteSVG} alt='quote icon' />
        </div>
        <ModalContent name={name} text={testimonial} />
      </section>
    </div>
  );
};
export default ModalContainer;
