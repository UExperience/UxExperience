import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faPencil, faSquarePen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Table = ({ data }) => {
    return (
        <div className="table-container">
            <div className="table">
                <thead className="table-head">
                    <tr>
                        <th>ID</th>
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
    );
};

export default Table;
