"use client";

import { games } from "@/data/games";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";
import GameCard from "@/components/GameCard";

function formatCategory(name: string) {
    // Turn camelCase / PascalCase into words and trim
    return name
        .replace(/([A-Z])/g, " $1")
        .replace(/\s+/g, " ")
        .trim();
}

function slugify(name: string) {
    return formatCategory(name)
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
}

// group games by category
const groupedGames: Record<string, typeof games> = games.reduce((acc, g) => {
    if (!acc[g.category]) acc[g.category] = [];
    acc[g.category].push(g);
    return acc;
}, {} as Record<string, typeof games>);

export default function Home() {
    const categories = Object.keys(groupedGames);

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="space-y-8">
                {categories.map((cat) => (
                    <section
                        key={cat}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        aria-labelledby={`cat-${cat}`}
                    >
                        {/* Left fixed label / icon */}
                        <div className="w-full sm:w-40 flex-shrink-0">
                            <div className="flex items-center gap-3">
                                <Link
                                    href={`/category/${slugify(cat)}`}
                                    aria-label={`Open category ${formatCategory(
                                        cat
                                    )}`}
                                    className="inline-flex items-center gap-3 h-20 w-full px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
                                >
                                    <h3
                                        id={`cat-${cat}`}
                                        className="text-lg sm:text-xl font-bold w-full text-white"
                                    >
                                        {formatCategory(cat)}
                                    </h3>
                                </Link>
                            </div>
                        </div>

                        {/* Right: horizontal slider using Marquee (scroll enabled) */}
                        <div className="flex-1 w-full overflow-x-auto">
                            <Marquee
                                gradient={false}
                                speed={40}
                                pauseOnHover={true}
                                className="py-2"
                            >
                                {groupedGames[cat].map((game) => (
                                    <Link
                                        href={`/welcome/${game.slug}`}
                                        key={game.id}
                                        className="mx-3 sm:mx-4 inline-block"
                                    >
                                        <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-gray-800/30 flex items-center justify-center transition-transform transform hover:scale-105 px-1">
                                            <Image
                                                src={game.imageUrl}
                                                alt={game.title}
                                                width={128}
                                                height={128}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </Link>
                                ))}
                            </Marquee>
                        </div>
                    </section>
                ))}
            </div>

            {/* Featured games (30) - match category page layout */}
            <section className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl font-semibold">Featured games</h2>
                    <p className="text-sm text-gray-400 hidden sm:block">A curated list of 30 games — responsive for every screen.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" aria-label="Featured games grid">
                    {games.slice(0, 30).map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </section>

            {/* About / Introduction section (expanded) */}
            <section className="mt-12 bg-white/5 rounded-lg p-6 lg:p-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">About Picuz</h2>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        Picuz began as a small idea: a place to catch a few spare minutes of joy between the errands of daily life. Over time that pocket of
                        leisure grew into a library - not a museum of polished trophies, but a friendly shelf of small worlds where curiosity is rewarded and
                        nothing asks for too much. We collect games the way some people collect postcards: for the way they capture a single mood, a sudden
                        laugh, or a momentary triumph. Each title is a tiny invitation, and Picuz is the map that helps you find your way.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        Our selection philosophy is gentle and practical. We look for games that open quickly and teach themselves through play. We prize
                        craftsmanship in compact forms - a clever mechanic, a pleasing animation, an unexpected twist that lifts a few minutes into memory.
                        Many of our visitors arrive with little time and even less patience for friction; they want to play, not to configure. For that reason we
                        favor experiences that are resilient: games that run well on modest connections, scale for mobile, and reward a single attentive breath.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        The homepage is arranged like a stroll through a market of games. Categories are presented as horizontal sliders so you can browse
                        quickly - the left-hand label acts as a signpost while the marquee glides with thumbnails and color. On wider screens this layout gives
                        you a calm, scanning rhythm: glance left to pick a lane, then follow the parade of tiles as they pass. On phones and smaller devices the
                        rows stack and the same flow becomes a gentle vertical scroll, keeping the feeling consistent across devices.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        We rely on a mix of in-house curation and third‑party partners. Some games are hosted by creators who embed their work in our pages;
                        others are curated files served from our storage. While we test each title for basic function and compatibility, embedded providers may
                        occasionally change APIs or availability - if a game breaks, please tell us so we can reach out and repair the link. Your reports help
                        us keep the library lively and functioning for everyone.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        Picuz is free to use. To sustain the site we use modest, unobtrusive advertising and occasional sponsored placements, chosen to be as
                        respectful as possible of gameplay. We do not sell personal data, and we keep any analytics we collect lightweight and focused on
                        improving the product. If privacy is a priority for you, many games still work offline after being cached by the browser - though some
                        embedded content will naturally require an active connection.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        For creators: if you design small interactive experiences and want them tried by a wider audience, we'd love to hear from you. Submissions
                        are read by real people, and we welcome inventive mechanics, charming aesthetics, and thoughtful accessibility features. For players:
                        use the search to find favorites, try categories you wouldn't normally click, and share what you love - recommendations matter.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        A few practical tips: landscape mode on mobile often gives extra room for play; closing and reopening a misbehaving embed will sometimes
                        clear a temporary hiccup; and if a game asks for permissions or redirections, read the prompt - some interactions come from the game
                        provider, not Picuz. We strive to document such cases where possible.
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        In the end, Picuz is about small pleasures. We hope this site becomes your pause button - a place to breathe, to experiment, to chase a
                        high score, or simply to watch a clever little system unfold. If the site makes you smile once, that's a success; if it becomes a weekly
                        habit, that is a great honor.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        Thank you for visiting. May you find unexpected delight in a tiny game, and may a brief victory brighten your day.
                    </p>
                </div>
            </section>

        </main>
    );
}
