import React from "react";
import "tailwindcss/tailwind.css";
import content_img from '../../assets/images/content_1.jpeg';



const About = () => {
  return (
    (
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="container mx-auto text-center lg:text-left xl:px-32">
            <div className="flex grid items-center lg:grid-cols-2">
              <div className="mb-12 lg:mb-0">
                <div className="block rounded-lg bg-opacity-55 bg-white px-6 py-12 shadow-md dark:bg-opacity-55 dark:bg-black/20 md:px-12 lg:-mr-14 backdrop-blur-md">
                  <h3 className="mb-3 text-2xl font-bold">
                    О нас
                  </h3>
                  <h5 className="mb-12 text-lg font-bold text-primary dark:text-primary-400 lg:mb-10 xl:mb-12">
                    Чем мы занимаемся?
                  </h5>
  
                  <p className="mb-4 font-bold">
                    Создаем тепло и комфорт в каждом доме в городе Ростов-на-Дону!
                  </p>
                  <p className="mb-6 text-gray-500 dark:text-neutral-300">
                    Профессиональное утепление и шумоизоляция.
                    Воплощаем надежные решения для вашего уюта.
                    Сделаем ваш дом по-настоящему уютным и теплым!
                    Мы - ваш надежный партнер по утеплению и шумоизоляции в Ростове-на-Дону. 
                    Независимо от размеров и сложности проекта,
                    наша команда готова обеспечить высококачественное утепление ваших помещений.
                  </p>
                </div>
              </div>
  
              <div>
                <img
                  src={content_img}
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default About;
