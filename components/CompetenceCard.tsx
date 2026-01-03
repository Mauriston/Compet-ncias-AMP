import React from 'react';

interface CompetenceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  competencies: string[];
}

const CompetenceCard: React.FC<CompetenceCardProps> = ({ icon, title, description, competencies }) => {
  return (
    <section className="bg-white rounded-lg shadow-lg border border-gray-100 flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#050f41] to-[#079551]"></div>
      
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="text-[#fab932] bg-[#050f41]/5 p-3 rounded-full flex-shrink-0">
            {icon}
          </div>
          <div>
             <h2 className="font-bold text-2xl text-[#050f41] leading-tight">
              {title}
            </h2>
          </div>
        </div>

        <p className="text-gray-600 mb-8 font-medium leading-relaxed border-l-4 border-[#fab932] pl-4">
          {description}
        </p>
        
        <h3 className="text-sm font-bold text-[#050f41] uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
          Competências Atribuídas
        </h3>

        <ul className="list-none p-0 space-y-3">
          {competencies.map((item, index) => (
            <li 
              key={index} 
              className="flex items-start text-gray-700 text-base hover:bg-gray-50 p-2 rounded transition-colors"
            >
              <span className="text-[#079551] mr-3 mt-1 text-xs leading-none">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CompetenceCard;