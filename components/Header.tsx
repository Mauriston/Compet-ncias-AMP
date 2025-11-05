
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#050f41] text-white rounded-lg p-6 mb-8 text-center shadow-lg">
      <h1 className="text-5xl sm:text-6xl font-extrabold">Competência dos Agentes Médicos-Periciais</h1>
      <div className="flex justify-center items-center gap-2 mt-2">
        <p className="text-2xl sm:text-3xl opacity-90">DGPM-406 (9ª rev) - Cap 02</p>
        <a 
            href="https://drive.google.com/file/d/1L7TLBKFsRGaRI-rpaMEVvwg9bV_Y2A58/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Abrir DGPM-406 em uma nova aba"
            className="text-white hover:text-gray-300 transition-colors"
        >
            <span className="material-symbols-outlined text-3xl align-middle">
                open_in_new
            </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
