import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavAdmin from "../../../../components/nav-admin.jsx";
import Table from "../../../../components/table.jsx";
import { faEyeSlash, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";


const AreaofInterest = () => {
    const data = [
        { id: 1, curso: "Lorem ipsum", descricao: "Lorem ipsum", ativo: true, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 2, curso: "Lorem ipsum", descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 3, curso: "Lorem ipsum", descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 4, curso: "Lorem ipsum", descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 5, curso: "Lorem ipsum", descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 6, curso: "Lorem ipsum", descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
        { id: 7, curso: "Lorem ipsum", descricao: "Lorem ipsum", ativo: false, criadoEm: "2023-10-30", excluidoEm: "" },
    ];

    return (
        <div>
            <NavAdmin />
            <section className="dashboard responsive-dashboard">
                <div className="title-content-interest">
                    <div className="title-wrapper">
                        <span className="title-security">Tipo de Agenda</span>
                    </div>
                    <div className="new-button">
                        <Link to="/addtypeagend"><button>Novo</button></Link>
                    </div>
                </div>
                <div className="table-container-type">
                    <div className="table-type">
                        <thead className="table-head">
                            <tr>
                                <th>ID</th>
                                <th>Agenda</th>
                                <th>Descrição</th>
                                <th>Ativo</th>
                                <th>Criado em</th>
                                <th>Excluído em</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.curso}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.ativo ? "Sim" : "Não"}</td>
                                    <td>{item.criadoEm}</td>
                                    <td>{item.excluidoEm}</td>
                                    <div>
                                        <td><FontAwesomeIcon className="new" icon={faEyeSlash} /></td>
                                        <td><FontAwesomeIcon className="edit" icon={faPencil} /></td>
                                        <td><FontAwesomeIcon className="delete" icon={faTrash} /></td>
                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AreaofInterest;
