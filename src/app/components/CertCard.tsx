import { FC } from 'react';

interface CertCardProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  link?: string;
}

const CertCard: FC<CertCardProps> = ({ title, date, icon, link }) => (
  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
    <div className="text-indigo-600 dark:text-indigo-400 text-3xl">{icon}</div>
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{date}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 text-sm hover:underline"
        >
          Ver Certificado
        </a>
      )}
    </div>
  </div>
);

export default CertCard;
