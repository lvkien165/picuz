import { games } from "@/data/games";
import GameCard from "@/components/GameCard";

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
    const q = (searchParams.q || "").toLowerCase().trim();
    const results = q
        ? games.filter(
              (g) =>
                  g.title.toLowerCase().includes(q) ||
                  g.category.toLowerCase().includes(q)
          )
        : [];

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Search results</h1>

            {q === "" ? (
                <p className="text-gray-400">Enter a query in the search box.</p>
            ) : results.length === 0 ? (
                <p className="text-gray-400">No games found for "{q}".</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {results.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            )}
        </main>
    );
}
