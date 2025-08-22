import Link from "next/link";
import { Game } from "@/data/games";
import Image from "next/image";

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    return (
        <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/welcome/${game.slug}`}>
                <div className="relative pt-4">
                    <div className="flex justify-center items-center">
                        <Image
                            src={game.imageUrl}
                            alt={game.title}
                            width={192}
                            height={192}
                            className="h-48 w-auto object-cover aspect-square rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                        />
                    </div>
                </div>
            </Link>
            <div className="p-4">
                <div className="bg-opacity-50 text-white p-2 w-full">
                    <h3 className="text-lg font-bold truncate text-center">
                        {game.title}
                    </h3>
                </div>
                <Link
                    href={`/games/${game.slug}`}
                    className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                    Play Now
                </Link>
            </div>
        </div>
    );
};

export default GameCard;
