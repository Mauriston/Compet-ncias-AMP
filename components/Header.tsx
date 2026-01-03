import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#050f41] text-white rounded-none sm:rounded-b-lg shadow-xl mb-8 border-b-4 border-[#fab932]">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Main Header Image - Size increased by approx 40% */}
        <div className="w-full flex justify-center">
          <img 
            src="https://i.imgur.com/QJOmuG0.png" 
            alt="Cabeçalho Marinha do Brasil" 
            className="h-auto max-h-44 sm:max-h-56 object-contain"
          />
        </div>

      </div>
    </header>
  );
};

export default Header;