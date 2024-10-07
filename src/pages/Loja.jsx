import { useState } from 'react';
import ArrowChatButton from '../components/ArrowChatButton';

// Importando as imagens
import camisetaLoja from '../assets/Camiseta1.png';
import ingressoLoja from '../assets/Ingresso Loja C.png';
import boneLoja from '../assets/Bone.png';
import ps5Loja from '../assets/Ps5 Loja C.png';
import caderno01 from '../assets/caderno01.png';
import moedaIcon from '../assets/moeda-loja.png';
import chaveiroLoja from '../assets/chaveiro-sprint-removebg-preview.png';
import copoLoja from '../assets/copo-sprint-removebg-preview.png';
import garrafaLoja from '../assets/garrafa-sprint-removebg-preview.png';
import '../barra-de-navegacao.css';

export default function Home() {
  const [saldo, setSaldo] = useState(1000);
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal
  const [codigo, setCodigo] = useState(''); // Estado do código promocional
  const [codigoAplicado, setCodigoAplicado] = useState(false); // Controle do código aplicado

  const aplicarCodigoPromocional = () => {
    if (codigo.toUpperCase() === 'MAHINDRA') { // Verifica se o código está correto
      setSaldo(saldo + 100); // Adiciona 100 Turbo Coins ao saldo
      setCodigoAplicado(true); // Marca o código como aplicado
      alert('Código aplicado com sucesso! Você ganhou 100 Turbo Coins e os preços foram reduzidos em 5%!');
    } else {
      alert('Código inválido!');
    }
  };

  const produtos = [
    { id: 1, nome: 'Camiseta', preco: 1000, img: camisetaLoja },
    { id: 2, nome: 'Ingresso', preco: 5000, img: ingressoLoja },
    { id: 3, nome: 'Boné 2024', preco: 500, img: boneLoja },
    { id: 4, nome: 'Ps5', preco: 100000, img: ps5Loja },
    { id: 5, nome: 'Copo Térmico', preco: 550, img: copoLoja },
    { id: 6, nome: 'Garrafa Térmica', preco: 750, img: garrafaLoja },
    { id: 7, nome: 'Chaveiro', preco: 150, img: chaveiroLoja },
    { id: 8, nome: 'Caderno', preco: 250, img: caderno01 },
  ].map(produto => {
    if (codigoAplicado) {
      return { ...produto, preco: produto.preco * 0.95 }; // Aplica o desconto de 5%
    }
    return produto;
  });

  const adquirirItem = (preco) => {
    if (saldo >= preco) {
      setSaldo(saldo - preco);
      alert('Item adquirido com sucesso!');
    } else {
      alert('Saldo insuficiente!');
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Alterna a visibilidade do modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-yellow-500 flex flex-col items-center">
      {/* Alinhando corretamente o saldo */}
      <div className="w-full max-w-screen-xl mx-auto p-4">
        <div className="flex flex-wrap justify-end items-center mb-4 space-x-2 sm:space-x-4">
          <div className="bg-[#202020] border border-gray-600 rounded-full text-center px-4 py-2 flex items-center">
            <img src={moedaIcon} className="w-8 h-8 mr-2" alt="Turbo Coins" />
            <p className="text-white font-semibold">TC {saldo}</p>
          </div>

          {/* Campo para inserir o código promocional */}
          <input
            type="text"
            placeholder="Código promocional"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            className="bg-[#202020] border border-gray-600 text-white p-2 rounded-full w-28 sm:w-40 flex-shrink-0"
          />

          <button
            onClick={aplicarCodigoPromocional}
            className="bg-[#202020] border border-gray-600 text-white p-2 rounded-full w-20 sm:w-24 flex-shrink-0 hover:bg-neutral-600 transition"
            disabled={codigoAplicado} // Desativa o botão se o código já foi aplicado
          >
            Aplicar
          </button>

          {/* Botão de informação */}
          <button
            onClick={toggleModal}
            className="bg-[#202020] border border-gray-600 text-white p-2 rounded-full w-10 flex-shrink-0 hover:bg-neutral-600 transition"
          >
            i
          </button>
        </div>

        {/* Modal estilo popup */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full mx-4">
              <h2 className="text-xl font-bold mb-4 text-center text-black">TC significa Turbo Coins</h2>
              <p className="text-gray-700 mb-6 text-center">
                A TC é a moeda virtual do site, permitindo que usuários acumulem e troquem por produtos da loja virtual, como camisetas, bonés e até eletrônicos de alto valor.
              </p>
              <div className="text-center">
                <button
                  onClick={toggleModal}
                  className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        <ArrowChatButton />
        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-neutral-900 border border-red-600 hover:border-red-700 rounded-lg p-6 text-center shadow-lg flex flex-col justify-between transition"
            >
              {produto.img ? (
                <img
                  src={produto.img}
                  alt={produto.nome}
                  className="w-full h-40 object-contain mb-4 rounded-md"
                />
              ) : (
                <div className="w-full h-40 bg-gray-600 mb-4 rounded-md"></div>
              )}
              <div className="flex-grow">
                <h3 className="text-white font-bold text-lg mb-2">{produto.nome}</h3>
                <p className="text-gray-400 text-sm mb-4">TC {produto.preco.toFixed(2)}</p>
              </div>
              <button
                onClick={() => adquirirItem(produto.preco)}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition mt-auto"
              >
                ADQUIRIR
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
