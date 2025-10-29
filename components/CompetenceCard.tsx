
import React from 'react';

interface CompetenceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  competencies: string[];
}

const CompetenceCard: React.FC<CompetenceCardProps> = ({ icon, title, description, competencies }) => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <h2 className="font-bold text-3xl text-[#050f41] mb-4 flex items-center">
        <span className="mr-3">{icon}</span>
        {title}
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        {description}
      </p>
      <ul className="list-none p-0 space-y-2">
        {competencies.map((item, index) => (
          <li 
            key={index} 
            className="bg-slate-50 p-3 rounded-lg flex items-start text-gray-700 text-lg border border-slate-200"
          >
            <span className="text-[#050f41] mr-3 mt-1 text-lg leading-none">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompetenceCard;