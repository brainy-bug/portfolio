import { contacts } from "../../../utils/links";

const ContactLinks = () => {
  return (
    <ul className='contacts-list'>
      {contacts.map((item) => {
        const { id, icon, linkText, title, url, address, date, dateTime } =
          item;
        return (
          <li className='contact-item' key={id}>
            <div className='icon-box'>
              <ion-icon name={icon}></ion-icon>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>{title}</p>
              {url && (
                <a href={url} className='contact-link'>
                  {linkText}
                </a>
              )}
              {date && <time dateTime={dateTime}>{date}</time>}
              {address && <address>{address}</address>}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactLinks;
