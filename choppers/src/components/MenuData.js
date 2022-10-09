import React from 'react';
import { BsPeopleFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GrProductHunt } from "react-icons/gr";
import { BiImages, BiPhoneCall } from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

export const MenuData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        class: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/about',
        icon: <BsPeopleFill/>,
        class: 'nav-text'
    },
    {
        title: 'Barbers',
        path: '/barbers',
        icon: <AiIcons.AiOutlineScissor/>,
        class: 'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <RiCustomerService2Fill/>,
        class: 'nav-text'
    },
    {
        title: 'Gallery',
        path: '/gallery',
        icon: <BiImages/>,
        class: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <GrProductHunt/>,
        class: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contact',
        icon: <BiPhoneCall/>,
        class: 'nav-text'
    },
    
]