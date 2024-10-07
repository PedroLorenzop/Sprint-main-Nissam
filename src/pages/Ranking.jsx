import { useEffect, useState } from 'react';

// Função para simular URLs de bandeiras
const getFlagUrl = (countryCode) => `https://flagcdn.com/48x36/${countryCode}.png`;

// Exemplo de dados globais com 20 usuários (top 20)
const usuariosGlobais = [
  { id: 1, nome: 'Guilherme', pais: 'br' },
  { id: 2, nome: 'Larissa', pais: 'us' },
  { id: 3, nome: 'Felipe', pais: 'fr' },
  { id: 4, nome: 'Ana', pais: 'de' },
  { id: 5, nome: 'Marcos', pais: 'jp' },
  { id: 6, nome: 'Carla', pais: 'es' },
  { id: 7, nome: 'John', pais: 'us' },
  { id: 8, nome: 'Isabella', pais: 'it' },
  { id: 9, nome: 'Luiz', pais: 'br' },
  { id: 10, nome: 'David', pais: 'au' },
  { id: 11, nome: 'Carlos', pais: 'pt' },
  { id: 12, nome: 'Pedro', pais: 'br' },
  { id: 13, nome: 'Tom', pais: 'ca' },
  { id: 14, nome: 'Mateo', pais: 'ar' },
  { id: 15, nome: 'Oliver', pais: 'gb' },
  { id: 16, nome: 'Sofia', pais: 'mx' },
  { id: 17, nome: 'Emma', pais: 'se' },
  { id: 18, nome: 'Lucas', pais: 'br' },
  { id: 19, nome: 'Zara', pais: 'in' },
  { id: 20, nome: 'Mia', pais: 'nz' },
];

// Exemplo de dados nacionais (top 20 para o Brasil)
const usuariosNacionais = [
  { id: 1, nome: 'Guilherme' },
  { id: 2, nome: 'Ana' },
  { id: 3, nome: 'Marcos' },
  { id: 4, nome: 'Luiz' },
  { id: 5, nome: 'Pedro' },
  { id: 6, nome: 'Lucas' },
  { id: 7, nome: 'Carla' },
  { id: 8, nome: 'Isabela' },
  { id: 9, nome: 'Felipe' },
  { id: 10, nome: 'João' },
  { id: 11, nome: 'Bruna' },
  { id: 12, nome: 'Diego' },
  { id: 13, nome: 'Camila' },
  { id: 14, nome: 'José' },
  { id: 15, nome: 'Roberta' },
  { id: 16, nome: 'Gabriel' },
  { id: 17, nome: 'Bianca' },
  { id: 18, nome: 'Daniel' },
  { id: 19, nome: 'Juliana' },
  { id: 20, nome: 'Rafael' },
];

const Ranking = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState('global'); // Filtro para global ou nacional

  // Função para gerar pontos aleatórios e ordenar a lista de usuários
  const gerarPontosAleatorios = (listaUsuarios) => {
    const usuariosComPontos = listaUsuarios.map(usuario => ({
      ...usuario,
      pontos: Math.floor(Math.random() * 2000), // Gera entre 0 e 2000 Turbo Coins
    }));

    return usuariosComPontos.sort((a, b) => b.pontos - a.pontos); // Ordena os usuários por Turbo Coins
  };

  // UseEffect para atualizar os pontos assim que o filtro muda ou a página carrega
  useEffect(() => {
    if (filtro === 'global') {
      setUsuarios(gerarPontosAleatorios(usuariosGlobais));
    } else {
      setUsuarios(gerarPontosAleatorios(usuariosNacionais));
    }
  }, [filtro]);

  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-gradient-to-b from-blue-900 to-yellow-500 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Ranking de Usuários</h1>

      {/* Filtro para o ranking */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setFiltro('global')}
          className={`px-4 py-2 mr-4 rounded-lg ${
            filtro === 'global' ? 'bg-red-600 text-white' : 'bg-neutral-700 text-gray-300'
          } hover:bg-red-700 transition`}
        >
          Ranking Global
        </button>
        <button
          onClick={() => setFiltro('nacional')}
          className={`px-4 py-2 rounded-lg ${
            filtro === 'nacional' ? 'bg-red-600 text-white' : 'bg-neutral-700 text-gray-300'
          } hover:bg-red-700 transition`}
        >
          Ranking Nacional
        </button>
      </div>

      <table className="min-w-full bg-neutral-900 rounded-lg text-white">
        <thead>
          <tr>
            <th className="py-3 px-4 bg-red-600 text-left text-lg">Posição</th>
            <th className="py-3 px-4 bg-red-600 text-left text-lg">Usuário</th>
            <th className="py-3 px-4 bg-red-600 text-left text-lg">Turbo Coins</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={usuario.id} className="border-b border-gray-600 hover:bg-neutral-800 transition">
              <td className="py-3 px-4">{index + 1}º</td>
              <td className="py-3 px-4 flex items-center">
                {/* Se for o ranking global, exibe a bandeira */}
                {filtro === 'global' && (
                  <img
                    src={getFlagUrl(usuario.pais)}
                    alt={`Bandeira de ${usuario.pais}`}
                    className="w-6 h-4 mr-2"
                  />
                )}
                {usuario.nome}
              </td>
              <td className="py-3 px-4">{usuario.pontos} TC</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ranking;
