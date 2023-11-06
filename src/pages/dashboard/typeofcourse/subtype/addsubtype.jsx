import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AddCourse = () => {
    return (
        <div className="addinterest-container">
        <Link className="back-dashboard" to="/areaofinterest">
          <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
        </Link>
        <div className="box-interest">
          <div className="box-content-interest">
            <h1 className="logo-title">Logo</h1>
            <h1 className="title-interest">Novo Subtipo de Curso</h1>
            <div className="campo campo-type">
              <div className="label-container-type">
                <label htmlFor="nome" title="Exemplo: ">
                Curso *
                </label>
                <label htmlFor="nome" title="Exemplo: ">
                Descrição do Subtipo de Curso *
                </label>
                <label className="ativo" htmlFor="ativo">Ativo *</label>
              </div>
              <div className="input-container-type">
              <select id="typeofcourse" required>
                        <option value="">Selecione...</option>
                        <option value="opcao1">Opção 1</option>
                        <option value="opcao2">Opção 2</option>
                        <option value="opcao3">Opção 3</option>
                    </select>
                <input type="text" id="desc" required />
                <input type="checkbox" className="checkbox-input" />
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

export default AddCourse;
