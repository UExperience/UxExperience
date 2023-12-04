import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RevistasAcademicas = () => {
    return (

        <form className="formulario-container">
            <Link className="back-dashboard" to="/">
                <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
            </Link>
            <img src="public/UIUX-Design.svg" alt="" className="logo-institution" />
            <div className="grupo">
                <div className="campo">
                    <label htmlFor="nome" title="Exemplo: ">Descrição *</label>
                    <input type="text" id="nome" required />
                </div>
                <div className="campo">
                    <label htmlFor="" title="Exemplo: ">Link *</label>
                    <input type="" id="" required />
                </div>
                <div className="campo">
                    <label htmlFor="" title="">Tipo *</label>
                    <select type="text" id="" placeholder="" required />
                </div>
            </div>

            <div className="grupo">
                <div className="campo">
                    <label htmlFor="" title="Exemplo: ">Subtipo *</label>
                    <input type="text" id="" placeholder="" required />
                </div>
                <div className="campo">
                    <label htmlFor="" title="Exemplo: ">Valor *</label>
                    <input type="text" id="" placeholder="" required />
                </div>
                <div className="campo">
                    <label htmlFor="" title="Exemplo: ">Área Acadêmica *</label>
                    <select type="text" id="" placeholder="" required />
                </div>
            </div>

            <div className="grupo">
                <div className="campo">
                    <label htmlFor="" title="">Paginas *</label>
                    <input type="text" id="paginas" placeholder="" required />
                </div>

            </div>



            <button className="enviar-button">Enviar</button>
        </form>

    )
}

export default RevistasAcademicas;