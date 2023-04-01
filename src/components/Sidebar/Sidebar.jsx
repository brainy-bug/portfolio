import AvatarInfoBox from "../AvatarInfoBox";
import ContactLists from "../Contact/ContactLists";
import SocialLists from "../Contact/SocialLists";

import { useAppContext } from "../../contexts/AppContext";
import React from "react";

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
