import React from 'react';
import {
    Link
  } from "react-router-dom";
  import Wave from '../../components/Wave'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEyeSlash, faPhone, faUserAlt } from '@fortawesome/free-solid-svg-icons';

function Cadastro1() {
  return (
    <div>
    <div className="mobile-wave">
                <Wave gradientId="waveeGradient" stopColor1="#500457" stopColor2="#1D0457" />
            </div>
            <div className="wave-container-cadastro">
                <Wave gradientId="waveGradient" stopColor1="#1D0457" stopColor2="#500457" />
                <div className="back-wave-cadastro">
                </div>
            </div>
    <i class="fa-solid fa-user"></i>
    <div className="form-cadastro">
    <form method="post">
        <h1> CADASTRO </h1>
        
        <input type="text" id="opcao5" name="Lattes" placeholder="Insira seu nome completo..." required /> <FontAwesomeIcon class="icon-register" icon={faUserAlt}/>
        <input type="email" id="opcao5" name="Lattes" placeholder="Insira seu email..." required /> <FontAwesomeIcon class="icon-register" icon={faEnvelope}/>
        <input type="tel" id="opcao5" name="Lattes" placeholder="Insira seu telefone..." required /> <FontAwesomeIcon class="icon-register" icon={faPhone}/>
        <select id="opcao2" name="Instituicao" required>
            <option value="" selected disabled>Selecione a Instituição Parceira...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
            <option value="opcao4">Opção 4</option>
        </select>
        <input type="password" id="opcao5" name="Lattes" placeholder="Insira sua senha..." required /> <FontAwesomeIcon  id="icon-senha" class="icon-register" icon={faEyeSlash}/>
        <input type="password" id="opcao5" name="Lattes" placeholder="Confirme sua senha..." required /> <FontAwesomeIcon id="icon-senha" class="icon-register" icon={faEyeSlash}/>


        <Link to="/cadastro2"><button className="next-form">Continuar</button></Link>
        <Link to="/login"><p className="login-btn"> Já tem uma conta ? Faça login</p></Link>
    </form>
</div>
</div>
  );
}

export default Cadastro1;