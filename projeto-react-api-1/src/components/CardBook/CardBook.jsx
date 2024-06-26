import React from 'react';
import { Link } from 'react-router-dom';
import './cardBook.css';

function CardBook({ id, key, livro, autor, categoria, handlerRemove }) {

  function remove(event){
    event.preventDefault();
    handlerRemove(id)
  }

  return (
    <div className='card-book'>
        <h4>{livro}</h4>
        <p>Autor: {autor}</p>
        <p className='card-book__category'>
          <span></span>
          {categoria}
        </p>
        <div className='card-book_actions'>
          <Link to={`/editarLivro/${id}`}>Editar</Link>
          <button onClick={remove}>Excluir</button>
        </div>
    </div>
  )
  
}

export default CardBook;