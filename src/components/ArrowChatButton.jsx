import { useState } from 'react';

const ArrowChatButton = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/fechar o chat
  const [messages, setMessages] = useState([]); // Estado para armazenar mensagens
  const [inputValue, setInputValue] = useState(''); // Estado para controlar o input

  // Perguntas predefinidas
  const predefinedQuestions = [
    "pilotos",
    "equipes",
    "termos",
    "regulamento",
    "curiosidades",
    "Historia"
  ];

  // Respostas automáticas baseadas na pergunta do usuário
  const botResponses = {
    "pilotos": `Aqui está a lista de pilotos da temporada atual da Fórmula E:<br />
      <strong>Mahindra:</strong> Lucas Di Grassi e Oliver Rowland<br />
      <strong>Nissan:</strong> Norman Nato e Sacha Fenestraz<br />
      <strong>McLaren:</strong> René Rast e Jake Hughes<br />
      <strong>Porsche:</strong> António Félix Da Costa e Pascal Wehrlein<br />
      <strong>Jaguar:</strong> Mitch Evans e Sam Bird<br />
      <strong>Envision:</strong> Nick Cassidy e Sébastien Buemi<br />
      <strong>Andretti:</strong> Jake Dennis e André Lotterer<br />
      <strong>DS:</strong> Stoffel Vandoorne e Jean-Éric Vergne<br />
      <strong>Maserati:</strong> Edoardo Mortara e Maximilian Günther<br />
      <strong>NIO:</strong> Sérgio Sette Câmara e Dan Ticktum<br />
      <strong>ABT:</strong> Robin Frijns e Nico Müller`,
    // Outras respostas automáticas continuam aqui
  };

  // Alterna entre abrir e fechar o chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Função para enviar mensagem e resposta automática do bot
  const sendMessage = (event) => {
    event.preventDefault();

    if (inputValue.trim()) {
      // Adiciona a mensagem do usuário
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: 'user' },
      ]);

      // Limpa o input
      setInputValue('');

      // Adiciona a resposta automática do bot baseada na pergunta
      const botResponse = botResponses[inputValue.toLowerCase()] || 'Desculpe, não entendi sua pergunta.';
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: 'bot' },
        ]);
      }, 1000); // Delay de 1 segundo para simular o tempo de resposta do bot
    }
  };

  return (
    <>
      {/* Botão de seta no canto inferior direito */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          className="bg-blue-600 text-yellow-500 p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
          onClick={toggleChat}
        >
          {isOpen ? (
            <span>&#x2715;</span> // Ícone de "X" quando o chat está aberto
          ) : (
            <span>&#x25B2;</span> // Ícone de seta quando o chat está fechado
          )}
        </button>
      </div>

      {/* Chatbot popup */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 w-80 h-[26rem] bg-white shadow-lg rounded-lg p-4 transition-all duration-500">
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h3 className="text-lg font-bold text-blue-600">Tourinho</h3>
            <button className="text-blue-600 hover:text-blue-700" onClick={toggleChat}>
              &#x2715;
            </button>
          </div>

          {/* Exibição das mensagens */}
          <div className="chat-content mb-4 overflow-y-auto h-56">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 mb-2 rounded-lg max-w-[75%] ${
                  message.sender === 'user'
                    ? 'bg-blue-100 text-black self-end ml-auto text-right' // Mensagem do usuário, alinhada à direita
                    : 'bg-gray-100 text-black self-start text-left' // Mensagem do bot, alinhada à esquerda
                }`}
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
            ))}
          </div>

          {/* Menu de perguntas predefinidas */}
          <div className="mb-4">
            <label htmlFor="questions" className="block text-sm font-bold mb-2">
              Selecione uma pergunta:
            </label>
            <select
              id="questions"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm text-blue-600"
            >
              <option value="">Escolha uma pergunta</option>
              {predefinedQuestions.map((question, index) => (
                <option key={index} value={question}>
                  {question}
                </option>
              ))}
            </select>
          </div>

          {/* Formulário de envio de mensagem */}
          <form className="flex items-center justify-between" onSubmit={sendMessage}>
            <button
              type="submit"
              className="bg-blue-600 text-yellow-500 p-2 rounded-lg w-full text-center"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ArrowChatButton;
