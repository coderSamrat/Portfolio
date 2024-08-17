import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import { useParams } from 'react-router-dom';
import { ProjectDisplay } from '../Component/index.js';


const ProjectView = () => {
      const { all_project } = useContext(Context);
      const { projectsId } = useParams();

      const projects = all_project.find(item => item.id === Number(projectsId));

      return (
            <div>
                  <ProjectDisplay projects={projects} />
            </div>
      );
};

export default ProjectView;
