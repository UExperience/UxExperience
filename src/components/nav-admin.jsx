import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faBook,
    faComputerMouse,
    faGraduationCap,
    faShield,
    faSquare,
    faSquarePen,
    faSquarePlus,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavAdmin = () => {
    return (
        <nav className="nav-admin">
            <div className="logo-name">
                <div className="logo-image">
                    <img src="public/UIUX-Design.svg" alt="" />
                </div>
                <span className="logo_name">U.Experience</span>
            </div>
            <div className="menu-items">
                <ul className="nav-links">
                    <li>
                        <Link to="/user">
                            <FontAwesomeIcon className="admin-icon" icon={faUser} />
                            <span className="link-name">Meu Cadastro</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/securityandprivacy">
                            <FontAwesomeIcon className="admin-icon" icon={faShield} />
                            <span className="link-name">Segurança e Privacidade</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <FontAwesomeIcon className="admin-icon" icon={faBell} />
                            <span className="link-name">Notificações</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/institution">
                            <FontAwesomeIcon className="admin-icon" icon={faSquarePlus} />
                            <span className="link-name">Instituições</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/areaofinterest">
                            <FontAwesomeIcon className="admin-icon" icon={faSquarePen} />
                            <span className="link-name">Áreas de Interesses</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/academicarea">
                            <FontAwesomeIcon className="admin-icon" icon={faBook} />
                            <span className="link-name">Área Acadêmica</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/typeofcourse">
                            <FontAwesomeIcon className="admin-icon" icon={faGraduationCap} />
                            <span className="link-name">Tipo de Curso</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/subtype">
                            <FontAwesomeIcon className="admin-icon" icon={faGraduationCap} />
                            <span className="link-name">Tipo de Curso</span>
                        </Link>
                    </li>
                </ul>

                <ul className="logout-mode">
                    <li>
                        <Link to="/">
                            <i className="uil uil-signout"></i>
                            <span className="link-name">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavAdmin;
