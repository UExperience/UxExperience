import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavAdmin from "../../../components/nav-admin.jsx";
import Table from "../../../components/table.jsx"; 


const AreaofInterest = () => {
    const data = [
        { id: 1, descricao: "Lorem ipsum", ativo: true, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 2, descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 3, descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 4, descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 5, descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 6, descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 7, descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
    ];

    return (
        <div>
            <NavAdmin />
            <section className="dashboard responsive-dashboard">
                <div className="title-content-interest">
                    <div className="title-wrapper">
                        <span className="title-security">Área de Interesse</span>
                    </div>
                    <div className="new-button">
                    <Link to="/addinterest"><button>Novo</button></Link>
                    </div>
                </div>
                <Table data={data} /> 
            </section>
        </div>
    );
};

export default AreaofInterest;
