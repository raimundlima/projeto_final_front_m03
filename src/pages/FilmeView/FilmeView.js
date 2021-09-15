import React, { useEffect, useState } from 'react'
import './FilmeView.scss';
import { Api } from '../../api/api'
import { Link } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';




const FilmeView = (props) => {
  const [filmes, setFilme] = useState({});
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  
  useEffect(() => {
    getFilmeById();
  }, [])

  // pegar o id e  chamar a api na url http://localhost:3002/filmes/FindById/
  // passando o id que eu recebi
  const id = props.match.params.id;
  
  
  const getFilmeById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setFilme(data);
    console.log(filmes);
    console.log()
    
  }

  const handleDelete = async (evento) => {
    evento.preventDefault();
    const resposta = await Api.fetchDelete(id);
    const result = await resposta;
    console.log(result);
    props.history.push("/");
    
  }
  
  return (
    <section className="view">
      <div className="view-img">
        <img src={filmes.capa} alt={filmes.nome}/>
      </div>
      <div className="view-info">
        <p className="view-info-text"><b>Nome:</b> { filmes.nome }</p>
        <p className="view-info-text"><b>Diretor:</b> { filmes.diretor }</p>
        <p className="view-info-text"><b>Genero:</b> { filmes.genero }</p>
        <p className="view-info-text"><b>Ano:</b> { filmes.ano }</p>
        <Link to={`/edit/${filmes._id}`} >
          <button className="btn btn-success">Editar</button>
        </Link>
        <button className="btn btn-danger" onClick={onOpenModal}>Excluir</button>
      </div>
      <Modal open={open} onClose={onCloseModal} center
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}
      >
        <h2>Deseja realmente Excluir ?</h2>
        <button onClick={handleDelete} className="buttons">SIM</button>
        <button onClick={onCloseModal} className="buttons">NAO</button>
      </Modal>
    </section>
  )
}

export default FilmeView
