import designSVG from "../assets/images/icon-design.svg";
import webSVG from "../assets/images/icon-dev.svg";

export const contacts = [
  {
    id: 1,
    icon: "mail-outline",
    title: "Email",
    linkText: "yinka.jsx@gmail.com",
    url: "mailto:yinka.jsx@gmail.com",
  },
  {
    id: 2,
    icon: "phone-portrait-outline",
    title: "Phone",
    linkText: "+(234) 903 845 0563",
    url: "tel:+2349038450563",
  },
  {
    id: 3,
    icon: "calendar-outline",
    title: "Birthday",
    date: "February 26",
    dateTime: "02-26",
  },
  {
    id: 4,
    icon: "location-outline",
    title: "Location",
    address: "Amuwo Odofin, Lagos, Nigeria",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: "logo-linkedin",
    url: "https://www.linkedin.com/mwlite/in/abdulrasheed-madamidola-73640a260",
  },
  {
    id: 2,
    icon: "logo-twitter",
    url: "https://twitter.com/yinkaah_",
  },
  {
    id: 3,
    icon: "logo-instagram",
    url: "https://www.instagram.com/yinkaah_",
  },
  {
    id: 4,
    icon: "logo-whatsapp",
    url: "https://wa.link/04qogy",
  },
  {
    id: 5,
    icon: "logo-github",
    url: "https://github.com/yinkajs",
  },
];

export const navLinks = [
  {
    id: 1,
    text: "About",
    url: "/",
  },
  {
    id: 2,
    text: "Resume",
    url: "/resume",
  },
  {
    id: 3,
    text: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    text: "Contact",
    url: "/contact",
  },
];

export const services = [
  {
    id: 1,
    title: "Graphic design",
    image: designSVG,
    description:
      "Designs created at a professional level with the latest and top-notch techniques.",
  },
  {
    id: 2,
    title: "Web development",
    image: webSVG,
    description:
      " High-quality development of sites at the professional level.",
  },
  // {
  //   id: 3,
  //   title: "Web development",
  //   image: { webSVG },
  //   description:
  //     "The most modern and high-quality design made at a professional level.",
  // },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
