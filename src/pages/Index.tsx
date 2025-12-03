import { useState } from 'react';
import { Header } from '@/components/Header';
import { SearchForm } from '@/components/SearchForm';
import { ResultsList } from '@/components/ResultsList';
import { toast } from 'sonner';

interface SearchResult {
  content: string;
  score: number;
}

// Mock data for demonstration - replace with actual API call
const mockSearch = async (url: string, query: string): Promise<SearchResult[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock results
  return [
    {
      content: `Found relevant content from ${url} related to "${query}". This section discusses the main concepts and provides detailed information about the topic you're searching for. The content is semantically matched to your query.`,
      score: 0.94
    },
    {
      content: "Another highly relevant section that matches your search criteria. This chunk contains valuable information that directly addresses the concepts mentioned in your query with practical examples and explanations.",
      score: 0.89
    },
    {
      content: "This paragraph explores related concepts and provides additional context. It connects to your search query through semantic relationships identified by the embedding model.",
      score: 0.82
    },
    {
      content: "Supporting information found in the HTML content. This section provides background context and foundational knowledge related to your search terms.",
      score: 0.78
    },
    {
      content: "A moderately relevant section that touches on aspects of your query. While not directly addressing the main topic, it provides useful supplementary information.",
      score: 0.71
    },
    {
      content: "Additional content discovered through vector similarity search. This chunk shares semantic properties with your search query and may contain useful insights.",
      score: 0.67
    },
    {
      content: "Related technical documentation found within the page structure. Contains specifications and details that may be relevant to your investigation.",
      score: 0.63
    },
    {
      content: "A section discussing implementation details and practical applications. Semantically connected to your query through shared terminology and concepts.",
      score: 0.58
    },
    {
      content: "Background information and historical context related to the searched topic. Provides foundational understanding of the subject matter.",
      score: 0.54
    },
    {
      content: "The final matched chunk with lower but still meaningful relevance to your query. Contains tangentially related information that may provide additional perspectives.",
      score: 0.49
    }
  ];
};

const Index = () => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (url: string, query: string) => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      // TODO: Replace with actual API call to backend
      // const response = await fetch('/api/search', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ url, query })
      // });
      // const data = await response.json();
      // setResults(data.results);

      const data = await mockSearch(url, query);
      setResults(data);
      toast.success(`Found ${data.length} relevant chunks`);
    } catch (error) {
      console.error('Search failed:', error);
      toast.error('Search failed. Please try again.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-3xl" />
        </div>
      </div>

      <main className="relative z-10 container max-w-4xl mx-auto px-4 py-12 md:py-20">
        <Header />
        
        <section className="mb-16">
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        </section>

        <section>
          <ResultsList results={results} hasSearched={hasSearched} />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30 py-6 mt-auto">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            Powered by vector embeddings & semantic search
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
