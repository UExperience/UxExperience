import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import './css/responsive.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/index/index.jsx';
import User from './pages/dashboard/index/index.jsx';
import Login from './pages/login/index.jsx';
import Cadastro1 from './pages/cadastro/cadastro1.jsx';
import SecurityandPrivacy from './pages/dashboard/securityandprivacy/index.jsx';
import ChangePassword from './pages/dashboard/securityandprivacy/changepassword.jsx';
import Institution from './pages/dashboard/institution/index.jsx';
import AddInstitution from './pages/dashboard/institution/addinstitution.jsx';
import AreaofInterest from './pages/dashboard/area​interest/index.jsx';
import AddInterest from './pages/dashboard/area​interest/addareainterest.jsx';
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
import RevistasAcademicas from './pages/revistasacademicas/index.jsx';
import NewRevistasAcademicas from './pages/revistasacademicas/newrevistas.jsx';
import AgendUser from './pages/agenduser/index.jsx';
import NewCurso from './pages/cursos/newcursos.jsx';
import ListCurso from './pages/cursos/listcursos.jsx';

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro1" element={<Cadastro1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/securityandprivacy" element={<SecurityandPrivacy />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/addinstitution" element={<AddInstitution />} />
          <Route path="/areaofinterest" element={<AreaofInterest />} />
          <Route path="/addinterest" element={<AddInterest />} />
          <Route path="/academicarea" element={<AcademicArea />} />
          <Route path="/addacademic" element={<AddAcademic />} />
          <Route path="/typeofcourse" element={<TypeofCourse />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/subtype" element={<SubTypeofCourse />} />
          <Route path="/addsubtype" element={<AddSubType />} />
          <Route path="/events" element={<Events />} />
          <Route path="/addevents" element={<AddEvents />} />
          <Route path="/typeevents" element={<TypeEvents />} />
          <Route path="/addtypeevents" element={<AddTypeEvents />} />
          <Route path="/agend" element={<Agend />} />
          <Route path="/addagend" element={<AddAgend />} />
          <Route path="/typeagend" element={<TypeAgend />} />
          <Route path="/addtypeagend" element={<AddTypeAgend />} />
          <Route path="/project" element={<Project />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/revistasacademicas" element={<RevistasAcademicas />} />
          <Route path="/newrevistasacademicas" element={<NewRevistasAcademicas />} />
          <Route path="/agenduser" element={<AgendUser />} />
          <Route path="/NewCurso" element={<NewCurso />} />
          <Route path="/listcurso" element={<ListCurso />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
};

const root = document.getElementById('login');

ReactDOM.createRoot(root).render(<App />);
