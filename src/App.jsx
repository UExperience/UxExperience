import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css';
import './css/responsive.css';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/menu/index.jsx';
import User from './pages/dashboard/index/index.jsx'
import Login from './pages/login/index.jsx';
import Cadastro2 from './pages/cadastro/cadastro2.jsx';
import Cadastro1 from './pages/cadastro/cadastro1.jsx'
import SecurityandPrivacy from './pages/dashboard/securityandprivacy/index.jsx'
import ChangePassword from './pages/dashboard/securityandprivacy/changepassword.jsx'
import Institution from './pages/dashboard/institution/index.jsx'
import AddInstitution from './pages/dashboard/institution/addinstitution.jsx'
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