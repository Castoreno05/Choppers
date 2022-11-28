import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
// import { GrProductHunt } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
// BiImages,
import { AiFillHome, AiOutlineScissor } from "react-icons/ai";

export const MenuData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    class: "nav-text",
  },
  {
    title: "About Us",
    path: "/about",
    icon: <BsPeopleFill />,
    class: "nav-text",
  },
  {
    title: "Barbers",
    path: "/barbers",
    icon: <AiOutlineScissor />,
    class: "nav-text",
  },
  {
    title: "Appointments",
    path: "/appointments",
    icon: <RiCustomerService2Fill />,
    class: "nav-text",
  },
  // {
  //     title: 'Gallery',
  //     path: '/gallery',
  //     icon: <BiImages/>,
  //     class: 'nav-text'
  // },
  // {
  //     title: 'Products',
  //     path: '/products',
  //     icon: <GrProductHunt/>,
  //     class: 'nav-text'
  // },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <BiPhoneCall />,
    class: "nav-text",
  },
];
