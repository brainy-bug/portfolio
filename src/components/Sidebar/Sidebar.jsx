import { useState } from "react";

import AvatarBox from "../AvatarBox";
import ContactLinks from "../Links/ContactLinks";
import SocialLinks from "../Links/SocialLinks";

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
