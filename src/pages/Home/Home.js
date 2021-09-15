import React from 'react';
import FilmeList from '../../components/structure/FilmeList/FilmeList';
import './Home.scss';

const Home = () => {
  return (
    <section className="content">
      
      <div className="content-list">
        <h1>Projeto de Filmes</h1>
        <FilmeList />
      </div>
    </section>
  )
}

export default Home