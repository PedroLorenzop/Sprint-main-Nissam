import { useState } from 'react';

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="font-montserrat"> {/* Aplicando a fonte a todo o componente */}
      <div className="flex flex-col items-center text-white text-center mb-8">
        <p className="bg-neutral-900 py-2 px-4 text-lg font-semibold text-blue-600 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          PERGUNTAS FREQUENTES
        </p>
        <h4 className="text-3xl sm:text-4xl font-medium mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          Tem dúvidas? Temos respostas!
        </h4>
      </div>

      <ul className="mx-auto w-full sm:w-3/4 md:w-1/2 space-y-6 mb-10"> {/* Garantindo que o FAQ ocupe largura adequada e espaçamento */}
        <li className="bg-neutral-900 p-4 rounded-lg">
          <input type="radio" name="objetivo" id="primeiro" className="hidden" />
          <label
            className="flex justify-between items-center cursor-pointer text-lg font-bold"
            htmlFor="primeiro"
            onClick={() => toggle(1)}
          >
            O que é o TURBO e por que ele é importante?
            <span
              className={`bg-blue-600 p-2 rounded-md text-yellow-500 transform ${
                selected === 1 ? 'rotate-90' : 'rotate-180'
              }`}
            >
              ➤
            </span>
          </label>
          <div className={`text-white mt-2 ${selected === 1 ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
            <p>
              TURBO é uma plataforma que reúne diversos tipos de jogos, no qual
              ao jogar você acumula pontos e com os pontos pode adquirir produtos
              reais na nossa loja, que possui diversos tipos de prêmios dos mais
              básicos aos mais complexos.
            </p>
          </div>
        </li>

        <li className="bg-neutral-900 p-4 rounded-lg">
          <input type="radio" name="objetivo" id="segundo" className="hidden" />
          <label
            className="flex justify-between items-center cursor-pointer text-lg font-bold"
            htmlFor="segundo"
            onClick={() => toggle(2)}
          >
            Por que criamos o TURBO?
            <span
              className={`bg-blue-600 p-2 rounded-md text-yellow-500 transform ${
                selected === 2 ? 'rotate-90' : 'rotate-180'
              }`}
            >
              ➤
            </span>
          </label>
          <div className={`text-white mt-2 ${selected === 2 ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
            <p>
              Nós criamos a TURBO para suprir uma demanda do mercado: popularizar
              a Fórmula E. A partir dessa missão, resolvemos criar uma plataforma
              que aumenta o interesse por ela e bonifica nossos usuários que estão
              cada vez mais antenados no mundo da Fórmula E.
            </p>
          </div>
        </li>

        <li className="bg-neutral-900 p-4 rounded-lg">
          <input type="radio" name="objetivo" id="terceiro" className="hidden" />
          <label
            className="flex justify-between items-center cursor-pointer text-lg font-bold"
            htmlFor="terceiro"
            onClick={() => toggle(3)}
          >
            Por que é importante a existência do TURBO?
            <span
              className={`bg-blue-600 p-2 rounded-md text-yellow-500 transform ${
                selected === 3 ? 'rotate-90' : 'rotate-180'
              }`}
            >
              ➤
            </span>
          </label>
          <div className={`text-white mt-2 ${selected === 3 ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
            <p>
              O TURBO é importante pois incentiva a afeição pela Fórmula E, desta
              forma cria-se um interesse maior por carros elétricos que contribuem
              para o planeta de forma mais sustentável.
            </p>
          </div>
        </li>

        <li className="bg-neutral-900 p-4 rounded-lg">
          <input type="radio" name="objetivo" id="quarto" className="hidden" />
          <label
            className="flex justify-between items-center cursor-pointer text-lg font-bold"
            htmlFor="quarto"
            onClick={() => toggle(4)}
          >
            Como ganhar pontos no TURBO?
            <span
              className={`bg-blue-600 p-2 rounded-md text-yellow-500 transform ${
                selected === 4 ? 'rotate-90' : 'rotate-180'
              }`}
            >
              ➤
            </span>
          </label>
          <div className={`text-white mt-2 ${selected === 4 ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
            <p>
              Para adquirir pontos basta escolher uma das opções: jogar o modo
              Quiz, indicar amigos, ou coletar as recompensas diárias. Além
              disso, você pode aumentar seus pontos jogando nossos jogos de sorte:
              Roleta ou BET.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
