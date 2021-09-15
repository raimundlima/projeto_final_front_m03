import React from 'react'
import './FilmeAdd.scss';
import { Api } from '../../api/api'

const FilmeAdd = (props) => {
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    console.log(evento.target.nome.value);
    const nome = evento.target.nome.value;
    const diretor = evento.target.diretor.value;
    const genero = evento.target.genero.value;
    const capa = evento.target.capa.value;
    const ano = evento.target.ano.value;
    

    const Filme = {
      nome: nome,
      diretor: diretor,
      genero: genero,
      capa: capa,
      ano: ano,
      
    }


    try {
      const response = await Api.fetchPost(Filme);
      const data = await response 
      props.history.push('/');
    } catch (error) {
      console.log();
    }
    
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form-group">
          <label htmlFor="nome" className="add-form-group-label">Nome</label>
          <input type="text" id="nome" name="nome" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="Diretor" className="add-form-group-label">Diretor</label>
          <input type="text" id="diretor" name="diretor" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="genero" className="add-form-group-label">Genero</label>
          <input type="text" id="genero" name="genero" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="capa" className="add-form-group-label">Capa</label>
          <input type="text" id="capa" name="capa" className="add-form-group-input"/>
        </div>
        <div className="add-form-group">
          <label htmlFor="ano" className="add-form-group-label">Ano</label>
          <input type="text" id="ano" name="ano" className="add-form-group-input"/>
        </div>
        <div className="add-form-buttons">
          <button className="add-form-buttons-btn-cancelar">Cancelar</button>
          <button className="add-form-buttons-btn-salvar" type="submit">Enviar</button>
        </div>
      </form>
    </section>
  )
}

export default FilmeAdd
