import designSVG from "../assets/images/icon-design.svg";
import webSVG from "../assets/images/icon-dev.svg";
import larfatLogistics from "../assets/images/larfat-logistics.png";
import mssnUi from "../assets/images/mssn-ui.png";
import aloeda from "../assets/images/aloeda's-scent.png";
import revive from "../assets/images/revive-digital-sol.png";
import itesiwaju from "../assets/images/itesiwaju-oyo.png";

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
      " The most modern and high-quality design made at a professional level.",
  },
  {
    id: 2,
    title: "Web development",
    image: webSVG,
    description:
      " High-quality development of sites at the professional level.",
  },
];

export const education = [
  {
    id: 1,
    title: "University of Ibadan",
    entry_year: "2019",
    final_year: "present",
    text: "Studying Agricultural and Environmental Engineering",
  },
  {
    id: 2,
    title: "Lagos State Model College, Igbonla",
    entry_year: "2012",
    final_year: "2018",
    text: "High school",
  },
];

export const skills = [
  {
    skill: "Graphic Design",
    progress: "85",
  },
  {
    skill: "React",
    progress: "68",
  },
  // {
  //   skill: "Graphic Design",
  //   progress: "85",
  // },
  // {
  //   skill: "Graphic Design",
  //   progress: "85",
  // },
  // {
  //   skill: "Graphic Design",
  //   progress: "85",
  // },
];

export const clients = [larfatLogistics, mssnUi, aloeda, revive, itesiwaju];

export const category = ["All", "Graphic design", "Web development"];
export const projects_url = "/.netlify/functions/projects";
export const testimonials_url = "/.netlify/functions/testimonials";
