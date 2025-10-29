
import React from 'react';
import Header from './components/Header';
import CompetenceCard from './components/CompetenceCard';
import { COMPETENCE_DATA } from './constants';

function App() {
  return (
    <div className="text-gray-800 p-4 sm:p-6 md:p-8">
      <Header />
      <main className="max-w-7xl mx-auto">
        <p className="text-2xl text-center mb-8 text-gray-700">
            Este infográfico detalha as diversas competências dos Agentes Médico-Periciais (AMP) da Marinha do Brasil,
            organizadas de acordo com a finalidade de cada Inspeção de Saúde. Explore as seções para entender as
            responsabilidades de cada tipo de agente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETENCE_DATA.map((data) => (
            <CompetenceCard
              key={data.id}
              icon={data.icon}
              title={data.title}
              description={data.description}
              competencies={data.competencies}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;