import { FC } from 'react';
import { ExternalLink } from 'lucide-react';

interface CertCardProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  link?: string;
}

const CertCard: FC<CertCardProps> = ({ title, date, icon, link }) => (
  <div className="glass-card flex items-center gap-4 p-5 rounded-lg group hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-neon-violet/50">
    <div className="text-neon-violet text-3xl p-3 bg-white/5 rounded-md border border-white/10 group-hover:border-neon-violet/30 transition-colors">
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-lg text-white group-hover:text-neon-cyan transition-colors">{title}</h4>
      <p className="text-sm text-gray-400 font-mono mb-1">{date}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs text-neon-cyan hover:text-white transition-colors"
        >
          Verify Certificate <ExternalLink className="w-3 h-3 ml-1" />
        </a>
      )}
    </div>
  </div>
);

export default CertCard;
