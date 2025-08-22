import { games } from "@/data/games";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return games.map((game) => ({
        slug: game.slug,
    }));
}

export default function GamePage({ params }: { params: { slug: string } }) {
    const game = games.find((g) => g.slug === params.slug);

    if (!game) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-8 text-center">
                {game.title}
            </h1>
            <div className="bg-black aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white">
                    <iframe
                        style={{ backgroundColor: "transparent" }}
                        allow="fullscreen"
                        className="w-full h-full"
                        src={game.iframeGameUrl}
                    />
                </div>
            </div>
        </div>
    );
}
