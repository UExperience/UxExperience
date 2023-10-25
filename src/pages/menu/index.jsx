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
              <span className="text nav-text">ACADEMIA P&D</span>
            </a>
          </li>
          {activeMenu === "academia" && (
            <ul className="sub-menu">
              <li>
                <a href="#">PESQUISAS E PROJETOS CONJUNTOS</a>
              </li>
              <li>
                <a href="#">EDITAIS E BOLSAS</a>
              </li>
              <li>
                <a href="#">REVISTAS ACADÊMICAS</a>
              </li>
              <li>
                <a href="#">CURSOS VIRTUAIS</a>
              </li>
            </ul>
          )}
          <li className="nav-link">
            <a href="#" onClick={() => toggleSubMenu("consultoria")}>
              <FontAwesomeIcon className="icon" icon={faComments} />
              <span className="text nav-text">CONSULTORIA</span>
            </a>
          </li>
          {activeMenu === "consultoria" && (
            <ul className="sub-menu">
              <li>
                <a href="#">DIAGNÓSTICO INSTITUCIONAL</a>
              </li>
              <li>
                <a href="#">NETWORKING INTERNACIONAL</a>
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
            </ul>
          )}
          <li className="nav-link">
            <a href="#" onClick={() => toggleSubMenu("projetosInstitucionais")}>
              <FontAwesomeIcon className="icon" icon={faChartSimple} />
              <span className="text nav-text">PROJETOS INSTITUCIONAIS</span>
            </a>
          </li>
          {activeMenu === "projetosInstitucionais" && (
            <ul className="sub-menu">
              <li>
                <a href="#">OPORTUNIDADES NACIONAIS E INTERNACIONAIS</a>
              </li>
              <li>
                <a href="#">PALESTRANTES INTERNACIONAIS</a>
              </li>
              <li>
                <a href="#">INTERCÂMBIO DISCENTE E DOCENTE</a>
              </li>
            </ul>
          )}
          <li className="nav-link">
            <a href="#" onClick={() => toggleSubMenu("eventos")}>
              <FontAwesomeIcon className="icon" icon={faCalendar} />
              <span className="text nav-text">EVENTOS</span>
            </a>
          </li>
          {activeMenu === "eventos" && (
            <ul className="sub-menu">
              <li>
                <a href="#">U.EX INTERNATIONAL CONFERENCE</a>
              </li>
              <li>
                <a href="#">INTERNATIONAL INCUBATION PROGRAM</a>
              </li>
              <li>
                <a href="#">INTERNATIONAL STUDENTS SYMPOSIUM</a>
              </li>
            </ul>
          )}
        </ul>
      </div>

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
  );
};

export default MenuLateral;
