import React from 'react';
import logo from '../../assets/icons/logo.svg';
import email from '../../assets/icons/email.svg';
import phone from '../../assets/icons/phone.svg';
import whatsup from '../../assets/icons/vk_icon.svg';
import styles from '../Content/Content.module.css';

const Footer = () => {
  return (
<footer className={`p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 ${styles['background-radial-gradient']}`}>
        <div className="mx-auto max-w-screen-xl text-center">
          <a href="#" className="flex justify-center items-center text-3xl font-semibold text-white dark:text-white">
            Инженер Строй Плюс
          </a>
          <p className="my-6 text-white lg:text-lg dark:text-gray-400">Связаться с нами:</p>
          <ul className="flex flex-col items-center mt-6 space-y-4 text-white lg:text-lg dark:text-white">
            <li className="flex items-center">
              <img src={email} alt="Email" className="h-8 mr-2" />
              <p className="text-base">Почта: dasddas@gmail.ru</p>
            </li>
            <li className="flex items-center">
              <img src={phone} alt="Phone" className="h-8 mr-2" />
              <p className="text-base">Телефон: +7 (989) 555 55 53</p>
            </li>
            <li className="flex items-center">
              <img src={whatsup} alt="WhatsApp" className="h-8 mr-2" />
              <p className="text-base">What's Up: +7 (989) 555 55 53</p>
            </li>
          </ul>

          <ul className="flex flex-col items-start lg:flex-row lg:flex-wrap justify-center lg:items-center mb-6 text-white lg:text-lg dark:text-white">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Premium</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Campaigns</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
            </li>
          </ul>
          <span className="text-base text-white sm:text-center dark:text-gray-400">
            © 2021-2022 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </span>
        </div>
    </footer>
  );
};

export default Footer;
