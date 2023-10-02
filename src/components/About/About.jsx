import React from "react";
import "tailwindcss/tailwind.css";
import content_img from '../../assets/images/content_1.jpeg';
import styles from './About.module.css'; // Подключаем стили модуля

const About = () => {
  return (
    <div className={`relative overflow-hidden ${styles['background-radial-gradient']} bg-[hsl(218, 41%, 15%)]`}>
      <div className="flex px-20 text-white max-[991px]:p-10 max-[767px]:min-h-[auto] max-[479px]:p-8 py-16 items-start md:items-stretch relative">
        <div className="grid gap-12 lg:gap-[90px] grid-cols-1 md:grid-cols-2">
          <div className="flex-col flex items-start justify-center gap-4 bg-[your-color] py-6 px-4 rounded-lg">
            <div className="flex items-center justify-center rounded-[80px] bg-white py-2 text-sm font-semibold uppercase text-[#FE390C] px-5">Чем мы занимаемся?</div>
            <div className="w-full max-w-xs">
              <h2 className="font-bold text-white text-3xl md:text-2xl text-shadow-sm">Создаем тепло и комфорт в каждом доме в городе Ростов-на-Дону!</h2>
            </div>
            <p className="text-white text-shadow-sm">Профессиональное утепление и шумоизоляция. Воплощаем надежные решения для вашего уюта. Сделаем ваш дом по-настоящему уютным и теплым! Мы - ваш надежный партнер по утеплению и шумоизоляции в Ростове-на-Дону. Независимо от размеров и сложности проекта, наша команда готова обеспечить высококачественное утепление ваших помещений.</p>
          </div>
          <div className="relative flex items-center justify-center max-[767px]:min-h-[320px] max-[479px]:min-h-[160px]">
            <img className="h-auto max-w-lg ml-auto rounded-xl" src={content_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
