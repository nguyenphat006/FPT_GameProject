import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import GamesSection from "@/app/Components/GamesSection";
import Footer from "@/app/Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navbar />
      <Hero />
      <GamesSection
        title="Games for Boys"
        games={[
          {
            id: 1,
            title: "Racing Game",
            description: "Experience high-speed racing!",
            image: "/public/img/game/500x500.png",
            playUrl: "https://example.com/racing-game",
          },
          {
            id: 2,
            title: "Adventure Game",
            description: "Embark on an exciting adventure!",
            image: "/public/img/game/500x500.png",
            playUrl: "https://example.com/adventure-game",
          },
          {
            id: 3,
            title: "Puzzle Game",
            description: "Solve challenging puzzles!",
            image: "/public/img/game/500x500.png",
            playUrl: "https://example.com/puzzle-game",
          },
          {
            id: 4,
            title: "Shooting Game",
            description: "Test your shooting skills!",
            image: "/public/img/game/500x500.png",
            playUrl: "https://example.com/shooting-game",
          },
        ]}
      />
      <GamesSection
        title="Games for Girls"
        games={[
          {
            id: 5,
            title: "Dress Up Game",
            description: "Create amazing fashion styles!",
            image: "/public/img/game/500x500.png",
            playUrl: "https://example.com/dress-up-game",
          },
          {
            id: 6,
            title: "Cooking Game",
            description: "Cook delicious meals!",
            image: "/public/img/game/500x500.png",
            playUrl: "https://example.com/cooking-game",
          },
          {
            id: 7,
            title: "Makeup Game",
            description: "Master the art of makeup!",
            image: "/public/img/game/500x500.png",
            playUrl: "https://example.com/makeup-game",
          },
          {
            id: 8,
            title: "Pet Care Game",
            description: "Take care of cute pets!",
            image: "/public/img/game/500x500.png",
            playUrl: "https://example.com/pet-care-game",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
