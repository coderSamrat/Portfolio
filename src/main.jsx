import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Home, Projects, Contact } from './Component/index.js';
import ProjectView from './Pages/ProjectView.jsx';

const router = createBrowserRouter(
      createRoutesFromElements(
            <Route path="/" element={<App />}>
                  <Route path='/' element={<Home />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path='projectview' element={<ProjectView />}>
                        <Route path=":projectsId" element={<ProjectView />} />
                  </Route>
                  <Route path="contact" element={<Contact />} />
            </Route>
      )
);

createRoot(document.getElementById('root')).render(
      <StrictMode>
            <RouterProvider router={router} />
      </StrictMode>
);
