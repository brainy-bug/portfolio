const ModalContent = ({ text, name }, index) => {
  return (
    <div className='modal-content' key={index}>
      <h4 className='h3 modal-title'>{name}</h4>

      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ModalContent;
