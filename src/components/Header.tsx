"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    const categories = [
        "Arcade",
        "Strategy",
        "Adventure",
        "Action",
        "Puzzle",
        "Sports",
    ];
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = searchQuery.trim();
        if (q) {
            router.push(`/search?q=${encodeURIComponent(q)}`);
        } else {
            router.push(`/search`);
        }
    };

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-3xl font-bold text-cyan-500">
                    Picuz
                </Link>
                <form onSubmit={handleSearch} className="flex items-center">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search games..."
                        className="bg-gray-700 text-white px-2 py-2 rounded-l-md focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 px-4 py-3 rounded-r-md cursor-pointer"
                    >
                        <FaSearch />
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
