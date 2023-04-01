import { useState } from "react";

import AvatarInfoBox from "../AvatarInfoBox";
import ContactLists from "../Contact/ContactLists";
import SocialLists from "../Contact/SocialLists";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className={`${isActive ? "sidebar active" : "sidebar"} `}>
      <AvatarInfoBox isActive={isActive} setIsActive={setIsActive} />
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
