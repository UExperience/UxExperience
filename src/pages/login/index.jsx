import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import Wave from '../../components/Wave'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/entrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Token de acesso:', data.acessToken);
  
      } else {
        const errorData = await response.json();
        console.error('Erro no login:', errorData.errors);
      }
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error);
    }
  };
  
  return (
    <div>
      <div className="mobile-wave">
        <Wave gradientId="waveeGradient" stopColor1="#500457" stopColor2="#1D0457" />
      </div>
      <div className="wave-container">
        <Wave gradientId="waveGradient" stopColor1="#1D0457" stopColor2="#500457" />
        <div className="back-wave"></div>
      </div>
      <div className="form-login">
        <form method="post" onSubmit={handleLogin}>
          <h1>ENTRAR</h1>
          <input
            type="text"
            name="user"
            placeholder="Usuário"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FontAwesomeIcon class="icon-login" icon={faUserAlt} />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon class="icon-login" icon={faEyeSlash} />
          <button type="submit" className="btn-login">
            Login
          </button>
          <Link>
            <p className="password-forget">Esqueceu sua senha?</p>
          </Link>
          <Link to="/cadastro1">
            <p className="register-btn">Não tem uma conta? Cadastre-se</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;