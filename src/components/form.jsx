import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Formulario = ({ title, description, buttonText }) => {
  return (
    <div className="addinterest-container">
      <div className="box-interest">
        <div className="box-content-interest">
          <h1 className="logo-title">Logo</h1>
          <h1 className="title-interest">{title}</h1>
          <div className="campo interest-campo">
            <div className="label-container">
              <label htmlFor="nome" title="Exemplo: ">
                {description}
              </label>
              <label htmlFor="ativo">Ativo *</label>
            </div>
            <div className="input-container">
              <input type="text" id="nome" required />
              <input type="checkbox" className="checkbox-input" />
            </div>
          </div>
          <Link to="/changepassword">
            <button>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
