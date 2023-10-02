import React from "react";
import 'tailwindcss/tailwind.css';
import Card from "./Card";
import one from '../../assets/icons/one.svg';
import two from '../../assets/icons/two.svg';
import three from '../../assets/icons/three.svg';
import tool_icon from '../../assets/icons/tool_icon.svg';

const Service = () => {
  const cardsData = [
    {
      title: "Утепление горизонтальных поверхностей",
      imageSrc: one,
      description: "Обеспечим теплоизоляцию как для открытых, так и для закрытых горизонтальных поверхностей, чтобы ваше пространство было защищено от холода и перепадов температур.",
    },
    {
      title: "Утепление внутренних пространств",
      imageSrc: two,
      description: "Обеспечим оптимальную теплоизоляцию для пола, потолка и перекрытий, чтобы вы могли наслаждаться теплом и тишиной внутри помещений.",
    },
    {
      title: "Утепление крыши и мансарды",
      imageSrc: three,
      description: "Обеспечим оптимальную теплоизоляцию для пола, потолка и перекрытий, чтобы вы могли наслаждаться теплом и тишиной внутри помещений.",
    },
    {
      title: "Дополнительные услуги",
      imageSrc: tool_icon,
      description: "Обеспечим оптимальную теплоизоляцию для пола, потолка и перекрытий, чтобы вы могли наслаждаться теплом и тишиной внутри помещений.",
    },
  ];

  return (
    <div className="service">
      <h1 className="text-3xl mb-4 text-red-600 flex items-center justify-center mt-10">
  Наши услуги
</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Service;
