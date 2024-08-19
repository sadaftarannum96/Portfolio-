import React from 'react';
import Reactjs from '../../public/Reactjs.png';
import Html from '../../public/Html.png';
import css from '../../public/css.png';
import js from '../../public/js.png';
import Mui from '../../public/Mui.jpeg';
import Bootstrap from '../../public/Bootstrap.png';
import redux from '../../public/redux.png'
import Git from '../../public/Git.png';
import Typscript from '../../public/Typescript.png'

const skills = [
  { id: 1, name: 'React', logo: Reactjs },
  { id: 2, name: 'Html', logo: Html },
  { id: 3, name: 'css', logo: css },
  { id: 4, name: 'javascript', logo: js },
  { id: 5, name: 'MUI', logo: Mui },
  { id: 6, name: 'Bootstrap', logo: Bootstrap },
  { id: 7, name: 'redux', logo: redux },
  { id: 8, name: 'Typscript', logo: Typscript },
  { id: 9, name: 'Git', logo: Git },
];

const Skills = () => {
  return (
    <>
      <div name='Skills'>
        <section id="skills" className="p-8 ">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.map(skill => (
                <div key={skill.id} className="flex flex-col items-center bg-white p-4 rounded">
                  <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-2" />
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
};

export default Skills;
