import React from 'react';
import {
    Link
  } from "react-router-dom";
  import Wave from '../../components/Wave'

function Cadastro2() {
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
    
    <div className="form-cadastro">
    <form method="post">
        <h1> CADASTRO </h1>
        <select id="opcao1" name="PerfilAcesso" required>
            <option value="" selected disabled>Selecione o Perfil de Acesso....</option>
            <option value="opcao1">Reitor</option>
            <option value="opcao2">Gestor de RI</option>
            <option value="opcao3">Docente</option>
            <option value="opcao4">Discentes</option>
            <option value="opcao4">Empreendedor</option>
            <option value="opcao4">Parceiro</option>
        </select>

        <select id="opcao2" name="AreaAcademica" required>
            <option value="" selected disabled>Selecione a Área de Acadêmica...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
            <option value="opcao4">Opção 4</option>
        </select>

        <select id="opcao3" name="Cargo" required>
            <option value="" selected disabled>Selecione o Cargo...</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao4">Opção 4</option>
        </select>

        <select id="opcao4" name="TipoAcesso" required>
            <option value="" selected disabled>Selecione o Tipo de Acesso...</option>
            <option value="opcao1">Pessoa Física</option>
            <option value="opcao2">Pessoa Jurídica</option>
            <option value="opcao3">White Label</option>
        </select>

        <input type="url" id="opcao5" name="Lattes" placeholder="Insira seu Lattes...    (Exemplo: http://lattes.cnpq.br/seuperfil)" required />

        <select id="opcao6" name="Revisor">
            <option value="" selected disabled>Revisor (Opcional)</option>
            <option value="opcao1">Revisor de revistas acadêmicas</option>
            <option value="opcao2">Coordenador de mesa em eventos</option>
            <option value="opcao3">Avaliador de artigos científicos em eventos</option>
            <option value="opcao4">Palestrante em eventos técnico-científicos</option>
        </select>

        <select id="opcao7" name="AtividadesInteresse">
            <option value="" selected disabled>Atividades de Interesse (Opcional)</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
        </select>  

        <label className="termosTexto"><input type="checkbox" className="aceitoTermos" name="aceitoTermos" required /> Aceito os Termos de Uso </label>

        <Link to="/sucess"><button className="finish-form">Finalizar</button></Link>
    </form>
</div>
</div>
  );
}

export default Cadastro2;
