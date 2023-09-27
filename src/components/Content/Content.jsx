import React from 'react';
import 'tailwindcss/tailwind.css';
import styles from './Content.module.css';
import header_img from '../../assets/images/header.jpeg';

const Content = () => {
  return (
    <div className="content">
      <div className="container my-24 mx-auto md:px-6">
        <section className={`${styles['background-radial-gradient']} bg-[hsl(218, 41%, 15%)]`}>
          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="flex grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h1 className="mb-16 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
                    Лучший выбор <br />
                    <span className="text-[hsl(6,81%,75%)]">для вашего дома</span>
                  </h1>
                  <a
                    className="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-md shadow-md hover:shadow-sm focus:shadow-sm active:shadow-sm md:mr-2 md:mb-0"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Связаться
                  </a>
                  <a
                    className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300 hover:shadow-md focus:shadow-md active:shadow-md"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href="#!"
                    role="button"
                  >
                    Далее
                  </a>
                </div>
                <div className="mb-12 lg:mb-0">
                  <img
                    src={header_img}
                    className="w-full rounded-lg shadow-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Content;
