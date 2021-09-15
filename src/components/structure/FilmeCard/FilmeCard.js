import React from 'react';
import {Link} from 'react-router-dom';
import './FilmeCard.scss';

const FilmeCard = (props) => {
  const filme = props.filme;

  return (
    <Link to={`/view/${filmes._id}`} className="card">
    <div>
      <div className="card-img">
        <img src={filme.capa} alt="" />
      </div>
      <p className="card-text">{filme.nome}</p>
      
    </div>
  </Link>
  )
}

export default FilmeCard