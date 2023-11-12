import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Formulario from "../../../components/form.jsx";

const AddCourse = () => {
    return (
        <div>
      <Link className="back-dashboard" to="/project">
        <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
      </Link>
        <Formulario
        title="Novo Tipo de Projeto"
        description="Descrição do Tipo de Projeto *"
        buttonText="Salvar"
        />
      
        </div>
    );
};

export default AddCourse;
