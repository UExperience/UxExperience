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
import NavAdmin from "../../../components/nav-admin.jsx";

const SecurityandPrivacy = () => {
    return (
        <div>
    <NavAdmin /> 
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
                        {/* Content for the first box */}
                    </div>
                    <div className="box">
                        <div className="box-content">
                            <h1 className="title-second">Alteração de senha</h1>
                            <p>Escolha uma senha forte que você não esteja usando em nenhum outro lugar.</p>
                            <p>Troque sua senha a cada seis meses para aumentar a segurança da sua conta.</p>
                            <Link to="/changepassword"> <button> Alterar senha </button> </Link>
                        </div>
                    </div>
                    <div className="box">
                        {/* Content for the third box */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecurityandPrivacy;
