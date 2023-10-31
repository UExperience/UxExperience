import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Formulario = () => {
    return (

        <form className="formulario-container">
            <Link className="back-dashboard" to="/institution">
                <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
            </Link>
            <img src="public/UIUX-Design.svg" alt="" className="logo-institution" />
            <div className="grupo">
                <div className="campo">
                <label htmlFor="nome" title="Exemplo: ">Razão Social *</label>
                    <input type="text" id="nome" required />
                </div>
                <div className="campo">
                    <label htmlFor="email" title="Exemplo: ">E-mail de Contato da Instituição *</label>
                    <input type="email" id="email" required />
                </div>
                <div className="campo">
                    <label htmlFor="cnpj" title="Somente números">CNPJ *</label>
                    <input type="text" id="cnpj" placeholder="99.999.999/9999-99" required />
                </div>
            </div>

            <div className="grupo">
                <div className="campo">
                    <label htmlFor="telefone" title="Exemplo: ">Telefone *</label>
                    <input type="tel" id="telefone" placeholder="+(DDI) (DDD) _ _ _ _ _ - _ _ _ _" required />
                </div>
                <div className="campo">
                    <label htmlFor="interesse" title="Exemplo: ">Áreas de Interesse para Conexão Internacional *</label>
                    <select id="interesse" required>
                        <option value="">Selecione...</option>
                        <option value="opcao1">Opção 1</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                    </select>
                </div>
                <div className="campo">
                    <label htmlFor="tipo-institution" title="Exemplo: ">Tipo de Cadastro *</label>
                    <select id="tipo-institution" required>
                        <option value="">Selecione...</option>
                        <option value="opcao1">Opção 1</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                    </select>
                </div>
            </div>

            <div className="grupo">
                <div className="campo">
                    <label htmlFor="dominio" title="@edu.uex.br">Domínio Institucional *</label>
                    <input type="text" id="dominio" placeholder="@edu.uex.br"required />
                </div>
                <div className="campo3">
                    <label htmlFor="consultoria" title="Exemplo: ">Tem interesse em contratar serviço adicional de consultoria individualizada?  *</label>
                    <div className="radio-group">
                        <label>
                        Sim <input type="radio" name="consultoria" value="sim" required /> 
                        </label>
                        <label>
                        Não <input type="radio" name="consultoria" value="nao" required />
                        </label>
                    </div>
                </div>
            </div>

            <button className="enviar-button">Enviar</button>
        </form>
    );
};

export default Formulario;
