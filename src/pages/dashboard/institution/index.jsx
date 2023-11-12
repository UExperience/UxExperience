import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faShield,
    faSquare,
    faSquarePen,
    faSquarePlus,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavAdmin from "../../../components/nav-admin.jsx";

const Institution = () => {
    return (
        <div>
    <NavAdmin /> 
            <section className="dashboard">
                <div className="title-content">
                    <div className="title-wrapper">
                        <span className="title-security">Instituição de Ensino</span>
                        <div className="sub-title">
                            <span>Adicione, edite ou exclua instituições de ensinos</span>
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
                            <h1 className="title-second">Editar Instituição de Ensino</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to="#"> <button> Editar Instituição </button> </Link>
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
