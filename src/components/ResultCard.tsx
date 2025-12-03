import { FileText, TrendingUp } from 'lucide-react';

interface ResultCardProps {
  content: string;
  score: number;
  index: number;
}

export const ResultCard = ({ content, score, index }: ResultCardProps) => {
  const scorePercent = Math.round(score * 100);
  const staggerClass = `stagger-${Math.min(index + 1, 10)}`;

  return (
    <div 
      className={`glass-card glass-card-hover glow-effect rounded-xl p-5 opacity-0 animate-fade-up ${staggerClass}`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <FileText className="h-4 w-4" />
          <span className="text-xs font-mono">Chunk #{index + 1}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-16 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                style={{ width: `${scorePercent}%` }}
              />
            </div>
            <span className="text-sm font-mono font-medium text-primary">
              {scorePercent}%
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-foreground/90 leading-relaxed line-clamp-4">
        {content}
      </p>
      
      <div className="mt-3 pt-3 border-t border-border/30">
        <p className="text-xs text-muted-foreground font-mono truncate">
          {content.length} characters
        </p>
      </div>
    </div>
  );
};
