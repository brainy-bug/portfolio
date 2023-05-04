const ModalContent = ({ text, name }) => {
  return (
    <div className='modal-content'>
      <h4 className='h3 modal-title'>{name}</h4>

      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ModalContent;
