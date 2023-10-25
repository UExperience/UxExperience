import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faBell,
    faShield,
    faSquare,
    faSquarePlus,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ChangePassword = () => {
    return (
        <form className="change-container">
            <Link className="back-dashboard" to="/securityandprivacy">
                <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
            </Link>
            <img src="public/UIUX-Design.svg" alt="" className="logo-change" />
            <h1>Altere sua senha</h1>
            <p>Crie uma senha longa e complexa, com letras</p>
            <p>maiúsculas, minúsculas, números e símbolos.</p>
            <div className="change-input">
                <div className="input-group">
                    <label htmlFor="currentPassword">Senha atual</label>
                    <input type="password" id="currentPassword" name="currentPassword" />
                </div>
                <div className="input-group">
                    <label htmlFor="newPassword">Nova senha</label>
                    <input type="password" id="newPassword" name="newPassword" />
                    <div className="progress-box">
                        <div className="progress-bar bar1"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ChangePassword;
