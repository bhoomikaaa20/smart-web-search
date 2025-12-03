import { ResultCard } from './ResultCard';
import { SearchX } from 'lucide-react';

interface SearchResult {
  content: string;
  score: number;
}

interface ResultsListProps {
  results: SearchResult[];
  hasSearched: boolean;
}

export const ResultsList = ({ results, hasSearched }: ResultsListProps) => {
  if (!hasSearched) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="glass-card rounded-full p-6 mb-4">
          <SearchX className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
        <p className="text-muted-foreground text-sm max-w-md">
          We couldn't find any relevant content matching your query. Try adjusting your search terms or check the URL.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          Search Results
        </h2>
        <span className="text-sm text-muted-foreground font-mono">
          {results.length} matches found
        </span>
      </div>

      <div className="grid gap-4">
        {results.map((result, index) => (
          <ResultCard
            key={index}
            content={result.content}
            score={result.score}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
