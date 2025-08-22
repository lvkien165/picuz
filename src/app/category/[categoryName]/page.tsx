import { games } from "@/data/games";
import GameCard from "@/components/GameCard";
import { notFound } from "next/navigation";

function formatCategory(name: string) {
    return name.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").trim();
}

function slugify(name: string) {
    return formatCategory(name)
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

export function generateStaticParams() {
    const categories = [...new Set(games.map((game) => slugify(game.category)))];
    return categories.map((category) => ({
        categoryName: category,
    }));
}

export default function CategoryPage({
    params,
}: {
    params: { categoryName: string };
}) {
    const categoryName = params.categoryName;
    const gamesInCategory = games.filter(
        (game) => slugify(game.category) === categoryName
    );

    if (gamesInCategory.length === 0) {
        notFound();
    }

    const capitalizedCategory = gamesInCategory[0]
        ? formatCategory(gamesInCategory[0].category)
        : categoryName;

    return (
        <main className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-8 text-center">
                {capitalizedCategory} Games
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {gamesInCategory.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </main>
    );
}
