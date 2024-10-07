import React, { useState } from "react";

// Array com as perguntas do quiz
const quizData = [
    {
        question: "Em que ano foi realizada a primeira temporada da Fórmula E?",
        a: "2012",
        b: "2014",
        c: "2015",
        d: "2016",
        correct: "b"
    },
    {
        question: "Qual cidade sediou a primeira corrida da história da Fórmula E?",
        a: "Pequim",
        b: "Londres",
        c: "Nova York",
        d: "Berlim",
        correct: "a"
    },
    {
        question: "Qual fabricante venceu o campeonato de construtores na temporada 2020-2021 da Fórmula E?",
        a: "Jaguar",
        b: "Mercedes-EQ",
        c: "DS Techeetah",
        d: "Audi",
        correct: "b"
    },
    {
        question: "Quem foi o primeiro campeão mundial da Fórmula E na temporada 2014-2015?",
        a: "Sebastien Buemi",
        b: "Jean-Éric Vergne",
        c: "Nelson Piquet Jr.",
        d: "Lucas di Grassi",
        correct: "c"
    },
    {
        question: "Quantos pilotos competem em cada equipe na Fórmula E?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b"
    },
    {
        question: "Que tipo de energia alimenta os carros da Fórmula E?",
        a: "Combustível fóssil",
        b: "Híbrido",
        c: "Elétrica",
        d: "Hidrogênio",
        correct: "c"
    },
    {
        question: "Qual cidade é famosa por sediar o ePrix de Mônaco da Fórmula E?",
        a: "Roma",
        b: "Paris",
        c: "Mônaco",
        d: "Madri",
        correct: "c"
    },
    {
        question: "Qual piloto é o único a ter vencido dois títulos consecutivos na Fórmula E?",
        a: "Lucas di Grassi",
        b: "Jean-Éric Vergne",
        c: "Antonio Felix da Costa",
        d: "Sebastien Buemi",
        correct: "b"
    },
    {
        question: "Qual é o nome do sistema que oferece um boost temporário de potência durante a corrida?",
        a: "Power Boost",
        b: "Attack Mode",
        c: "Turbo Mode",
        d: "Speed Boost",
        correct: "b"
    },
    {
        question: "Quantos minutos tem a duração de uma corrida típica da Fórmula E?",
        a: "30 minutos",
        b: "45 minutos mais uma volta",
        c: "60 minutos",
        d: "90 minutos",
        correct: "b"
    },
    {
        question: "Quem é o fundador da Fórmula E?",
        a: "Bernie Ecclestone",
        b: "Alejandro Agag",
        c: "Jean Todt",
        d: "Chase Carey",
        correct: "b"
    },
    {
        question: "Qual equipe entrou para a Fórmula E na temporada 2022-2023?",
        a: "Maserati",
        b: "BMW",
        c: "Ferrari",
        d: "Honda",
        correct: "a"
    },
    {
        question: "Qual destes países nunca sediou uma corrida de Fórmula E?",
        a: "Brasil",
        b: "Canadá",
        c: "China",
        d: "México",
        correct: "b"
    },
    {
        question: "Qual dos seguintes pilotos brasileiros venceu uma corrida na Fórmula E?",
        a: "Felipe Massa",
        b: "Lucas di Grassi",
        c: "Nelson Piquet Jr.",
        d: "Rubens Barrichello",
        correct: "b"
    },
    {
        question: "Como é conhecido o modo de ultrapassagem temporária da Fórmula E, ativado ao passar por uma área específica da pista?",
        a: "Hyperboost",
        b: "Overdrive",
        c: "Attack Mode",
        d: "Push Mode",
        correct: "c"
    },
    {
        question: "Em qual cidade foi realizado o primeiro ePrix noturno da Fórmula E?",
        a: "Nova York",
        b: "Londres",
        c: "Berlim",
        d: "Diriyah",
        correct: "d"
    },
    {
        question: "Quantas temporadas a Fórmula E realizou até 2024?",
        a: "9",
        b: "10",
        c: "11",
        d: "12",
        correct: "c"
    },
    {
        question: "Qual piloto detém o maior número de vitórias na Fórmula E até 2024?",
        a: "Sebastien Buemi",
        b: "Lucas di Grassi",
        c: "Jean-Éric Vergne",
        d: "Stoffel Vandoorne",
        correct: "a"
    },
    {
        question: "Qual é a principal diferença entre a Fórmula E e a Fórmula 1?",
        a: "Fórmula E usa carros elétricos, enquanto Fórmula 1 usa carros a combustão",
        b: "Fórmula E tem mais corridas em circuitos permanentes",
        c: "Fórmula 1 tem carros mais lentos",
        d: "Fórmula E não permite pit stops",
        correct: "a"
    },
    {
        question: "Quantas corridas acontecem em uma temporada típica da Fórmula E?",
        a: "10",
        b: "12",
        c: "14",
        d: "16",
        correct: "c"
    },
    {
        question: "Qual é o nome do sistema de qualificação usado na Fórmula E?",
        a: "Qualifying Heat",
        b: "Super Pole",
        c: "Group Qualifying",
        d: "Speed Qualifying",
        correct: "c"
    },
    {
        question: "Quem foi o primeiro piloto a vencer uma corrida de Fórmula E?",
        a: "Nelson Piquet Jr.",
        b: "Lucas di Grassi",
        c: "Sebastien Buemi",
        d: "Jean-Éric Vergne",
        correct: "a"
    },
    {
        question: "Qual é o objetivo principal do 'Attack Mode' durante as corridas?",
        a: "Reduzir o tempo de pit stop",
        b: "Aumentar a potência do carro",
        c: "Ativar o modo de ultrapassagem",
        d: "Aumentar a eficiência energética",
        correct: "b"
    },
    {
        question: "Qual equipe é conhecida por seu envolvimento em tecnologia de carros elétricos, além de competições?",
        a: "Audi",
        b: "Jaguar",
        c: "BMW",
        d: "Nissan",
        correct: "b"
    },
    {
        question: "Qual cidade foi sede do primeiro ePrix realizado fora da Europa?",
        a: "Nova York",
        b: "Buenos Aires",
        c: "Hong Kong",
        d: "Riyadh",
        correct: "b"
    },
    {
        question: "Qual é a distância mínima de um ePrix da Fórmula E?",
        a: "20 voltas",
        b: "30 minutos",
        c: "45 minutos mais uma volta",
        d: "50 voltas",
        correct: "c"
    },
    {
        question: "Em qual evento especial os pilotos da Fórmula E competem em um circuito diferente, como parte do campeonato?",
        a: "FIA Formula E Race at Home Challenge",
        b: "FIA Formula E Championship",
        c: "ABB FIA Formula E Race Weekend",
        d: "ABB Formula E Festival",
        correct: "c"
    },
    {
        question: "Qual é a principal premiação do campeão da Fórmula E?",
        a: "Troféu e um carro elétrico",
        b: "Troféu e dinheiro",
        c: "Troféu e um contrato de equipe",
        d: "Troféu e uma viagem ao espaço",
        correct: "a"
    },
    {
        question: "Qual é a média de velocidade em uma corrida de Fórmula E?",
        a: "150 km/h",
        b: "180 km/h",
        c: "220 km/h",
        d: "300 km/h",
        correct: "b"
    },
    {
        question: "Qual país é conhecido por ter várias equipes competindo na Fórmula E?",
        a: "Alemanha",
        b: "França",
        c: "Reino Unido",
        d: "Todos os anteriores",
        correct: "d"
    },
    {
        question: "Qual é o papel do 'telemático' na Fórmula E?",
        a: "Registrar a velocidade dos carros",
        b: "Analisar os dados de desempenho em tempo real",
        c: "Controlar a temperatura do motor",
        d: "Gerenciar a equipe de pit stop",
        correct: "b"
    },
    {
        question: "Qual é o nome do campeonato de equipes da Fórmula E?",
        a: "FIA Formula E Teams Championship",
        b: "ABB Formula E Team Cup",
        c: "Formula E Constructors Championship",
        d: "Formula E Teams Challenge",
        correct: "c"
    },
    {
        question: "Quem foi o primeiro piloto a correr em uma equipe de Fórmula E sem experiência prévia em corridas?",
        a: "Nelson Piquet Jr.",
        b: "Simona de Silvestro",
        c: "Daniel Abt",
        d: "Mitch Evans",
        correct: "b"
    }
];

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [turboCoins, setTurboCoins] = useState(0); // Estado para Turbo Coins
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Função para ir para a próxima pergunta
  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuiz].correct) {
      setScore(score + 1);
      setTurboCoins(turboCoins + 10); // Adiciona 10 Turbo Coins por acerto
    }
    setSelectedAnswer(null);
    if (currentQuiz < quizData.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      setShowResult(true); // Mostra o resultado ao final do quiz
    }
  };

  // Função para reiniciar o quiz
  const handleResetQuiz = () => {
    setScore(0);
    setTurboCoins(0); // Reseta Turbo Coins
    setCurrentQuiz(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-yellow-500">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">
          Quiz de Conhecimentos Gerais
        </h1>

        {!showResult ? (
          <div>
            <p className="text-lg font-medium mb-4 text-white">
              {quizData[currentQuiz].question}
            </p>
            <div className="mb-4">
              <label className="block text-white">
                <input
                  type="radio"
                  name="answer"
                  value="a"
                  className="mr-2"
                  checked={selectedAnswer === "a"}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                {quizData[currentQuiz].a}
              </label>
              <label className="block text-white">
                <input
                  type="radio"
                  name="answer"
                  value="b"
                  className="mr-2"
                  checked={selectedAnswer === "b"}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                {quizData[currentQuiz].b}
              </label>
              <label className="block text-white">
                <input
                  type="radio"
                  name="answer"
                  value="c"
                  className="mr-2"
                  checked={selectedAnswer === "c"}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                {quizData[currentQuiz].c}
              </label>
              <label className="block text-white">
                <input
                  type="radio"
                  name="answer"
                  value="d"
                  className="mr-2"
                  checked={selectedAnswer === "d"}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                />
                {quizData[currentQuiz].d}
              </label>
            </div>
            <button
              onClick={handleNextQuestion}
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-500"
            >
              Próxima Pergunta
            </button>
          </div>
        ) : (
          <div className="text-center text-white">
            <p className="text-lg font-medium mb-4">
              Você acertou {score} de {quizData.length} perguntas!
            </p>
            <p className="text-lg font-medium mb-4">
              Você ganhou {turboCoins} Turbo Coins (TC)!
            </p>
            <button
              onClick={handleResetQuiz}
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-500"
            >
              Reiniciar Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
