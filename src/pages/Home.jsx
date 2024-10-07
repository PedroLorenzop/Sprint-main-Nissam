import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FAQ from '../components/Faq';
import Modal from '../components/Modal'; // Importando o componente Modal
import ArrowChatButton from '../components/ArrowChatButton';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="bg-blue-900 text-yellow-100">
      <section className="font-unbounded hero flex flex-col items-center justify-center text-center py-6 bg-gradient-to-b from-blue-900 to-yellow-500 min-h-screen relative overflow-hidden">
        <div className="content relative z-10 max-w-4xl mt-[-150px] sm:mt-0 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-5 font-unbounded">Tem sempre um <br />Prêmio para você</h1>
          <p className="mb-6 text-base sm:text-lg lg:text-xl font-montserrat">Diversos prêmios à sua disposição</p>
        </div>
        <div className="flex flex-col items-center mt-8">
          <img src="carro site.png" alt="Carro de Corrida" className="w-full max-w-3xl sm:max-w-2xl" />
          <a href="#" className="button bg-yellow-500 text-blue-900 py-3 px-6 rounded-full text-sm font-light inline-flex items-center mt-6">
            COMEÇAR AGORA
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor" className="ml-2">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Jogos Section */}
      <section className="jogos text-center py-5 bg-yellow-500 text-blue-900" id="jogos">
  <div className="title-container1 flex items-center justify-center mb-5 px-4 sm:px-6 lg:px-36">
    <h1 className="font-unbounded text-2xl sm:text-3xl font-light">Jogos</h1>
  </div>
  <div className="font-poppins cards-container flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 px-4">
    
    {/* Card Quiz */}
    <div className="card bg-blue-900 rounded-lg p-4 sm:p-5 text-left flex flex-col justify-between max-w-xs sm:max-w-sm min-h-[300px]">
      <div className="flex-grow">
        <div className="icon bg-yellow-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-5 mx-auto">
          <img src="quiz logo site.svg" alt="Quiz Logo" className="h-8 sm:h-9" />
        </div>
        <h2 className="text-lg sm:text-xl font-light font-poppins mb-2 text-yellow-500">Quiz</h2>
        <p className="text-xs sm:text-sm font-poppins text-yellow-500">Desafie seus conhecimentos sobre Fórmula 1 neste quiz emocionante! Responda perguntas rápidas e acumule pontos para se tornar um verdadeiro especialista.</p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <a href="#" className="learn-more text-yellow-500 text-xs sm:text-sm font-poppins">Saiba mais!</a>
      </div>
    </div>

    {/* Card Double */}
    <div className="card bg-blue-900 rounded-lg p-4 sm:p-5 text-left flex flex-col justify-between max-w-xs sm:max-w-sm min-h-[300px]">
      <div className="flex-grow">
        <div className="icon bg-yellow-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-5 mx-auto">
          <span className="text-blue-900 text-xl sm:text-2xl">R</span>
        </div>
        <h2 className="text-lg sm:text-xl font-light font-poppins mb-2 text-yellow-500">Double</h2>
        <p className="font-poppins text-xs sm:text-sm text-yellow-500">O Double oferece pontos ao escolher a cor certa: Preto e Vermelho pagam 2x, enquanto Branco paga 5x. A roleta gira, escolha sua cor e boa sorte!</p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <button onClick={openModal} className="learn-more text-yellow-500 text-xs sm:text-sm font-poppins">Saiba mais!</button>
        <NavLink to="/Double" className="text-yellow-500 mt-2 text-xs sm:text-sm font-poppins text-center">Jogar Double</NavLink>
      </div>
    </div>

    {/* Card Bet */}
    <div className="card bg-blue-900 rounded-lg p-4 sm:p-5 text-left flex flex-col justify-between max-w-xs sm:max-w-sm min-h-[300px]">
      <div className="flex-grow">
        <div className="icon bg-yellow-500 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-4 sm:mb-5 mx-auto">
          <img src="bet logo site.svg" alt="Bet Logo" className="h-8 sm:h-9" />
        </div>
        <h2 className="text-lg sm:text-xl font-light font-poppins mb-2 text-yellow-500">Suposição</h2>
        <p className="text-xs sm:text-sm font-poppins text-yellow-500">Escolha o piloto vencedor da próxima corrida de Fórmula E e ganhe pontos para se destacar no ranking!</p>
      </div>
      <div className="flex flex-col items-center mt-4">
        <a href="#" className="learn-more text-yellow-500 text-xs sm:text-sm font-poppins">Saiba mais!</a>
      </div>
    </div>

  </div>
</section>


      {/* Section para Player de Vídeo */}
      <section className="video-section text-center py-5 bg-yellow-500 text-blue-900" id="live-stream">
        <div className="title-container flex items-center justify-center mb-5 px-4 sm:px-6 lg:px-36">
          <h1 className="font-unbounded text-2xl sm:text-3xl font-light">Live de Fórmula E</h1>
        </div>
        <div className="video-container flex justify-center px-4">
          <div className="w-full max-w-7xl h-[calc(100vh-300px)]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cmj3xa_rQC8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Loja Section */}
      <section className="loja text-center py-5 bg-yellow-500 text-blue-900" id="loja">
        <div className="title-container mb-5 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-36">
          <h1 className="text-2xl sm:text-4xl font-unbounded mb-4">Loja</h1>
          <NavLink to='/loja' className="ver-todos bg-blue-900 text-yellow-500 py-3 px-6 rounded-full text-sm font-light inline-flex items-center mb-6">
            VER TODA A LOJA
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="ml-2">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          </NavLink>
        </div>

        <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center px-4">
          <div className="product bg-neutral-950 rounded-lg p-4 sm:p-12 text-center flex flex-col justify-between max-w-xs sm:max-w-sm">
            <img src="Camiseta Loja C.png" alt="Camiseta" className="mb-5 rounded-lg w-full h-48 sm:h-64 object-cover" />
            <div className="product-info text-left">
              <span className="category bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs sm:text-sm">Loja</span>
              <h2 className="text-lg sm:text-2xl font-light font-unbounded mt-2">Camiseta</h2>
              <p className="text-xs sm:text-sm font-poppins">Camiseta, Formula E 2024</p>
            </div>
          </div>

          {/* Produto PS5 */}
          <div className="product bg-neutral-950 rounded-lg p-4 sm:p-12 text-center flex flex-col justify-between max-w-xs sm:max-w-sm">
            <img src="Ps5 Loja C.png" alt="PS5" className="mb-5 rounded-lg w-full h-48 sm:h-64 object-cover" />
            <div className="product-info text-left">
              <span className="category bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs sm:text-sm">Loja</span>
              <h2 className="text-lg sm:text-2xl font-light font-unbounded mt-2">PS5</h2>
              <p className="text-xs sm:text-sm font-poppins">Console Sony Playstation 5, PS5 825gb</p>
            </div>
          </div>

          {/* Produto Ingresso */}
          <div className="product bg-neutral-950 rounded-lg p-4 sm:p-12 text-center flex flex-col justify-between max-w-xs sm:max-w-sm">
            <img src="Ingresso Loja C.png" alt="Ingresso Formula E" className="mb-5 rounded-lg w-full h-48 sm:h-64 object-cover" />
            <div className="product-info text-left">
              <span className="category bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs sm:text-sm">Loja</span>
              <h2 className="text-lg sm:text-2xl font-light font-unbounded mt-2">Ingresso Formula E</h2>
              <p className="text-xs sm:text-sm font-poppins">Ingresso para Formula E, Corrida 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq bg-yellow-500 text-yellow-100 py-10">
        <FAQ />
      </section>

      <ArrowChatButton />
      <Modal show={showModal} handleClose={closeModal} />
    </main>
  );
}
