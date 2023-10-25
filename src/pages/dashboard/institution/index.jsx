import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faShield,
    faSquare,
    faSquarePlus,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Institution = () => {
    return (
        <div>
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
                            <Link to="/configuracoes">
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
                            <Link to="/configuracoes">
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
                    </ul>

                    <ul className="logout-mode">
                        <li>
                            <Link to="/configuracoes">
                                <i className="uil uil-signout"></i>
                                <span className="link-name">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="dashboard">
                <div className="title-content">
                    <div className="title-wrapper">
                        <span className="title-security">Segurança e Privacidade</span>
                        <div className="sub-title">
                            <span>Aumente o controle e a segurança da sua conta</span>
                        </div>
                    </div>
                </div>
                <div className="box-container">
                    <div className="box">
                    <div className="box-content">
                            <h1 className="title-second">Adicionar Instituição de Ensino</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to="/addinstitution"> <button> Adicionar Instituição </button> </Link>
                        </div>
                    </div>
                    <div className="box">
                    <div className="box-content">
                            <h1 className="title-second">Adicionar Instituição de Ensino</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to="/changepassword"> <button> Editar Instituição </button> </Link>
                        </div>
                    </div>
                    <div className="box">

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Institution;
