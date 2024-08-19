import React from 'react';
import pic from '../../public/AboutMe.avif'

const About = () => {
  return (
    <>
      <div name='About'>
        <section id="about" className="p-8 ">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
              <img src={pic} alt="Profile" className="rounded-full w-32 h-32 md:w-48 md:h-48 mr-8" />
              <p className="mt-4 md:mt-0">
                Hi, I'm Sadaf Tarannum, a web developer with a passion for creating amazing web applications.
                I have over 3+ years of experience in web development, specializing in React.
              </p>
            </div>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
};

export default About;
