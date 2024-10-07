import { useState } from 'react';
import ArrowChatButton from '../components/ArrowChatButton';

const CarCustomization = () => {
  // Estados para armazenar a modificação escolhida em cada categoria
  const [selectedAerodynamics, setSelectedAerodynamics] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('');
  const [selectedTires, setSelectedTires] = useState('');
  const [selectedSuspension, setSelectedSuspension] = useState('');

  // Estados para armazenar os desempenhos
  const [speed, setSpeed] = useState(50);
  const [acceleration, setAcceleration] = useState(50);
  const [control, setControl] = useState(50);
  const [description, setDescription] = useState('Selecione uma alteração para ver o impacto no carro.');

  // Função para alterar os valores de desempenho com base na escolha
  const handleModificationChange = (category, option) => {
    switch (category) {
      case 'aerodynamics':
        setSelectedAerodynamics(option);
        if (option === 'high-downforce') {
          setSpeed(70);
          setControl(80);
          setAcceleration(60);
          setDescription('A aerodinâmica com alto downforce melhora a aderência nas curvas, mas pode sacrificar um pouco de velocidade em retas.');
        } else if (option === 'low-downforce') {
          setSpeed(90);
          setControl(60);
          setAcceleration(85);
          setDescription('Aerodinâmica de baixo downforce aumenta a velocidade nas retas, mas diminui o controle em curvas.');
        } else if (option === 'balanced') {
          setSpeed(80);
          setControl(75);
          setAcceleration(70);
          setDescription('Aerodinâmica balanceada oferece um bom equilíbrio entre velocidade, controle e aceleração.');
        }
        break;

      case 'engine':
        setSelectedEngine(option);
        if (option === 'high-power') {
          setSpeed(95);
          setAcceleration(90);
          setControl(60);
          setDescription('Um motor de alta potência oferece velocidade e aceleração, mas o controle pode ser mais difícil.');
        } else if (option === 'medium-power') {
          setSpeed(80);
          setAcceleration(75);
          setControl(75);
          setDescription('Um motor de potência média oferece um bom equilíbrio entre aceleração e controle.');
        } else if (option === 'efficient') {
          setSpeed(70);
          setAcceleration(65);
          setControl(85);
          setDescription('Um motor eficiente consome menos energia, proporcionando maior controle e estabilidade.');
        }
        break;

      case 'tires':
        setSelectedTires(option);
        if (option === 'sport') {
          setControl(85);
          setSpeed(80);
          setAcceleration(75);
          setDescription('Pneus esportivos melhoram o desempenho em pista seca e aumentam a aderência.');
        } else if (option === 'off-road') {
          setControl(60);
          setSpeed(65);
          setAcceleration(55);
          setDescription('Pneus off-road proporcionam melhor desempenho em terrenos irregulares, mas sacrificam o desempenho em pista.');
        } else if (option === 'intermediate') {
          setControl(75);
          setSpeed(75);
          setAcceleration(65);
          setDescription('Pneus intermediários oferecem uma solução balanceada entre aderência e durabilidade.');
        }
        break;

      case 'suspension':
        setSelectedSuspension(option);
        if (option === 'rigid') {
          setControl(90);
          setSpeed(70);
          setAcceleration(80);
          setDescription('Suspensão rígida melhora o controle em pistas suaves, mas pode ser desconfortável em terrenos irregulares.');
        } else if (option === 'soft') {
          setControl(60);
          setSpeed(60);
          setAcceleration(65);
          setDescription('Suspensão macia oferece conforto, mas diminui a resposta em pistas de alta velocidade.');
        } else if (option === 'balanced') {
          setControl(75);
          setSpeed(75);
          setAcceleration(70);
          setDescription('Suspensão balanceada oferece uma mistura de controle e conforto para diferentes condições de pista.');
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-6">Personalize o Carro da Fórmula E</h1>
      
      {/* Menu de opções detalhadas */}
      <div className="options-menu grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Aerodinâmica */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold mb-2">Aerodinâmica</h3>
          <select
            value={selectedAerodynamics}
            onChange={(e) => handleModificationChange('aerodynamics', e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-gray-200 w-full"
          >
            <option value="" disabled>Selecione uma opção</option>
            <option value="high-downforce">Alto Downforce</option>
            <option value="low-downforce">Baixo Downforce</option>
            <option value="balanced">Balanceado</option>
          </select>
        </div>

        {/* Motor */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold mb-2">Motor</h3>
          <select
            value={selectedEngine}
            onChange={(e) => handleModificationChange('engine', e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-gray-200 w-full"
          >
            <option value="" disabled>Selecione uma opção</option>
            <option value="high-power">Alta Potência</option>
            <option value="medium-power">Potência Média</option>
            <option value="efficient">Eficiente</option>
          </select>
        </div>

        {/* Pneus */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold mb-2">Pneus</h3>
          <select
            value={selectedTires}
            onChange={(e) => handleModificationChange('tires', e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-gray-200 w-full"
          >
            <option value="" disabled>Selecione uma opção</option>
            <option value="sport">Esportivo</option>
            <option value="off-road">Off-road</option>
            <option value="intermediate">Intermediário</option>
          </select>
        </div>

        {/* Suspensão */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold mb-2">Suspensão</h3>
          <select
            value={selectedSuspension}
            onChange={(e) => handleModificationChange('suspension', e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-gray-200 w-full"
          >
            <option value="" disabled>Selecione uma opção</option>
            <option value="rigid">Rígida</option>
            <option value="soft">Macia</option>
            <option value="balanced">Balanceada</option>
          </select>
        </div>
      </div>

      {/* Barras de desempenho */}
      <div className="performance-bars mb-6">
        <h3 className="text-lg font-semibold mb-2">Desempenho</h3>
        <div className="mb-4">
          <label className="block mb-1">Velocidade</label>
          <div className="w-full bg-gray-700 rounded-full h-6">
            <div className="bg-blue-600 h-6 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${speed}%` }}></div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Aceleração</label>
          <div className="w-full bg-gray-700 rounded-full h-6">
            <div className="bg-blue-600 h-6 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${acceleration}%` }}></div>
          </div>
        </div>
        <div>
          <label className="block mb-1">Controle</label>
          <div className="w-full bg-gray-700 rounded-full h-6">
            <div className="bg-blue-600 h-6 rounded-full transition-all duration-500 ease-in-out" style={{ width: `${control}%` }}></div>
          </div>
        </div>
      </div>
      <ArrowChatButton />
      {/* Descrição da modificação */}
      <div className="modification-description bg-gray-900 p-4 rounded-lg text-white shadow-lg">
        <p className="text-lg">{description}</p>
      </div>
    </div>
    
  );
};

export default CarCustomization;
