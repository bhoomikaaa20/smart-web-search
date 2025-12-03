import { Sparkles, Code2 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="text-center mb-12">
      <div className="inline-flex items-center justify-center gap-3 mb-6">
        <div className="relative">
          <div className="glass-card rounded-xl p-3 animate-pulse-glow">
            <Code2 className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        <span className="gradient-text">Semantic</span>{' '}
        <span className="text-foreground">HTML Search</span>
      </h1>

      <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
        Enter a website URL and search query to find the most relevant content 
        using <span className="text-primary font-medium">AI-powered</span> vector embeddings.
      </p>

      <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
        <Sparkles className="h-4 w-4 text-primary" />
        <span className="font-mono">Top 10 semantic matches • 500-token chunks</span>
      </div>
    </header>
  );
};
