import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEyeSlash, faPencil, faSquarePen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Table = () => {
    const data = [
        {
            id: 1, tipo: "Lorem ipsum", subtipo: 'Lorem ipsum', areaacademica: "Lorem ipsum", ativo: 'Sim',
            criadoem: '2023-10-30', excluidoem: '2023-10-30'
        },
    ];
    return (
        <section className="dashboard-revista responsive-dashboard">
            <Link className="back-dashboard" to="/">
                <FontAwesomeIcon className="back-dashboard" icon={faArrowLeft} />
            </Link>

            <div className="title-content-interest">
                <div className="title-wrapper">
                    <span className="title-security">Cursos Virtuais</span>
                </div>
            </div>
            <div className="table-container-revistas">
                <div className="table-revistas">
                    <thead className="table-head">
                        <tr>
                            <th>ID</th>
                            <th>Tipo</th>
                            <th>Subtipo</th>
                            <th>Área Acadêmica</th>
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
                                <td>{item.tipo}</td>
                                <td>{item.subtipo}</td>
                                <td>{item.areaacademica}</td>
                                <td>{item.ativo ? "Sim" : "Não"}</td>
                                <td>{item.criadoem}</td>
                                <td>{item.excluidoem}</td>
                                <div class="">
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
    );
};

export default Table;
