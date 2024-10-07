import { useState, useRef } from 'react';
import './Double.css';
import ArrowChatButton from '../components/ArrowChatButton';
import moedaIcon from '../assets/moeda-loja.png';

const DoubleHorizontal = () => {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [girando, setGirando] = useState(false);
  const [mensagemResultado, setMensagemResultado] = useState('');
  const [pontosApostados, setPontosApostados] = useState('');
  const [saldo, setSaldo] = useState(1000); // Saldo inicial do jogador

  // Cores disponíveis (Preto, Vermelho, Branco)
  const cores = ['vermelho', 'preto', 'branco'];

  // Ref para o container que vai se mover
  const animacaoRef = useRef(null);

  // Repetir as cores várias vezes para simular uma roleta contínua
  const quadrados = [
    'vermelho', 'preto', 'branco', 'vermelho', 'preto', 'branco', 'vermelho', 'preto', 'branco',
    'vermelho', 'preto', 'branco', 'vermelho', 'preto', 'branco', 'vermelho', 'preto', 'branco',
  ]; // Repetir várias vezes

  // Função para resetar a roleta
  const resetarRoleta = () => {
    animacaoRef.current.style.transition = 'none'; // Remover transição temporariamente
    animacaoRef.current.style.transform = 'translateX(0px)'; // Resetar para a posição inicial
  };

  const iniciarRodada = () => {
    if (!girando && escolhaJogador !== null && pontosApostados > 0) {
      setGirando(true);
      setMensagemResultado('');

      // Resetar a roleta antes de começar o novo giro
      resetarRoleta();

      // Aguardar um pequeno tempo para garantir o reset visual
      setTimeout(() => {
        // Definir o resultado final aleatório
        const resultadoFinal = Math.floor(Math.random() * cores.length);

        // Definir um número de voltas (mínimo 3 voltas completas)
        const voltas = 3;
        const posicaoFinalCalculada = (voltas * cores.length + resultadoFinal) * 100; // 100px por quadrado

        // Aplicar a animação de transição
        animacaoRef.current.style.transition = 'transform 5s ease-out'; // Reaplicar a transição
        animacaoRef.current.style.transform = `translateX(-${posicaoFinalCalculada}px)`;

        // Parar a roleta após o tempo da animação (5 segundos)
        setTimeout(() => {
          const corFinal = cores[resultadoFinal];
          let resultadoTexto = '';

          if (corFinal === escolhaJogador) {
            const pontosGanhos = pontosApostados * (corFinal === 'branco' ? 5 : 2); // Branco paga 5x, outras cores 2x
            setSaldo((prevSaldo) => prevSaldo + pontosGanhos);
            resultadoTexto = `Você ganhou! +${pontosGanhos} pontos.`;
          } else {
            setSaldo((prevSaldo) => prevSaldo - pontosApostados);
            resultadoTexto = `Você perdeu ${pontosApostados} pontos.`;
          }

          setMensagemResultado(resultadoTexto);
          setGirando(false);
        }, 5000); // Duração do giro de 5 segundos
      }, 100); // Pequeno atraso de 100ms para garantir que o reset seja visível
    }
  };

  return (
    <div className="double-horizontal-game-container">
      <h1 className="text-white font-bold text-3xl mb-4">Double - Escolha sua Cor!</h1>

      <div className="double-game-flex justify-end items-center mb-4">
        <div className="double-game-saldo bg-[#202020] border border-gray-600 rounded-full text-center px-4 py-2 flex items-center">
          <img src={moedaIcon} className="w-8 h-8 mr-2" alt="Turbo Coins" />
          <p className="text-white font-semibold">TC {saldo}</p>
        </div>
      </div>

      <div className="double-escolha-jogador mb-6">
        <button
          className={`double-botao-escolha ${escolhaJogador === 'vermelho' ? 'double-selecionado' : ''}`}
          onClick={() => setEscolhaJogador('vermelho')}
          disabled={girando}
        >
          Vermelho
        </button>
        <button
          className={`double-botao-escolha ${escolhaJogador === 'preto' ? 'double-selecionado' : ''}`}
          onClick={() => setEscolhaJogador('preto')}
          disabled={girando}
        >
          Preto
        </button>
        <button
          className={`double-botao-escolha ${escolhaJogador === 'branco' ? 'double-selecionado' : ''}`}
          onClick={() => setEscolhaJogador('branco')}
          disabled={girando}
        >
          Branco
        </button>
      </div>

      <div className="double-apostar mb-4">
        <label htmlFor="pontos-apostados" className="text-white">Quantos pontos você quer apostar?</label>
        <input
          type="number"
          id="pontos-apostados"
          value={pontosApostados}
          onChange={(e) => setPontosApostados(e.target.value)}
          min="1"
          max={saldo}
          disabled={girando}
          className="ml-2 p-2 rounded"
        />
      </div>

      <button
        onClick={iniciarRodada}
        disabled={girando || escolhaJogador === null || pontosApostados <= 0 || pontosApostados > saldo}
        className="double-botao-girar mb-6"
      >
        Começar o jogo
      </button>

      <div className="double-quadrados-cores">
        <div className="double-container-animacao" ref={animacaoRef}>
          {quadrados.map((cor, index) => (
            <div key={index} className={`double-quadrado double-${cor}`}>
              {cor}
            </div>
          ))}
        </div>

        {/* Linha central fixa para indicar o quadrado no centro */}
        <div className="double-linha-central"></div>
      </div>
      <ArrowChatButton />
      <h2 className="text-white mt-6">{mensagemResultado}</h2>
    </div>
  );
};

export default DoubleHorizontal;
