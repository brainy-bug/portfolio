import avatarIMG from "../assets/images/my-avatar.png";
import { useAppContext } from "../contexts/AppContext";

const AvatarInfoBox = () => {
  const { isActive, setIsActive } = useAppContext();
  return (
    <div className='sidebar-info'>
      <figure className='avatar-box'>
        <img src={avatarIMG} alt='Yinka' width='80' />
      </figure>

      <div className='info-content'>
        <h1 className='name'>Abdulrasheed Madamidola</h1>

        <p className='title'>Frontend developer</p>
      </div>

      <button
        className='info_more-btn'
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <span>{`${isActive ? "Hide" : "Show"} Contacts`}</span>
        <ion-icon name={`chevron-${isActive ? "up" : "down"}`}></ion-icon>
      </button>
    </div>
  );
};

export default AvatarInfoBox;
