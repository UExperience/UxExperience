import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Formulario from "../../../components/form.jsx";

const AddAreaInterestForm = () => {
  return (
    <div>
      <Link className="back-dashboard" to="/areaofinterest">
        <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
      </Link>
      <Formulario
        title="Nova Área de Interesse"
        description="Descrição da Área de Interesse *"
        buttonText="Salvar"
        />
        </div>
  );
};

export default AddAreaInterestForm;
