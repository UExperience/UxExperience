import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Wave from '../../components/Wave';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faEnvelope,
  faEyeSlash,
  faPhone,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';

function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    instituicaoParceira: '',
    telefone: '',
    senha: '',
    confirmacaoDeSenha: '',
    perfilDeAcesso: '',
    areaAcademica: '',
    cargo: '',
    tipo: '',
    linkCurriculo: '',
    revisor: [''],
    atividadesDeInteresse: [''],
    aprovacao: true,
    ativo: true,
  });

  const navigate = useNavigate();

  const handleFormEdit = (event, name) => {
    if (name === 'telefone') {
      const formattedPhone = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
      const maskedPhone = formattedPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      setFormData({
        ...formData,
        [name]: maskedPhone,
      });
    } else {
      setFormData({
        ...formData,
        [name]: event.target.value,
      });
    }
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked,
    });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();



    if (step === 1) {
      setStep(2);
    } else {
      try {
        const response = await fetch(`http://localhost:3003/cadastrar`, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await response.json();
        console.log(json);
        console.log(response.status);

        if (response.status === 200) {
          navigate('/sucess');
        }
      } catch (err) {
        console.error(err);
      }
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

          {step === 1 && (
            <>
              <input
                type="text"
                className="opcao5"
                name="nome"
                placeholder="Insira seu nome completo..."
                required
                value={formData.nome}
                onChange={(e) => handleFormEdit(e, 'nome')}
              />
              <FontAwesomeIcon className="icon-register" icon={faUserAlt} />

              <input
                type="text"
                className="opcao5"
                name="sobrenome"
                placeholder="Insira seu sobrenome..."
                required
                value={formData.sobrenome}
                onChange={(e) => handleFormEdit(e, 'sobrenome')}
              />
              <FontAwesomeIcon className="icon-register" icon={faUserAlt} />

              <input
                type="email"
                className="opcao5"
                name="email"
                placeholder="Insira seu email..."
                required
                value={formData.email}
                onChange={(e) => handleFormEdit(e, 'email')}
              />
              <FontAwesomeIcon className="icon-register" icon={faEnvelope} />

              <input
                type="tel"
                className="opcao5"
                name="telefone"
                placeholder="Insira seu telefone..."
                required
                value={formData.telefone}
                onChange={(e) => handleFormEdit(e, 'telefone')}
              />

              <FontAwesomeIcon className="icon-register" icon={faPhone} />

              <select
                id="opcao2"
                name="instituicaoParceira"
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
                type={showPassword ? 'text' : 'password'}
                className="opcao5"
                name="senha"
                placeholder="Insira sua senha..."
                required
                value={formData.senha}
                onChange={(e) => handleFormEdit(e, 'senha')}
              />
              <FontAwesomeIcon
                id="icon-senha"
                className="icon-register"
                icon={showPassword ? faEye : faEyeSlash}
                onClick={() => setShowPassword(!showPassword)}
              />

              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="opcao5"
                name="confirmacaoDeSenha"
                placeholder="Confirme sua senha..."
                required
                value={formData.confirmacaoDeSenha}
                onChange={(e) => handleFormEdit(e, 'confirmacaoDeSenha')}
              />
              <FontAwesomeIcon
                id="icon-senha"
                className="icon-register"
                icon={showConfirmPassword ? faEye : faEyeSlash}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />

              <button type="button" onClick={handleNext} className="next-form">
                Próximo
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <select
                id="opcao1"
                name="perfilDeAcesso"
                value={formData.perfilDeAcesso}
                onChange={(e) => handleFormEdit(e, 'perfilDeAcesso')}
              >
                <option value="" disabled>
                  Selecione o Perfil de Acesso....
                </option>
                <option value="Reitor">Reitor</option>
                <option value="Gestor de RI">Gestor de RI</option>
                <option value="Docente">Docente</option>
                <option value="Discentes">Discentes</option>
                <option value="Empreendedores">Empreendedor</option>
                <option value="Parceiro">Parceiro</option>
              </select>

              <select
                id="opcao2"
                name="areaAcademica"
                required
                value={formData.areaAcademica}
                onChange={(e) => handleFormEdit(e, 'areaAcademica')}
              >
                <option value="" disabled>
                  Selecione a Área de Acadêmica...
                </option>
                <option value="opcao1">Opção 1</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
                <option value="opcao4">Opção 4</option>
              </select>

              <select
                id="opcao3"
                name="cargo"
                value={formData.cargo}
                onChange={(e) => handleFormEdit(e, 'cargo')}
              >
                <option value="" disabled>
                  Selecione o Cargo...
                </option>
                <option value="Cargo 1">Opção 1</option>
                <option value="Cargo 2">Opção 2</option>
                <option value="Cargo 3">Opção 3</option>
              </select>

              <select
                id="opcao4"
                name="tipo"
                required
                value={formData.tipo}
                onChange={(e) => handleFormEdit(e, 'tipo')}
              >
                <option value="" disabled>
                  Selecione o Tipo de Acesso...
                </option>
                <option value="PJ">Pessoa Física</option>
                <option value="PF">Pessoa Jurídica</option>
                <option value="White Label">White Label</option>
              </select>


              <textarea
                type="url"
                className="opcao5"
                name="linkCurriculo"
                placeholder="Insira seu Lattes... (Exemplo: http://lattes.cnpq.br/seuperfil)"
                required
                value={formData.linkCurriculo}
                onChange={(e) => handleFormEdit(e, 'linkCurriculo')}
              />

              <select
                id="opcao6"
                name="revisor"
                value={formData.revisor}
                onChange={(e) => handleFormEdit(e, 'revisor')}
              >
                <option value={null} disabled>Revisor (Opcional)</option>
                <option value={null}>Nenhum</option>
                <option value="Revisor de revistas acadêmicas">Revisor de revistas acadêmicas</option>
                <option value="Coordenador de mesa em eventos">Coordenador de mesa em eventos</option>
                <option value="Avaliador de artigos científicos em eventos">Avaliador de artigos científicos em eventos</option>
                <option value="Palestrante em eventos técnico-científicos">Palestrante em eventos técnico-científicos</option>
              </select>

              <select
                id="opcao7"
                name="atividadesDeInteresse"
                value={formData.atividadesDeInteresse}
                onChange={(e) => handleFormEdit(e, 'atividadesDeInteresse')}
              >
                <option value={null} disabled>Atividades de Interesse (Opcional)</option>
                <option value={null}>Nenhum</option>
                <option value="Atividade 1">Opção 1</option>
                <option value="Atividade 2">Opção 2</option>
                <option value="Atividade 3">Opção 3</option>
              </select>


              <label className="termosTexto">
                <input type="checkbox" id="aceitoTermos" name="aceitoTermos" required /> Aceito os Termos de Uso
              </label>
              <button type="submit" className="finish-form">
                Finalizar
              </button>
            </>
          )}
          <Link to="/login">
            <p className="login-btn"> Já tem uma conta? Faça login</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
