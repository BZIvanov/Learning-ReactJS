import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

const services = [
  {
    icon: <FaCocktail />,
    title: 'free cocktails',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
  },
  {
    icon: <FaHiking />,
    title: 'Endless Hiking',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
  },
  {
    icon: <FaShuttleVan />,
    title: 'Free shuttle',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
  },
  {
    icon: <FaBeer />,
    title: 'Strongest Beer',
    info:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
  },
];

const Services = () => {
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((service, index) => {
          return (
            <article key={index} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
