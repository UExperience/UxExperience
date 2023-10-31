import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Formulario = () => {
    return (
        <div className="addinterest-container">
            <Link className="back-dashboard" to="/areaofinterest">
                <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
            </Link>
            <div className="box-interest">
                <div className="box-content-interest">
                    <h1 className="logo-title">Logo</h1>
                    <h1 className="title-interest">Nova Área de Interesse</h1>
                    <div className="campo interest-campo">
                        <div className="label-container">
                            <label htmlFor="nome" title="Exemplo: ">Descrição da Área de Interesse *</label>
                            <label htmlFor="ativo">Ativo *</label>
                        </div>
                        <div className="input-container">
                            <input type="text" id="nome" required />
                            <input type="radio" id="radio" />
                        </div>
                    </div>
                    <Link to="/changepassword">
                        <button>Salvar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Formulario;
