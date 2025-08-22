import { games } from "@/data/games";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function WelcomePage({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const game = games.find((g) => g.slug === slug);

	if (!game) return notFound();

	return (
		<main className="min-h-screen bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto bg-white/5 p-6 md:p-10 rounded-lg shadow-lg border border-white/5">
					<div className="flex flex-col md:flex-row items-center gap-6">
						<div className="w-full md:w-1/3 flex justify-center">
							<div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden bg-gray-800/30 flex items-center justify-center">
								<Image
									src={game.imageUrl}
									alt={game.title}
									width={224}
									height={224}
									className="object-cover w-full h-full"
								/>
							</div>
						</div>

						<div className="w-full md:w-2/3">
							<h1 className="text-2xl md:text-3xl font-bold mb-2">{game.title}</h1>
							<p className="text-gray-300 mb-4">Category: {game.category}</p>

							<div className="flex gap-3 flex-wrap">
								<Link
									href={`/games/${game.slug}`}
									className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-md shadow"
								>
									Play
								</Link>

								<Link
									href="/"
									className="inline-block bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-md"
								>
									Back to home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

