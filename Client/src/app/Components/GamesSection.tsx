"use client";

import { motion } from "framer-motion";

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  playUrl: string;
}

interface GamesSectionProps {
  title: string;
  games: Game[];
}

export default function GamesSection({ title, games }: GamesSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{game.title}</h3>
                <p className="text-gray-300">{game.description}</p>
                <a
                  href={game.playUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition duration-300"
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
