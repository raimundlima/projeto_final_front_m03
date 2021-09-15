import React, { useEffect, useState } from 'react';
import FilmeCard from '../FilmeCard/FilmeCard';
import './FilmeList.scss';
import {Api} from '../../../api/api';

const FilmeList = () => {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {
    getFilme();
  }, [])
  
  

  const getFilme = async () => {
    const response = await Api.fetchGet();
    const data = await response.json();
    setFilmes(data);
  }

  return (
    <div className="list">
      {filmes.map((filme, index) => (
        <FilmeCard filme={filme} key={filme._id}/>
      ))}
    </div>
  )
}

export default FilmeList