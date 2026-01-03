import React from 'react';
import Header from './components/Header';
import CompetenceCard from './components/CompetenceCard';
import { COMPETENCE_DATA } from './constants';

function App() {
  return (
    <div className="text-gray-800 min-h-screen pb-12">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title / Subtitle Text - Moved from Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide leading-tight text-[#050f41] mb-4">
            Competência dos Agentes <br className="hidden sm:block" /> Médicos-Periciais
          </h1>
          
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="bg-[#fab932] h-0.5 w-8 inline-block rounded-full"></span>
            <p className="text-sm sm:text-base font-medium text-gray-600 tracking-wider">
              DGPM-406 (9ª rev) - Cap 02
            </p>
            <span className="bg-[#fab932] h-0.5 w-8 inline-block rounded-full"></span>
            
            <a 
                href="https://drive.google.com/file/d/1L7TLBKFsRGaRI-rpaMEVvwg9bV_Y2A58/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Abrir DGPM-406 em uma nova aba"
                className="text-[#fab932] hover:text-[#050f41] transition-colors ml-1"
                title="Acessar Documento Original"
            >
                <span className="material-symbols-outlined text-xl align-middle">
                    open_in_new
                </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        
        <footer className="mt-20 flex flex-col items-center justify-center text-center">
            {/* Logo Footer Highlight - Size increased by approx 50% */}
            <div className="mb-6">
                <img 
                    src="https://i.imgur.com/lYp37Ar.png" 
                    alt="Logo Marinha do Brasil" 
                    className="h-36 sm:h-48 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                />
            </div>
        </footer>
      </main>
    </div>
  );
}

export default App;