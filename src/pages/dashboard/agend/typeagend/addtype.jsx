import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormSub from '../../../../components/formsub.jsx';

const AddCourse = () => {
  const options = [
    { id: "opcao1",  value: "Teste", label: "Agenda *", example: "Exemplo 1"},
    { id: "opcao2",  value: "Teste", label: "Descrição do Tipo de Agenda", example: "Exemplo 2" },
    
  ];
    return (
        <div>
        <Link className="back-dashboard" to="/typeagend">
          <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
        </Link>
        <FormSub title="Novo Tipo de Agenda" options={options} buttonText="Salvar" />
       </div>
    );
};

export default AddCourse;
