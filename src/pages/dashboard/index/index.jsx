import React from "react";
import NavAdmin from "../../../components/nav-admin.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faShop, faUser, faUserCheck, faUserXmark } from "@fortawesome/free-solid-svg-icons";

const User = () => {
  return (
    <div>
      <NavAdmin />
      <section id="content">
        <main>
          <div className="head-title">
            <div className="left">
            </div>
            <a href="#" className="btn-download">
              <i className="bx bxs-cloud-download"></i>
              <span className="text">Download CSV</span>
            </a>
          </div>

          <ul className="box-info">
            <li>
              <div className="bx bxs-calendar-check">
              <FontAwesomeIcon icon={faUser}/>
              </div>
              <span className="text">
                <h3>000</h3>
                <p>Total de Usuários</p>
              </span>
            </li>
            <li>
            <div className="bx bxs-calendar-check">
              <FontAwesomeIcon icon={faUserCheck}/>
              </div>
              <span className="text">
                <h3>000</h3>
                <p>Usuários Ativos</p>
              </span>
            </li>
            <li>
            <div className="bx bxs-calendar-check">
              <FontAwesomeIcon icon={faUserXmark}/>
              </div>
              <span className="text">
                <h3>000</h3>
                <p>Usuários Inativos</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Atividades Recentes</h3>
                <i className="bx bx-search"></i>
                <i className="bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Nome Completo</th>
                    <th>Email</th>
                    <th>Instituição</th>
                    <th>CNPJ</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>01-10-2021</td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status completed">Aprovado</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>01-10-2021</td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status process">Pendente</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>01-10-2021</td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status pending">Reprovado</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default User;
