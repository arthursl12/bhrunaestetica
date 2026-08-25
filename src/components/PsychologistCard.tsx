import React from 'react';
import { Video } from 'lucide-react';
import { WhatsAppIcon } from './Shared';
import { WHATSAPP_LINK } from './Shared';
import { Psychologist } from '../data/psychologists';
import { trackEvent } from './Shared';

interface PsychologistCardProps {
  psychologist: Psychologist;
}

const PsychologistCard: React.FC<PsychologistCardProps> = ({ psychologist }) => {
  const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(psychologist.whatsappText)}`;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-brand-100 flex flex-col overflow-hidden">
      {/* Photo - ~52% */}
      <div className="relative aspect-[3/2] min-h-[280px] w-full bg-brand-100 shrink-0">
        <img 
          src={psychologist.photo} 
          alt={psychologist.name} 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Online badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-brand-700 flex items-center gap-1 shadow-sm">
          <Video className="w-3 h-3" /> Online
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-brand-800 text-lg mb-1">{psychologist.name}</h3>
        
        {/* Specialty Tag */}
        <span className="inline-block bg-brand-100 text-brand-700 text-xs font-medium px-3 py-1 rounded-full mb-2 w-fit">
          {psychologist.specialty}
        </span>
        
        {/* CRP */}
        {psychologist.crp && <p className="text-xs text-brand-400 mb-3">{psychologist.crp}</p>}
        
        {/* Bio - truncate at 7 lines */}
        <p className="text-brand-900/70 text-sm leading-relaxed flex-1 line-clamp-7 mb-4">
          {psychologist.bio}
        </p>
        
        {/* CTA - anchored at bottom */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click')}
          className="w-full text-center bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 font-bold py-3 px-4 rounded-2xl text-sm transition-colors flex items-center justify-center gap-2"
        >
          <WhatsAppIcon className="w-4 h-4" />
          {psychologist.gender === 'f' ? `Gostei da ${psychologist.firstName}` : `Gostei do ${psychologist.firstName}`}
        </a>
      </div>
    </div>
  );
};

export default PsychologistCard;
