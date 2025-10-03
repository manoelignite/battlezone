import './App.css';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [nome, setNome] = useState('');
  const [turma, setTurma] = useState('');
  const [jogadores, setJogadores] = useState([]);

const handleAdicionarJogador = () => {
    if (nome.trim() === '' || turma.trim() === '') {
      alert('Preencha todos os campos!');
      return;
    }

    const novoJogador = { nome, turma };
    setJogadores([...jogadores, novoJogador]);
    setNome('');
    setTurma('');
  };

  return (
  
    <div>
      <h2>Incluir Jogador</h2>

      <div>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Turma"
          value={turma}
          onChange={(e) => setTurma(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleAdicionarJogador}>Incluir jogador</button>
      </div>

      {jogadores.length > 0 && (
        <div>
          <h3>Jogadores cadastrados:</h3>
          <ul>
            {jogadores.map((jogador, index) => (
              <li key={index}>
                {jogador.nome} - Turma {jogador.turma}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
