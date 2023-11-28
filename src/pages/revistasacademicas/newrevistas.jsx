import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RevistasAcademicas = () => {
    return (

        <form className="formulario-container">
            <Link className="back-dashboard" to="/revistasacademicas">
                <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
            </Link>
            <img src="public/UIUX-Design.svg" alt="" className="logo-institution" />
            <div className="grupo">
                <div className="campo">
                    <label htmlFor="nome" title="Exemplo: ">Nome da Revista Científica *</label>
                    <input type="text" id="nome" required />
                </div>
                <div className="campo">
                    <label htmlFor="" title="Exemplo: ">Website *</label>
                    <input type="" id="" required />
                </div>
                <div className="campo">
                    <label htmlFor="" title="">Ano de Criação *</label>
                    <input type="text" id="" placeholder="" required />
                </div>
                <div className="campo">
                    <label htmlFor="" title="">Áreas de Publicação *</label>
                    <input type="text" id="" placeholder="" required />
                </div>
            </div>

            <div className="grupo">
                <div className="campo">
                    <label htmlFor="" title="Exemplo: ">Periodicidade *</label>
                    <input type="text" id="" placeholder="" required />
                </div>
                <div className="campo">
                    <label htmlFor="" title="Exemplo: ">Volume Atual *</label>
                    <input type="text" id="" placeholder="" required />
                </div>
                <div className="campo">
                    <label htmlFor="" title="Exemplo: ">Indexadores *</label>
                    <input type="text" id="" placeholder="" required />
                </div>
                <div className="campo">
                    <label htmlFor="" title="Exemplo: ">Avaliação da Revista *</label>
                    <input type="text" id="" placeholder="" required />
                </div>
            </div>

            <div className="grupo">
                <div className="campo">
                    <label htmlFor="" title="">Detalhes do Evento *</label>
                    <textarea id="" placeholder="" required />
                </div>
                <div className="campo" id="campo2">
                    <label htmlFor="" title="">Data e Hora do Evento *</label>
                    <input type="datetime-local" id="" placeholder="" required />
                </div>

            </div>



            <button className="enviar-button">Enviar</button>
        </form>

    )
}

export default RevistasAcademicas;