'use client'

import { useState } from 'react';
import styles from './page.module.css';

function Atividade04() {
  const [inputValue, setInputValue] = useState({
    id: '',
    quantidade: '',
    produto: ''
  });
  const [dadosCadastrados, setDadosCadastrados] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.produto || !inputValue.quantidade) return;

    const novoItem = { ...inputValue, id: Date.now() };
    setDadosCadastrados([...dadosCadastrados, novoItem]);

    setInputValue({ id: '', quantidade: '', produto: '' });
  };

  // 🔥 NOVA FUNÇÃO (remover item)
  const removerItem = (id) => {
    const novaLista = dadosCadastrados.filter(item => item.id !== id);
    setDadosCadastrados(novaLista);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Lista de Compras</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="number"
            value={inputValue.quantidade}
            onChange={(e) => setInputValue({ ...inputValue, quantidade: e.target.value })}
            placeholder="Qtd"
          />
          <input
            type="text"
            value={inputValue.produto}
            onChange={(e) => setInputValue({ ...inputValue, produto: e.target.value })}
            placeholder="Produto..."
          />
          <button type="submit">Adicionar</button>
        </form>

        {dadosCadastrados.length > 0 && <h2>Itens adicionados</h2>}

        <ul className={styles.lista}>
          {dadosCadastrados.map((item) => (
            <li key={item.id} className={styles.linha}>
              <span className={styles.conteudo}>
                {item.quantidade}x {item.produto}
              </span>

              {/* 🗑️ BOTÃO DE EXCLUIR */}
              <button
                className={styles.deleteBtn}
                onClick={() => removerItem(item.id)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Atividade04;