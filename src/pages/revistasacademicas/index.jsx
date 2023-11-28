import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faPencil, faSquarePen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Table = () => {
    const data = [
        { id: 1, nome: "Lorem ipsum", website: 'Lorem ipsum', anodecriacao: "2023-10-30", periodicidade: 'Lorem ipsum',
         volumeatual: 'Lorem ipsum', indexadores: 'Lorem ipsum', avaliacao: 'Lorem ipsum', dataehora: 'Lorem ipsum' },
        { id: 2, nome: "Lorem ipsum", website: 'Lorem ipsum', anodecriacao: "2023-10-30", periodicidade: 'Lorem ipsum',
         volumeatual: 'Lorem ipsum', indexadores: 'Lorem ipsum', avaliacao: 'Lorem ipsum', dataehora: 'Lorem ipsum' },
        { id: 3, nome: "Lorem ipsum", website: 'Lorem ipsum', anodecriacao: "2023-10-30", periodicidade: 'Lorem ipsum',
         volumeatual: 'Lorem ipsum', indexadores: 'Lorem ipsum', avaliacao: 'Lorem ipsum', dataehora: 'Lorem ipsum' },

    ];
    return (
        <section className="dashboard-revista responsive-dashboard">
            <div className="title-content-interest">
                <div className="title-wrapper">
                    <span className="title-security">Área de Interesse</span>
                </div>
                <div className="new-button">
                    <Link to="/newrevistasacademicas"><button>Novo</button></Link>
                </div>
            </div>
            <div className="table-container-revistas">
                <div className="table-revistas">
                    <thead className="table-head">
                        <tr>
                            <th>ID</th>
                            <th>Nome </th>
                            <th>Website</th>
                            <th>Ano de Criação</th>
                            <th>Periodicidade</th>
                            <th>Volume Atual</th>
                            <th>Indexadores</th>
                            <th>Avaliação da Revista</th>
                            <th>Data e Hora do Evento</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.website}</td>
                                <td>{item.anodecriacao}</td>
                                <td>{item.periodicidade}</td>
                                <td>{item.volumeatual}</td>
                                <td>{item.indexadores}</td>
                                <td>{item.avaliacao}</td>
                                <td>{item.dataehora}</td>
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
    );
};

export default Table;
