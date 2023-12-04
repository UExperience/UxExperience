import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGraduationCap,
  faComments,
  faBuildingColumns,
  faChartSimple,
  faCalendar,
  faUser,
  faGear,
  faTimes,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MenuLateral = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
      <header className="header-sidebar">
        <FontAwesomeIcon
          className={isSidebarOpen ? "toggle-close" : "toggle-open"}
          icon={isSidebarOpen ? faTimes : faBars}
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        />
      </header>

      <div className="menu-bar">
        <ul className="menu-links">
        <li className="nav-link">
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faHouse} />
              <span className="text nav-text">INÍCIO</span>
            </a>
          </li>
          <li className="nav-link">
            <a href="#" onClick={() => toggleSubMenu("academia")}>
              <FontAwesomeIcon className="icon" icon={faGraduationCap} />
              <span className="text nav-text">OPORTUNIDADES NACIONAIS E INTERNACIONAIS</span>
            </a>
          </li>
          {activeMenu === "academia" && (
            <ul className="sub-menu">
              <li>
                <a href="#">Divulgar oportunidades</a>
              </li>
              <li>
                <a href="#">Pesquisas Conjuntas</a>
              </li>
              <li>
                <a href="#">Intercâmbio docente e discente</a>
              </li>
              <li>
                <a href="#">Eventos e Projetos nacionais e internacionais</a>
              </li>
              <li>
                <a href="#">Palestrantes internacionais</a>
              </li>
              <li>
                <Link to="/revistasacademicas">
                Revistas Acadêmicas
                </Link>
              </li>
            </ul>
          )}
          <li className="nav-link">
            <a href="#" onClick={() => toggleSubMenu("gestaoDRI")}>
              <FontAwesomeIcon className="icon" icon={faBuildingColumns} />
              <span className="text nav-text">GESTÃO DO DRI</span>
            </a>
          </li>
          {activeMenu === "gestaoDRI" && (
            <ul className="sub-menu">
              <li>
                <a href="#">REPOSITÓRIO DA INTERNACIONALIZAÇÃO</a>
              </li>
              <li>
                <a href="#">RELATÓRIOS E EVIDÊNCIAS INSTITUCIONAIS</a>
              </li>
              <li>
                <a href="#">Consultoria</a>
              </li>
              <li>
                <a href="#">Diagnóstico institucional</a>
              </li>
              <li>
                <a href="#">Networking internacional</a>
              </li>
              <li>
                <a href="#">GEPAI</a>
              </li>
              <li>
                <a href="#">Consultoria Específica</a>
              </li>
            </ul>
          )}
          <li className="nav-link">
            <a href="#" onClick={() => toggleSubMenu("projetosInstitucionais")}>
              <FontAwesomeIcon className="icon" icon={faChartSimple} />
              <span className="text nav-text">CURSOS VIRTUAIS</span>
            </a>
          </li>
          {activeMenu === "projetosInstitucionais" && (
            <ul className="sub-menu">
              <li>
                <Link to="/newcurso">Cadastrar Cursos</Link>
              </li>
              <li>
                <Link to="/listcurso">Listar Cursos</Link>
              </li>
            </ul>
          )}
        </ul>

      <div className="bottom-content">
        <li className="nav-link">
          <Link to="/user">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <span className="text nav-text">MINHA CONTA</span>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/configuracoes">
            <FontAwesomeIcon className="icon" icon={faGear} />
            <span className="text nav-text">CONFIGURAÇÕES</span>
          </Link>
        </li>
      </div>
    </div>
    </div>
  );
};

export default MenuLateral;
