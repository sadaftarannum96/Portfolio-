import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Creating responsive and high-performance web applications.',
    logo: '🌐',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Designing user-friendly and beautiful interfaces.',
    logo: '🎨',
  },
  {
    id: 3,
    title: 'SEO Optimization',
    description: 'Improving your website ranking on search engines.',
    logo: '🚀',
  },
];

const Services = () => {
  return (
    <>
      <div name='Services'>
        <section id="services" className="p-8 bg-fuchsia-100">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-8">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map(service => (
                <motion.div
                  key={service.id}
                  className="service-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="service-card-inner">
                    <div className="service-card-front">
                      <div className="service-card-logo">{service.logo}</div>
                    </div>
                    <div className="service-card-back">
                      <h3 className="service-card-title">{service.title}</h3>
                      <p className="service-card-description">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
};

export default Services