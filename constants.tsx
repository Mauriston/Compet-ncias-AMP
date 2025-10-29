
import React from 'react';

export interface CompetenceCardData {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  competencies: string[];
}

const JRS_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
  </svg>
);

const MPI_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM13.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 8.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM11.25 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 8.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 14.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 15a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25.75.75 0 0 1-1.5 0A6.75 6.75 0 0 1 12 0a6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0A5.25 5.25 0 0 0 12 1.5ZM3 13.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 13.5ZM18.75 12.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5ZM4.136 19.864a.75.75 0 0 1 1.06 0l.75.75a.75.75 0 0 1-1.06 1.06l-.75-.75a.75.75 0 0 1 0-1.06ZM18.01 19.864a.75.75 0 0 1 0 1.06l-.75.75a.75.75 0 0 1-1.06-1.06l.75-.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
  </svg>
);

const MPIQ_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M19.5 7.5a3 3 0 0 0-3-3h-8.25a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9ZM8.25 6a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h8.25a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-8.25Zm.75 3.75a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5H9Zm-.75 2.25a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5H9Z" clipRule="evenodd" />
  </svg>
);

export const COMPETENCE_DATA: CompetenceCardData[] = [
  {
    id: 'jrs',
    title: 'JRS (Junta Regular de Saúde)',
    icon: JRS_ICON,
    description: 'As JRS são responsáveis por uma ampla gama de inspeções de saúde, abrangendo desde o ingresso até o término de incapacidades e benefícios.',
    competencies: [
      'Concessão de Benefícios',
      'Apreciação documental de IS encaminhadas por Médico Perito Isolado (MPI)',
      'Apreciação documental de IS realizadas por outra Força',
      'Apreciação documental ex officio daquelas IS de VDF/Benefício encaminhadas por MPI',
      'Comprovação de Nexo Causal Laborativo (Atestado de Origem, Inquérito Sanitário de Origem)',
      'Exame de sanidade em Atestado de Origem, conforme área de jurisdição',
      'Ingresso no SAM (Serviço Ativo da Marinha)',
      'Ingresso no SMV (Serviço Militar Voluntário)',
      'Ingresso no SPG (Serviço Público em Geral)',
      'IS de Alunos Militares Estrangeiros para Cursos na MB',
      'IS para fim de controle trienal e término de restrições/incapacidade para o SAM, exaradas previamente por JSAE',
      'IS para fim de término de restrições, concedidas previamente por JSD, por ocasião da aptidão com restrições na IS inicial de recurso de 1ª instância ou em IS subsequente',
      'Justiça e Disciplina',
      'Licença para Tratamento de Saúde em Pessoa da Família (LTSPF)',
      'Missão Antártica',
      'Missão no Exterior, nos casos de militares portadores assintomáticos do HIV ou com restrições',
      'Readaptação ao SPG',
      'Redistribuição ao SPG',
      'Reintegração ao SPG',
      'Reintegração no SAM',
      'Remoção ao SPG',
      'Reversão ao SPG',
      'Servir em Localidades Deficientes em Assistência Sanitária',
      'Término de Incapacidade ou Restrições',
      'Verificação de Deficiências Funcionais (VDF)',
      'Verificação do estado de sanidade psicofísica para ingresso ou permanência no SAM',
      'Verificação do estado de sanidade psicofísica para ingresso ou permanência no SPG',
    ],
  },
  {
    id: 'mpi',
    title: 'MPI (Médico Perito Isolado)',
    icon: MPI_ICON,
    description: 'Os Médicos Peritos Isolados (MPI) atuam em diversas avaliações, incluindo controles periódicos e saídas de serviço.',
    competencies: [
      'Avaliação Inicial e Semestral dos Operadores de Reator Nuclear',
      'Contratação de pessoal por tempo determinado',
      'Controle Anual para serviço em praça de máquinas',
      'Controle periódico de saúde de servidores civis',
      'Controle periódico de saúde do pessoal militar',
      'Cursos de carreira (não relacionados com Atividades Especiais)',
      'Deixar o SAM',
      'Deixar o SMI (Serviço Militar Inicial)',
      'Deixar o SMV',
      'Deixar o SPG',
      'Designação de militares RM1 para função de atividade (Reconvocação)',
      'Designação de militares RM1 para Tarefa por Tempo Certo',
      'Engajamento e Reengajamento (com e sem restrições)',
      'Exame Toxicológico (admissional e pós-admissional)',
      'Ingresso no SMV de militares oriundos do SMI',
      'Manipulação e administração de Terapia Antineoplásica',
      'Missão no Exterior',
      'Operação com Raio-X e Substâncias Radioativas',
      'Prorrogação do tempo de serviço',
      'Seleção e Controle para manuseio do propelente OTTO FUEL II e explosivos',
      'Seleção para Estágio de Qualificação Técnica Especial de Operações Especiais (E-Qtesp-Oesp)',
    ],
  },
  {
    id: 'mpiq',
    title: 'MPIQ (Médico Perito Isolado Qualificado)',
    icon: MPIQ_ICON,
    description: 'O Médico Perito Isolado Qualificado (MPIQ) tem uma competência específica de homologação documental.',
    competencies: [
      'Homologação documental de IS realizada por Médico Perito Isolado Qualificado (MPIQ)',
    ],
  },
];
