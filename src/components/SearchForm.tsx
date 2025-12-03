import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Globe, Loader2 } from 'lucide-react';

interface SearchFormProps {
  onSearch: (url: string, query: string) => void;
  isLoading: boolean;
}

export const SearchForm = ({ onSearch, isLoading }: SearchFormProps) => {
  const [url, setUrl] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim() && query.trim()) {
      onSearch(url.trim(), query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-4">
      <div className="space-y-3">
        <div className="relative">
          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="pl-12 h-12 bg-secondary/50 border-border/50 focus:bg-secondary"
            required
          />
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="What are you looking for?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 h-12 bg-secondary/50 border-border/50 focus:bg-secondary"
            required
          />
        </div>
      </div>

      <Button 
        type="submit" 
        variant="glow"
        size="lg"
        className="w-full font-semibold"
        disabled={isLoading || !url.trim() || !query.trim()}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Searching...
          </>
        ) : (
          <>
            <Search className="h-5 w-5" />
            Search HTML Content
          </>
        )}
      </Button>
    </form>
  );
};
