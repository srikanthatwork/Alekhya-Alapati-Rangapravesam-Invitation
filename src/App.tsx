import React from "react";
import { ScrollText } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventBanner from "./components/EventBanner";
import CountdownTimer from "./components/CountdownTimer";
import LiveStream from "./components/LiveStream";
import ProgramGuide from "./components/ProgramGuide";
import ExpertGuidance from "./components/ExpertGuidance";
// import Academic from "./components/Academic";
import Cultural from "./components/Cultural";
import Closing from "./components/Closing";
import Footer from "./components/Footer";
import About from "./components/Biography.tsx";

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 font-serif w-full">
      <Navbar />
      <EventBanner />
      <main>
         <Hero />
        <LiveStream />
        <CountdownTimer />
        <ProgramGuide />
        <About /> 
        <ExpertGuidance />
        {/* <Academic /> */}
        <Cultural />
        <Closing />
      </main>
      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-amber-700 text-amber-50 p-3 rounded-full shadow-lg hover:bg-amber-800 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ScrollText size={24} />
      </button>
    </div>
  );
}

export default App;
