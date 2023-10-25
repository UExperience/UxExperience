import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wave from '../../components/Wave'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEyeSlash, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [password, setPassword] = useState('');

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
        <form method="post">
          <h1>ENTRAR</h1>
          <input
            type="text"
            name="user"
            placeholder="Usuário"
            autoFocus/>
      <FontAwesomeIcon class="icon-login" icon={faUserAlt}/>
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      <FontAwesomeIcon class="icon-login" icon={faEyeSlash}/>
          <Link to="/"><button className="btn-login">Login</button></Link>
          <Link><p className="password-forget">Esqueceu sua senha?</p></Link>
          <Link to="/cadastro1"><p className="register-btn">Não tem uma conta? Cadastre-se</p></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
