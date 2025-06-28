// ----------------program guide component latest update start-----------------
import React, { useEffect, useRef } from "react";
import { Music2 } from "lucide-react";
import image1 from "../Public/assets/images/brochure photos/1gajavadhana.jpg";
import image2 from "../Public/assets/images/brochure photos/2saraswathi.jpg";
import image3 from "../Public/assets/images/brochure photos/3kalyanarama.jpg";
import image4 from "../Public/assets/images/brochure photos/4marakata.jpg";
import image5 from "../Public/assets/images/brochure photos/5muddhugare.jpg";
import image6 from "../Public/assets/images/brochure photos/06shivastakam.jpg";
import image7 from "../Public/assets/images/brochure photos/7thillana.jpg";

const ProgramGuide = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
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

  const performances = [
    {
      title: "Gajavadana Beduve",
      image: image1,
      composer: "Sangeeta Pitamaha Sri Purandaradasa",
      choreography: "Guru Padmabhushan Dr. Sri Vempati Chinna Satyam",
      ragam: "Hamsadhwani",
      talam: "Adi",
      description:
        "Gajavadana Beduve is a devotional composition by Sangeeta Pitamaha Sri Purandaradasa. In this song, Sri Purandaradasa glorifies Ganesha - invoked for auspicious beginnings, as Gajavadana, meaning \"the visage of an elephant\". The elephant head stands as a resplendent emblem of wisdom, intellect, and triumph over adversity. It is a beacon of discerning insight, a memory as vast as the ages, and a depth of understanding that guides us gracefully through life's labyrinthine trials. In particular, the song highlights Ganesha's attributes, including his strength, compassion, and divinity. With each graceful movement, the dancer calls upon his presence, her body a prayer in motion seeking his blessings.",
    },
    {
      title: "Saraswati Namosthuthe",
      composer: "Sri G.N. Balasubrahmanyam",
      choreography: "Guru Smt. Manju Hemamalini Chavali",
      ragam: "Saraswathy",
      image: image2,
      talam: "Rupaka",
      description:
        "Saraswati Namosthuthe is a devotional song dedicated to Saraswati, the goddess of knowledge. In this song, the 20th century composer, Sri G.N. Balasubrahmanyam, offers heartfelt praise for her grace, wisdom, and her unmatched power to ignite the intellect and inspire creativity. With grace and eloquence, the dancer honors Saraswati, her body tracing a prayer for clarity and guidance, her spirit yearning for a mind ever open to the gift of learning.",
    },
    {
      title: "Kalyana Rama",
      composer: "Sri Oothukkadu Venkata Subbaiyer",
      choreography: "Guru Smt. Manju Hemamalini Chavali",
      ragam: "Hansanaadam",
      image: image3,

      talam: "Adi",
      description:
        "Kalyana Rama is an exquisite composition that celebrates the auspicious attributes and acts of Sri Rama - incarnation of the supreme divine. Traditionally, choreographies for this song are focused solely on Sri Rama's divine marriage to Devi Sita, but in this novel choreography, Sri Rama is celebrated for his strength, virtue, and the compassion that he shows throughout his journey. The dancer brings to life key episodes from the Ramayana to demonstrate Rama's character. This includes his Pitru Vakya Paripalana, wherein he accepts his exile as a result of Kaikeyi's boons, his valor in confronting the demon Surpanakha, and his battle with Ravana, to save the abducted Sita. Through these moments, the dancer unveils how Rama's deeds, trials, and steadfast devotion to Dharma render him truly Kalyana - auspicious and noble - his every choice a beacon of virtue.",
    },
    {
      title: "Marakata Mani Maya Chela",
      composer: "Sri Oothukkadu Venkata Subbaiyer",
      choreography: "Padmabhushan Dr. Vempati Chinna Satyam",
      ragam: "Shankarabharanam and Arabhi",
      talam: "Adi",
      image: image4,

      description:
        "Marakata Mani Maya Chela is a Kirtana, performed as a Taranagam, a traditional Kuchipudi performance with two parts, the latter of which is performed on a brass plate. The intricate footwork displayed on the rims of the plate is a distinctive attribute of Kuchipudi dance. This particular taranagam describes Sri Krishna - the supreme divine, in a garment studded with an emerald gem of utmost beauty. With flute and butter held in gentle hands, and a countenance as luminous as a lotus in bloom, Krishna graces the world with his smile - eternally residing within the devotee's heart. The song weaves the story of Kuchela, Krishna's dear friend from days long past, who, though burdened by hardship, approaches him in humility, bearing only a simple gift of moldy oats. Shrouded in doubt, Kuchela questions his worth - but Krishna's embrace, brimming with warmth, melts his fears into joy. Krishna blesses him with prosperity and happiness.",
    },
    {
      title: "Muddugare Yashoda",
      composer: "Sri Tallapaka Annamacharya ",
      choreography: "Padmabhushan Dr. Vempati Chinna Satyam",
      ragam: "Kurunji",
      image: image5,
      talam: "Adi",
      description:
        "This delicate creation by the revered 15th century saint-poet, Padakavita Pitamaha Sri Tallapaka Annamacharya, exalts the sacred and tender bond between the child Krishna and his adoring mother Yashoda, while also weaving in glimpses of Krishna's other playful deeds. The composer adorns Krishna with metaphors of precious gems, illuminating his celestial beauty and irresistible charm. Through graceful movement, the dancer breathes life into two vivid episodes. One scene unfolds with Rukmini's heartfelt plea, her soul's longing for refuge from a marriage devoid of love, answered by Krishna's swift arrival - his chariot a herald of hope. The other reveals Krishna's daring dance upon the serpent Kaliya's hoods, a celestial ballet of valor, as he safeguards the gentle folk of Brindavan with every radiant movement. Through graceful and expressive movements, the dancer captures Krishna's playful innocence, divine power, and the devotion surrounding him.",
    },
    {
      title: "Shivashtakam ",
      composer: "Jagadguru Sri Adi Shankaracharya",
      choreography: "Padmabhushan Dr. Vempati Chinna Satyam",
      ragam: "Mohana",
      image: image6,
      talam: "Khanda Chapu",
      description:
        "Shivashtakam is a devotional hymn dedicated to Shiva - the supreme divine, by Jagadguru Sri Adi Shankaracharya. The term Ashtakam means eight verses in Sanskrit, and the song praises Shiva's divine qualities and the bliss found in surrendering to him. With fluid grace, the dancer embodies meditation, surrender, and the yearning for moksha - the ultimate liberation from the cycle of birth, death and rebirth, her movements a river of devotion. She invites the audience to awaken to the bliss of advaita bhavam-a journey where every step dissolves the self into the infinite through her soulful dance.",
    },
    {
      title: "Thillana ",
      composer: "Sri. Bhagavatula Sitarsmasarma",
      choreography: "Smt. Manju Hemamalini Chavali",
      ragam: "Sindhubhairavi",
      image: image7,
      talam: "Adi",
      description:
        "Thillana is the heart's pure dance-a vibrant cascade of footwork, expressive poses, and rhythmic brilliance that showcases the dancer's technical mastery and grace. As a classical jewel of Kuchipudi, it weaves repeating syllables into slow and swift patterns. Yet in this innovative choreography, Thillana embraces Kuchipudi's storytelling soul. The Sindhubhairavi Thillana pays homage to Durga - Shakti incarnate, fierce mother, and kind protector. Through dynamic rhythm and motion, the dancer unfolds the legend of Mahishasura, the demon who could be conquered only by a woman. Durga rises, radiant and mighty, her many arms wielding justice as she restores cosmic balance In every step, the dancer brings this tale of feminine power and universal harmony to dazzling life.",
    },
  ];

  return (
    <section
      id="program-guide"
      className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-amber-50"
    >
      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-in-out transform  translate-y-10 will-change-transform"
      >
        <div className="max-w-6xl mx-auto mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Program Guide
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8" />
            <p className="text-amber-200 text-lg max-w-3xl mx-auto leading-relaxed">
              The performance begins with <em>Vani Paraku</em>, an orchestral
              rendition of an invocatory prayer.
            </p>
          </div>

          <div className="space-y-12">
            {performances.map((performance, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500"
              >
                <div className="p-6 sm:p-8 md:p-12">
                  <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left Side – Decorative Box */}
                    <div className="lg:col-span-1 w-full max-w-[280px] mx-auto sm:mx-0">
                      <div className="relative w-full h-0 pb-[149%] bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-lg border-2 border-amber-400/30 flex items-center justify-center">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-amber-300">
                          <div>
                            {/* <Music2 size={32} /> */}

                            <img
                              src={performance.image}
                              alt="image"
                              height="auto"
                              width={300}
                              className="mt-5 rounded-[5px] "
                            />
                          </div>
                          <p className="text-sm">Performance {index + 1}</p>
                        </div>
                        {/* Decorative corners */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-amber-400" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-amber-400" />
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-amber-400" />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-amber-400" />
                      </div>
                    </div>

                    {/* Right Side – Details */}
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-amber-200 mb-4">
                          {performance.title}
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-4 mb-6 text-sm">
                          <div className="space-y-2">
                            <div className="flex gap-2 text-amber-300">
                              <span className="font-semibold">Composer:</span>
                              <span className="text-amber-100">
                                {performance.composer}
                              </span>
                            </div>
                            <div className="flex gap-2 text-amber-300">
                              <span className="font-semibold">
                                Choreography:
                              </span>
                              <span className="text-amber-100">
                                {performance.choreography}
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex gap-2 text-amber-300">
                              <Music2 size={16} />
                              <span className="font-semibold">Ragam:</span>
                              <span className="text-amber-100">
                                {performance.ragam}
                              </span>
                            </div>
                            <div className="flex gap-2 text-amber-300">
                              <span className="font-semibold">Talam:</span>
                              <span className="text-amber-100">
                                {performance.talam}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="prose prose-invert max-w-none">
                        <p className="text-amber-100 text-sm sm:text-base md:text-lg leading-relaxed">
                          {performance.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
              </div>
            ))}
          </div>
          <div className="text-center mt-20">
            <p className="text-amber-200 text-lg max-w-3xl mx-auto leading-relaxed">
              The performance concludes with <strong> Mangalam</strong> - a
              gesture of gratitude extended to the divine, the gurus,
              and the audience.
            </p>
          </div>

          {/* Closing Note */}
          <div className="mt-16 text-center">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-amber-400/20">
              <p className="text-amber-200 text-lg italic">
                Each performance piece represents years of dedicated practice
                and deep understanding of the classical Kuchipudi tradition,
                showcasing the rich cultural heritage and spiritual depth of
                this ancient art form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramGuide;

// ----------------program guide component latest update end-----------------



// ----- Coming Soon  start component -----

// import { Clock } from "lucide-react";

// function ProgramGuide() {
//   return (
//     <section
//       id="program-guide"
//       className="bg-amber-50 rounded-lg hover:shadow-lg transition-shadow duration-300 p-8 "
//     >
//       <div className="max-w-4xl mx-auto mt-[150px] ">
//         <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center">
//           Program Guide
//         </h2>

//         <div className="text-center px-4 sm:px-6 lg:px-8 py-10 bg-gradient-to-r from-amber-100 to-amber-100 mt-5 rounded-xl shadow-md">
//           <p className="text-lg sm:text-1xl md:text-1xl text-gray-700 max-w-2xl mx-auto leading-relaxed ">
//             Witness the divine artistry of Kuchipudi dance in its most sacred
//             form. Join us for an extraordinary Rangapravesam ceremony
//             celebrating the debut of talented dancers in this ancient classical
//             dance tradition from Andhra Pradesh.
//           </p>

//           <div className="bg-white bg-clip-text text-gray-700 flex justify-between items-center gap-2 w-fit mx-auto mt-5">
//             <Clock className="w-7 h-7 text-amber-600" />
//             <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold">
//               Coming Soon
//             </h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProgramGuide;

// ----- Coming Soon  End component -----