import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FormSub = ({ title, options, buttonText }) => {
  return (
    <div className="addinterest-container">
      <div className="box-interest">
        <div className="box-content-interest">
          <h1 className="logo-title">Logo</h1>
          <h1 className="title-interest">{title}</h1>
          <div className="campo campo-type">
            <div className="label-container-type">
              {options.map((option, index) => (
                <label key={index} htmlFor={option.id} title={option.example}>
                  {option.label}
                </label>
              ))}
              <label className="ativo" htmlFor="ativo">Ativo *</label>
            </div>
            <div className="input-container-type">
              <select id="typeofcourse" required>
                <option value="">Selecione...</option>
                {options.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.value}
                  </option>
                ))}
              </select>
              <input type="text" id="desc" required />
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

export default FormSub;
