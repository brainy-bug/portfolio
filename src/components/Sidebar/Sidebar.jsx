import { useState } from "react";

import {
  AvatarBox,
  ContactLinks,
  SocialLinks,
} from "../PageSections/AboutSection";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className={`${isActive ? "sidebar active" : "sidebar"} `}>
      <AvatarBox isActive={isActive} setIsActive={setIsActive} />
      <div className='sidebar-info_more'>
        <div className='separator'></div>
        <ContactLinks />
        <div className='separator'></div>
        <SocialLinks />
      </div>
    </aside>
  );
};
export default Sidebar;
