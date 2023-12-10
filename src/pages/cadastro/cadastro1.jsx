import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Wave from '../../components/Wave';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faEyeSlash,
  faPhone,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';

function Cadastro1() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefone: '',
    instituicaoParceira: '',
    senha: '',
    confirmacaoDeSenha: '',
  });

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3003/cadastrar`, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      console.log(json);
      console.log(response.status);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="mobile-wave">
        <Wave gradientId="waveeGradient" stopColor1="#500457" stopColor2="#1D0457" />
      </div>
      <div className="wave-container-cadastro">
        <Wave gradientId="waveGradient" stopColor1="#1D0457" stopColor2="#500457" />
        <div className="back-wave-cadastro"></div>
      </div>
      <i className="fa-solid fa-user"></i>
      <div className="form-cadastro">
        <form method="post" onSubmit={handleSubmit}>
          <h1> CADASTRO </h1>

          <input
            type="text"
            id="opcao5"
            name="Lattes"
            placeholder="Insira seu nome completo..."
            required
            value={formData.name}
            onChange={(e) => handleFormEdit(e, 'name')}
          />
          <FontAwesomeIcon className="icon-register" icon={faUserAlt} />

          <input
            type="email"
            id="opcao5"
            name="Lattes"
            placeholder="Insira seu email..."
            required
            value={formData.email}
            onChange={(e) => handleFormEdit(e, 'email')}
          />
          <FontAwesomeIcon className="icon-register" icon={faEnvelope} />

          <input
            type="tel"
            id="opcao5"
            name="Lattes"
            placeholder="Insira seu telefone..."
            required
            value={formData.telefone}
            onChange={(e) => handleFormEdit(e, 'telefone')}
          />
          <FontAwesomeIcon className="icon-register" icon={faPhone} />

          <select
            id="opcao2"
            name="Instituicao"
            required
            value={formData.instituicaoParceira}
            onChange={(e) => handleFormEdit(e, 'instituicaoParceira')}
          >
            <option value="" disabled>
              Selecione a Instituição Parceira...
            </option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
            <option value="opcao4">Opção 4</option>
          </select>

          <input
            type="password"
            id="opcao5"
            name="Lattes"
            placeholder="Insira sua senha..."
            required
            value={formData.senha}
            onChange={(e) => handleFormEdit(e, 'senha')}
          />
          <FontAwesomeIcon id="icon-senha" className="icon-register" icon={faEyeSlash} />

          <input
            type="password"
            id="opcao5"
            name="Lattes"
            placeholder="Confirme sua senha..."
            required
            value={formData .confirmacaoDeSenha}
            onChange={(e) => handleFormEdit(e, 'confirmacaoDeSenha')}
          />
          <FontAwesomeIcon id="icon-senha" className="icon-register" icon={faEyeSlash} />

          <button type="submit" className="next-form">
            Continuar
          </button>


          <Link to="/login">
            <p className="login-btn"> Já tem uma conta ? Faça login</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Cadastro1;
