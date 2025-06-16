import React, { useEffect, useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const LiveStream = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const streamUrl = "https://youtube.com/live/USUkf9jMwHk?feature=share";

  const handleShare = async () => {
    const shareData = {
      title: "Alekhya Alapati's Rangapravesam - Live Stream",
      text: "Watch Alekhya's Kuchipudi dance debut performance live!",
      url: streamUrl
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      // Fallback to clipboard copy
      try {
        await navigator.clipboard.writeText(streamUrl);
        alert('Stream link copied to clipboard!');
      } catch (clipboardError) {
        // Final fallback - show the URL in an alert
        alert(`Share this link: ${streamUrl}`);
      }
    }
  };

  return (
    <section 
      id="live-stream" 
      className="py-20 bg-gradient-to-br from-amber-800 to-amber-900 text-amber-50"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-4xl mx-auto text-center mt-[70px]">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Watch Live Performance
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                LIVE
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">
              Alekhya Alapati's Rangapravesam
            </h3>
            
            <p className="text-amber-100 mb-8 text-lg">
              Experience the beauty and grace of Kuchipudi dance as Alekhya presents her formal debut performance. 
              Join us live for this momentous cultural celebration.
            </p>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href={streamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Play size={24} />
                Watch on YouTube
                <ExternalLink size={20} />
              </a>
              
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Share Stream
              </button>
            </div>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-2">High Quality</h4>
              <p className="text-amber-100 text-sm">
                Professional streaming quality for the best viewing experience
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-2">Interactive</h4>
              <p className="text-amber-100 text-sm">
                Join the live chat and share your appreciation
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-semibold text-lg mb-2">Accessible</h4>
              <p className="text-amber-100 text-sm">
                Watch from anywhere in the world on any device
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LiveStream;