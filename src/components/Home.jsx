import React from 'react';
import { FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { ReactTyped, Typed } from "react-typed";
import pic from '../../public/coderprofile.jpeg';

function Home() {
  return (
    <>
      <div name='Home'>
        <section id="home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${pic})` }}>
          <div className="container mx-auto h-full  flex flex-col justify-center items-center  bg-opacity-50">
            <h1 className="text-5xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
            <ReactTyped
              className="text-xl text-fuchsia-200 mb-4"
              strings={['Hey, I am Sadaf Tarannum', 'I am a Web Developer', 'I love coding❤️']}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
            <p className="md:text-xl font-bold text-fuchsia-500 pt-8">Available On</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com" target="_blank" className="text-white text-3xl">
                <FaFacebook />
              </a>
              <a href="https://github.com" target="_blank" className="text-white text-3xl">
                <FaTelegram />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-white text-3xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
