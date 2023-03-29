import { useFormContext } from "../contexts/FormContext";
import { ToastContainer } from "react-toastify";

const ContactForm = () => {
  const { handleSubmit, handleChange, fullname, email, message, isSubmitting } =
    useFormContext();
  return (
    <section className='contact-form'>
      <h3 class='h3 form-title'>Let's talk.</h3>

      <form className='form' onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <input
            type='text'
            name='fullname'
            value={fullname}
            className='form-input'
            placeholder='Full name'
            onChange={handleChange}
            required
          />

          <input
            type='email'
            name='email'
            value={email}
            className='form-input'
            onChange={handleChange}
            placeholder='Email address'
            required
          />
        </div>

        <textarea
          name='message'
          value={message}
          className='form-input'
          onChange={handleChange}
          placeholder='Your Message'
          required
        ></textarea>

        <button className='form-btn' type='submit'>
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <ion-icon name='paper-plane'></ion-icon>
              <span>Send Message</span>
            </>
          )}
        </button>
        <ToastContainer autoClose={1800} />
      </form>
    </section>
  );
};
export default ContactForm;
