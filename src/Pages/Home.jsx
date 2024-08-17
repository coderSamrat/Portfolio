import React from 'react';
import { Hero, About, ProjectPreview, UsingTechnology, SayHello } from '../Component/index.js';

const Home = () => {
      return (
            <div>
                  <Hero />
                  <About />
                  <UsingTechnology />
                  <ProjectPreview />
                  <SayHello />
            </div>
      );
};

export default Home;
