import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import './css/responsive.css';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/menu/index.jsx';
import User from './pages/dashboard/index/index.jsx';
import Login from './pages/login/index.jsx';
import Cadastro2 from './pages/cadastro/cadastro2.jsx';
import Cadastro1 from './pages/cadastro/cadastro1.jsx';
import SecurityandPrivacy from './pages/dashboard/securityandprivacy/index.jsx';
import ChangePassword from './pages/dashboard/securityandprivacy/changepassword.jsx';
import Institution from './pages/dashboard/institution/index.jsx';
import AddInstitution from './pages/dashboard/institution/addinstitution.jsx';
import AreaofInterest from './pages/dashboard/area​interest/index.jsx';
import AddInterest from './pages/dashboard/area​interest/addareainterest.jsx'
import AcademicArea from './pages/dashboard/academicarea/index.jsx';
import AddAcademic from './pages/dashboard/academicarea/addacademic.jsx';
import TypeofCourse from './pages/dashboard/typeofcourse/index.jsx';
import AddCourse from './pages/dashboard/typeofcourse/addcourse.jsx';
import SubTypeofCourse from './pages/dashboard/typeofcourse/subtype/index.jsx';
import AddSubType from './pages/dashboard/typeofcourse/subtype/addsubtype.jsx';
import Events from './pages/dashboard/eventsadmin/index.jsx';
import AddEvents from './pages/dashboard/eventsadmin/addevents.jsx';
import TypeEvents from './pages/dashboard/eventsadmin/typeevents/typevents.jsx';
import AddTypeEvents from './pages/dashboard/eventsadmin/typeevents/addtypeevents.jsx';
import Agend from './pages/dashboard/agend/index.jsx';
import AddAgend from './pages/dashboard/agend/addagend.jsx';
import TypeAgend from './pages/dashboard/agend/typeagend/index.jsx';
import AddTypeAgend from './pages/dashboard/agend/typeagend/addtype.jsx';
import Project from './pages/dashboard/typeproject/index.jsx';
import AddProject from './pages/dashboard/typeproject/addproject.jsx';


import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cadastro2',
    element: <Cadastro2 />,
  },
  {
    path: '/cadastro1',
    element: <Cadastro1 />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/securityandprivacy',
    element: <SecurityandPrivacy />,
  },
  {
    path: '/changepassword',
    element: <ChangePassword />,
  },
  {
    path: '/institution',
    element: <Institution />,
  },
  {
    path: '/addinstitution',
    element: <AddInstitution />,
  },
  {
    path: '/areaofinterest',
    element: <AreaofInterest />,
  },
  {
    path: '/addinterest',
    element: <AddInterest />,
  },
  {
    path: '/academicarea',
    element: <AcademicArea />,
  },
  {
    path: '/addacademic',
    element: <AddAcademic />,
  },
  {
    path: '/typeofcourse',
    element: <TypeofCourse />,
  },
  {
    path: '/addcourse',
    element: <AddCourse />,
  },
  {
    path: '/subtype',
    element: <SubTypeofCourse />,
  },
  {
    path: '/addsubtype',
    element: <AddSubType />,
  },
  {
    path: '/events',
    element: <Events />,
  },
  {
    path: '/addevents',
    element: <AddEvents />,
  },
  {
    path: '/typeevents',
    element: <TypeEvents />,
  },
  {
    path: '/addtypeevents',
    element: <AddTypeEvents />,
  },
  {
    path: '/agend',
    element: <Agend />,
  },
  {
    path: '/addagend',
    element: <AddAgend />,
  },
  {
    path: '/typeagend',
    element: <TypeAgend />,
  },
  {
    path: '/addtypeagend',
    element: <AddTypeAgend />,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/addproject',
    element: <AddProject />,
  },
]);

const root = document.getElementById('login');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Routes />
    </RouterProvider>
  </React.StrictMode>,
);

reportWebVitals();