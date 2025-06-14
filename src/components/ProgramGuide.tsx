import React, { useEffect, useRef } from "react";
import { Music2 } from "lucide-react";
import image1 from "../../Public/assets/images/brochure photos/1gajavadhana.jpg";
import image2 from "../../Public/assets/images/brochure photos/2saraswathi.jpg";
import image3 from "../../Public/assets/images/brochure photos/3kalyanarama.jpg";
import image4 from "../../Public/assets/images/brochure photos/4marakata.jpg";
import image5 from "../../Public/assets/images/brochure photos/5muddhugare.jpg";
import image6 from "../../Public/assets/images/brochure photos/6shivastakam.jpg";
import image7 from "../../Public/assets/images/brochure photos/7thillana.jpg";

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
      title: "⁠ ⁠Gajavadana Beduve ",
      ragam: "Hamsadhwani",
      Composer: "Sangeeta pitamaha Sri Puranthara Dasa",
      Choreography: "Padmabhushan Dr. Vempati Chinna Satyam",
      talam: "Adi",
      img: image1,
      description:
        "Gajavadana Beduve is a devotional composition by Purandaradasa. Here Purandaradasa glorifies Ganesha, the remover of obstacles and is often referred to as Gajanana, meaning one with the face of an elephant. The song highlights the attributes of Ganesha including his strength, compassion, and divine presence. The dancer invokes his presence through graceful movements and seeks his blessings. ",
    },
    {
      title: "Saraswati Namostute",
      ragam: "Saraswathy ",
      talam: "Rupaka",
      Composer: "Sri GN Balasubrahmanyam",
      Choreography: "Smt. Manju Hemamalini Chavali",
      img: image2,
      description:
        "Saraswati Namostute is a devotional song dedicated to Saraswati, the Hindu goddess of knowledge, music & art, and learning. The composer offers heartfelt praise for her grace, wisdom, and power to inspire intellect and creativity. The dancer pays tribute to Saraswati through poised movements and expressive gestures, offering a prayer for clarity, guidance, and a mind open to learning.",
    },
    {
      title: "Kalyana Rama",
      ragam: "Hamsanaadam",
      Composer: "	Sri Oothukkadu Venkata Subbaiyer",
      Choreography: "Smt. Manju Hemamalini Chavali",
      talam: "Adi",
      img: image3,
      description:
        "Kalyana Rama⁠ ⁠is an exquisite composition that celebrates Sri Rama, not just for his divine marriage to Sita, but for the strength, virtue, and compassion he shows throughout his journey. The dancer brings to life key episodes from Kaikeyi’s request for boons to Dasaratha, to Soorpanaka’s confrontation, Sita’s abduction, and Rama’s battle with Ravana. Through these moments, the dancer reveals how Rama’s actions, trials, and unwavering dharma make him truly Kalyana—auspicious and noble. ",
    },
    {
      title: " ⁠Marakata Mani Maya Chela ",
      ragam: "Shankarabharanam and Arabhi",
      talam: "Adi",
      Composer: "Sri Oothukkadu Venkata Subbaiyer",
      Choreography: "     Padmabhushan Dr. Vempati Chinna Satyam",
      img: image4,
      description:
        "4.⁠ ⁠Marakata Mani Maya Chela is a Tarangam, a traditional Kuchipudi performance with two portions, the latter of which is performed on a brass plate. The intricate footwork displayed on the rims of the plate is a distinctive attribute of Kuchipudi dance. This particular tarangam describes Sri Krishna in the garment of an emerald gem with utmost beauty. Krishna is described as having flute and butter in his hands, a lotus face with a beautiful smile and residing permanently in the devotee’s heart. In the song, The story follows Kuchela, Krishna’s childhood friend, who, though very poor, decides to visit Krishna with a humble gift of moldy oats. Feeling unsure if he deserves Krishna’s attention, Kuchela is overwhelmed by Krishna’s warm welcome. Krishna lovingly washes Kuchela’s feet, applies sandalwood paste, and delights in the simple offering, blessing him with prosperity and happiness ",
    },
    {
      title: "Muddugare Yashoda ",
      ragam: "Kurunji",
      talam: "Adi",
      Composer: "Sri Tallapaka Annamacharya ",
      Choreography: "Padmabhushan Dr. Vempati Chinna Satyam",

      img: image5,
      description:
        "This tender composition by the 15th-century poet Tallapaka Annamacharya celebrates the loving bond between Krishna and his mother Yashoda. The composer compares Krishna to precious gems, highlighting his divine beauty and charm. The dancer brings to life two vivid episodes. The first shows Rukmini’s heartfelt plea to Krishna to rescue her from an unwanted marriage, which Krishna answers by arriving in a chariot to take her away. The second depicts Krishna’s daring dance on the serpent Kaliya’s hood to protect the people of Brindavan. Through graceful and expressive movements, the dancer captures Krishna’s playful innocence, divine power, and the devotion surrounding him.",
    },
    {
      title: "Shivashtakam ",
      Composer: "Jagadguru Sri Adi Shankaracharya",
      Choreography: "Padmabhushan Dr. Vempati Chinna Satyam",

      ragam: "Mohana",
      talam: "Khanda Chapu",
      img: image6,
      description:
        "Shivashtakam is a devotional hymn dedicated to Shiva, by the sage Adi Shankaracharya. The term 'Ashtakam' means 'eight'  in Sanskrit, and the song consists of eight verses that praise Lord Shiva’s divine qualities and the bliss found in surrendering to him. The dancer expresses themes of meditation, surrender, and spiritual liberation (moksha) with movements that seamlessly flow from one verse to the next, creating a continuous journey of devotion. The dancer invites the audience to experience devotion and the bliss of unity with the divine.",
    },
    {
      title: "Thillana",
      ragam: "Sindhubhairavi",
      talam: "Adi",
      Composer: "Sri. Bhagavatula Sitarsmasarma",
      Choreography: "Smt. Manju Hemamalini Chavali",
      img: image7,
      description:
        "⁠ ⁠Thillana is a pure nritta (footwork) piece with vibrant sequences and expressive poses showcasing the dancer's technical prowess, rhythmic skill, and graceful expression. Thilana is a classical component of Kuchipudi dance that follows a composition of certain syllables or words that are repeated rhythmically in slow and fast patterns. This Sindhubhairavi Thillana offers salutations to Goddess Durga as the embodiment of power (shakthi), motherhood, and kindness. The performance tells the story of Mahishasura, a demon who could only be defeated by a woman. Durga then appears, fierce and mighty with many arms, to battle and defeat him, restoring balance and justice. Through dynamic movements and rhythm, the dancer brings this powerful tale to life.",
    },
  ];

  return (
    <section id="program-guide" className="py-20 bg-white">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
            Program Guide
          </h2>

          <div className="space-y-6">
            {performances.map((performance, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 w-full md:w-auto bg-amber-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 w-full ">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl text-amber-800 font-semibold mb-3">
                        {performance.title}
                      </h3>
                      <div className="flex items-center gap-2 text-amber-700 mb-4 text-sm">
                        <Music2 size={16} />
                        <span>{performance.ragam}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
                        <span>{performance.talam}</span>
                      </div>
                      <div className=" items-center gap-2 text-amber-700 mb-4 text-sm">
                        {/* <Music2 size={16} /> */}

                        <p className="flex flex-col sm:flex-row gap-2">
                          {" "}
                          <strong>Composer :</strong>
                          {performance.Composer}
                        </p>

                        <p className="flex flex-col sm:flex-row gap-2">
                          <strong>Choreography :</strong>
                          {performance.Choreography}
                        </p>
                      </div>
                    </div>
                    {/* <div className="text-amber-800 font-display text-2xl">
                      {index + 1}
                    </div> */}
                  </div>

                  <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                    {performance.description}
                  </p>
                </div>
                <div>
                  <img
                    style={{
                      borderRadius: "10px",
                    }}
                    src={performance.img}
                    alt=""
                    height={100}
                    width={350}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramGuide;
