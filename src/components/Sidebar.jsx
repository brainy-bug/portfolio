import AvatarInfoBox from "./AvatarInfoBox";
import ContactLists from "./ContactLists";
import SocialLists from "./SocialLists";

import { useAppContext } from "../contexts/AppContext";

const Sidebar = () => {
  const { isActive } = useAppContext();

  return (
    <aside className={`${isActive ? "sidebar active" : "sidebar"} `}>
      <AvatarInfoBox />
      <div className='sidebar-info_more'>
        <div className='separator'></div>
        <ContactLists />
        <div className='separator'></div>
        <SocialLists />
      </div>
    </aside>
  );
};
export default Sidebar;
