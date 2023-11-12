import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Formulario from '../../../components/form.jsx'

const AddAcademicAreaForm = () => {
    return (
        <div>
            <Link className="back-dashboard" to="/academicarea">
                <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
            </Link>
            <Formulario
                title="Nova Área Acadêmica"
                description="Descrição da Área Acadêmica *"
                buttonText="Salvar"
            />
        </div>
    );
};

export default AddAcademicAreaForm;
