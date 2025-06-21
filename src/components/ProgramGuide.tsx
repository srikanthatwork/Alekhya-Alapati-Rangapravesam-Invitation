// // import React, { useEffect, useRef } from "react";
// // import { Music2 } from "lucide-react";
// // import image1 from "../Public/assets/images/brochure photos/1gajavadhana.jpg";
// // import image2 from "../Public/assets/images/brochure photos/2saraswathi.jpg";
// // import image3 from "../Public/assets/images/brochure photos/3kalyanarama.jpg";
// // import image4 from "../Public/assets/images/brochure photos/4marakata.jpg";
// // import image5 from "../Public/assets/images/brochure photos/5muddhugare.jpg";
// // import image6 from "../Public/assets/images/brochure photos/6shivastakam.jpg";
// // import image7 from "../Public/assets/images/brochure photos/7thillana.jpg";

// // const ProgramGuide = () => {
// //   const sectionRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           entry.target.classList.add("opacity-100", "translate-y-0");
// //           entry.target.classList.remove("opacity-0", "translate-y-10");
// //         }
// //       },
// //       {
// //         threshold: 0.1,
// //         rootMargin: "0px 0px -10% 0px",
// //       }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   const performances = [
// //     {
// //       title: "⁠ ⁠Gajavadana Beduve ",
// //       ragam: "Hamsadhwani",
// //       Composer: "Sangeeta pitamaha Sri Puranthara Dasa",
// //       Choreography: "Padmabhushan Dr. Vempati Chinna Satyam",
// //       talam: "Adi",
// //       img: image1,
// //       description:
// //         "Gajavadana Beduve is a devotional composition by Purandaradasa. Here Purandaradasa glorifies Ganesha, the remover of obstacles and is often referred to as Gajanana, meaning one with the face of an elephant. The song highlights the attributes of Ganesha including his strength, compassion, and divine presence. The dancer invokes his presence through graceful movements and seeks his blessings. ",
// //     },
// //     {
// //       title: "Saraswati Namostute",
// //       ragam: "Saraswathy ",
// //       talam: "Rupaka",
// //       Composer: "Sri GN Balasubrahmanyam",
// //       Choreography: "Smt. Manju Hemamalini Chavali",
// //       img: image2,
// //       description:
// //         "Saraswati Namostute is a devotional song dedicated to Saraswati, the Hindu goddess of knowledge, music & art, and learning. The composer offers heartfelt praise for her grace, wisdom, and power to inspire intellect and creativity. The dancer pays tribute to Saraswati through poised movements and expressive gestures, offering a prayer for clarity, guidance, and a mind open to learning.",
// //     },
// //     {
// //       title: "Kalyana Rama",
// //       ragam: "Hamsanaadam",
// //       Composer: "	Sri Oothukkadu Venkata Subbaiyer",
// //       Choreography: "Smt. Manju Hemamalini Chavali",
// //       talam: "Adi",
// //       img: image3,
// //       description:
// //         "Kalyana Rama⁠ ⁠is an exquisite composition that celebrates Sri Rama, not just for his divine marriage to Sita, but for the strength, virtue, and compassion he shows throughout his journey. The dancer brings to life key episodes from Kaikeyi’s request for boons to Dasaratha, to Soorpanaka’s confrontation, Sita’s abduction, and Rama’s battle with Ravana. Through these moments, the dancer reveals how Rama’s actions, trials, and unwavering dharma make him truly Kalyana—auspicious and noble. ",
// //     },
// //     {
// //       title: " ⁠Marakata Mani Maya Chela ",
// //       ragam: "Shankarabharanam and Arabhi",
// //       talam: "Adi",
// //       Composer: "Sri Oothukkadu Venkata Subbaiyer",
// //       Choreography: "     Padmabhushan Dr. Vempati Chinna Satyam",
// //       img: image4,
// //       description:
// //         "⁠⁠Marakata Mani Maya Chela is a Tarangam, a traditional Kuchipudi performance with two portions, the latter of which is performed on a brass plate. The intricate footwork displayed on the rims of the plate is a distinctive attribute of Kuchipudi dance. This particular tarangam describes Sri Krishna in the garment of an emerald gem with utmost beauty. Krishna is described as having flute and butter in his hands, a lotus face with a beautiful smile and residing permanently in the devotee’s heart. In the song, The story follows Kuchela, Krishna’s childhood friend, who, though very poor, decides to visit Krishna with a humble gift of moldy oats. Feeling unsure if he deserves Krishna’s attention, Kuchela is overwhelmed by Krishna’s warm welcome. Krishna lovingly washes Kuchela’s feet, applies sandalwood paste, and delights in the simple offering, blessing him with prosperity and happiness ",
// //     },
// //     {
// //       title: "Muddugare Yashoda ",
// //       ragam: "Kurunji",
// //       talam: "Adi",
// //       Composer: "Sri Tallapaka Annamacharya ",
// //       Choreography: "Padmabhushan Dr. Vempati Chinna Satyam",

// //       img: image5,
// //       description:
// //         "This tender composition by the 15th-century poet Tallapaka Annamacharya celebrates the loving bond between Krishna and his mother Yashoda. The composer compares Krishna to precious gems, highlighting his divine beauty and charm. The dancer brings to life two vivid episodes. The first shows Rukmini’s heartfelt plea to Krishna to rescue her from an unwanted marriage, which Krishna answers by arriving in a chariot to take her away. The second depicts Krishna’s daring dance on the serpent Kaliya’s hood to protect the people of Brindavan. Through graceful and expressive movements, the dancer captures Krishna’s playful innocence, divine power, and the devotion surrounding him.",
// //     },
// //     {
// //       title: "Shivashtakam ",
// //       Composer: "Jagadguru Sri Adi Shankaracharya",
// //       Choreography: "Padmabhushan Dr. Vempati Chinna Satyam",

// //       ragam: "Mohana",
// //       talam: "Khanda Chapu",
// //       img: image6,
// //       description:
// //         "Shivashtakam is a devotional hymn dedicated to Shiva, by the sage Adi Shankaracharya. The term 'Ashtakam' means 'eight'  in Sanskrit, and the song consists of eight verses that praise Lord Shiva’s divine qualities and the bliss found in surrendering to him. The dancer expresses themes of meditation, surrender, and spiritual liberation (moksha) with movements that seamlessly flow from one verse to the next, creating a continuous journey of devotion. The dancer invites the audience to experience devotion and the bliss of unity with the divine.",
// //     },
// //     {
// //       title: "Thillana",
// //       ragam: "Sindhubhairavi",
// //       talam: "Adi",
// //       Composer: "Sri. Bhagavatula Sitarsmasarma",
// //       Choreography: "Smt. Manju Hemamalini Chavali",
// //       img: image7,
// //       description:
// //         "⁠ ⁠Thillana is a pure nritta (footwork) piece with vibrant sequences and expressive poses showcasing the dancer's technical prowess, rhythmic skill, and graceful expression. Thilana is a classical component of Kuchipudi dance that follows a composition of certain syllables or words that are repeated rhythmically in slow and fast patterns. This Sindhubhairavi Thillana offers salutations to Goddess Durga as the embodiment of power (shakthi), motherhood, and kindness. The performance tells the story of Mahishasura, a demon who could only be defeated by a woman. Durga then appears, fierce and mighty with many arms, to battle and defeat him, restoring balance and justice. Through dynamic movements and rhythm, the dancer brings this powerful tale to life.",
// //     },
// //   ];

// //   return (
// //     <section id="program-guide" className="py-20 bg-white">
// //       <div
// //         ref={sectionRef}
// //         className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
// //       >
// //         <div className="max-w-4xl mx-auto mt-20">
// //           <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
// //             Program Guide
// //           </h2>

// //           <div className="space-y-6">
// //             {performances.map((performance, index) => (
// //               <div
// //                 key={index}
// //                 className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 w-full md:w-auto bg-amber-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
// //               >
// //                 <div className="p-6 w-full ">
// //                   <div className="flex items-start justify-between gap-4">
// //                     <div className="flex-grow">
// //                       <h3 className="text-xl md:text-2xl text-amber-800 font-semibold mb-3">
// //                         {performance.title}
// //                       </h3>
// //                       <div className="flex items-center gap-2 text-amber-700 mb-4 text-sm">
// //                         <Music2 size={16} />
// //                         <span>{performance.ragam}</span>
// //                         <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
// //                         <span>{performance.talam}</span>
// //                       </div>
// //                       <div className=" items-center gap-2 text-amber-700 mb-4 text-sm">
// //                         {/* <Music2 size={16} /> */}

// //                         <p className="flex flex-col sm:flex-row gap-2">
// //                           {" "}
// //                           <strong>Composer :</strong>
// //                           {performance.Composer}
// //                         </p>

// //                         <p className="flex flex-col sm:flex-row gap-2">
// //                           <strong>Choreography :</strong>
// //                           {performance.Choreography}
// //                         </p>
// //                       </div>
// //                     </div>
// //                     {/* <div className="text-amber-800 font-display text-2xl">
// //                       {index + 1}
// //                     </div> */}
// //                   </div>

// //                   <p className="text-stone-700 leading-relaxed text-sm md:text-base">
// //                     {performance.description}
// //                   </p>
// //                 </div>
// //                 <div>
// //                   <img
// //                     className="w-full max-w-[350px] h-auto object-cover rounded-lg"
// //                     src={performance.img}
// //                     alt={performance.title}
// //                   />
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProgramGuide;

// ----------------program guide component one start-----------------

// import React, { useEffect, useRef } from "react";
// import { Music2 } from "lucide-react";
// import image1 from "../Public/assets/images/brochure photos/1gajavadhana.jpg";
// import image2 from "../Public/assets/images/brochure photos/2saraswathi.jpg";
// import image3 from "../Public/assets/images/brochure photos/3kalyanarama.jpg";
// import image4 from "../Public/assets/images/brochure photos/4marakata.jpg";
// import image5 from "../Public/assets/images/brochure photos/5muddhugare.jpg";
// import image6 from "../Public/assets/images/brochure photos/6shivastakam.jpg";
// import image7 from "../Public/assets/images/brochure photos/7thillana.jpg";

// const ProgramGuide = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const el = sectionRef.current;
//     const onScroll = () => {
//       if (!el) return;
//       const rect = el.getBoundingClientRect();
//       if (rect.top < window.innerHeight * 0.9) {
//         el.classList.add("opacity-100", "translate-y-0");
//         el.classList.remove("opacity-0", "translate-y-10");
//         window.removeEventListener("scroll", onScroll);
//       }
//     };

//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const performances = [
//     {
//       title: "⁠ ⁠Gajavadana Beduve ",
//       ragam: "Hamsadhwani",
//       Composer: "Sangeeta Pitamaha Sri PurantharaDasa",
//       Choreography: "Padmabhushan Dr. Vempati Chinna Satyam",
//       talam: "Adi",
//       img: image1,
//       description:
//         "Gajavadana Beduve is a devotional composition by Purandaradasa. Here Purandaradasa glorifies Ganesha, the remover of obstacles and is often referred to as Gajanana, meaning one with the face of an elephant. The song highlights the attributes of Ganesha including his strength, compassion, and divine presence. The dancer invokes his presence through graceful movements and seeks his blessings. ",
//     },
//     {
//       title: "Saraswati Namostute",
//       ragam: "Saraswathy ",
//       talam: "Rupaka",
//       Composer: "Sri GN Balasubrahmanyam",
//       Choreography: "Smt. Manju Hemamalini Chavali",
//       img: image2,
//       description:
//         "Saraswati Namostute is a devotional song dedicated to Saraswati, the Hindu goddess of knowledge, music & art, and learning. The composer offers heartfelt praise for her grace, wisdom, and power to inspire intellect and creativity. The dancer pays tribute to Saraswati through poised movements and expressive gestures, offering a prayer for clarity, guidance, and a mind open to learning.",
//     },
//     {
//       title: "Kalyana Rama",
//       ragam: "Hamsanaadam",
//       Composer: "	Sri Oothukkadu Venkata Subbaiyer",
//       Choreography: "Smt. Manju Hemamalini Chavali",
//       talam: "Adi",
//       img: image3,
//       description:
//         "Kalyana Rama⁠ ⁠is an exquisite composition that celebrates Sri Rama, not just for his divine marriage to Sita, but for the strength, virtue, and compassion he shows throughout his journey. The dancer brings to life key episodes from Kaikeyi’s request for boons to Dasaratha, to Soorpanaka’s confrontation, Sita’s abduction, and Rama’s battle with Ravana. Through these moments, the dancer reveals how Rama’s actions, trials, and unwavering dharma make him truly Kalyana—auspicious and noble. ",
//     },
//     {
//       title: " ⁠Marakata Mani Maya Chela ",
//       ragam: "Shankarabharanam and Arabhi",
//       talam: "Adi",
//       Composer: "Sri Oothukkadu Venkata Subbaiyer",
//       Choreography: "     Padmabhushan Dr. Vempati Chinna Satyam",
//       img: image4,
//       description:
//         "⁠⁠Marakata Mani Maya Chela is a Tarangam, a traditional Kuchipudi performance with two portions, the latter of which is performed on a brass plate. The intricate footwork displayed on the rims of the plate is a distinctive attribute of Kuchipudi dance. This particular tarangam describes Sri Krishna in the garment of an emerald gem with utmost beauty. Krishna is described as having flute and butter in his hands, a lotus face with a beautiful smile and residing permanently in the devotee’s heart. In the song, The story follows Kuchela, Krishna’s childhood friend, who, though very poor, decides to visit Krishna with a humble gift of moldy oats. Feeling unsure if he deserves Krishna’s attention, Kuchela is overwhelmed by Krishna’s warm welcome. Krishna lovingly washes Kuchela’s feet, applies sandalwood paste, and delights in the simple offering, blessing him with prosperity and happiness ",
//     },
//     {
//       title: "Muddugare Yashoda ",
//       ragam: "Kurunji",
//       talam: "Adi",
//       Composer: "Sri Tallapaka Annamacharya ",
//       Choreography: "Padmabhushan Dr. Vempati Chinna Satyam",

//       img: image5,
//       description:
//         "This tender composition by the 15th-century poet Tallapaka Annamacharya celebrates the loving bond between Krishna and his mother Yashoda. The composer compares Krishna to precious gems, highlighting his divine beauty and charm. The dancer brings to life two vivid episodes. The first shows Rukmini’s heartfelt plea to Krishna to rescue her from an unwanted marriage, which Krishna answers by arriving in a chariot to take her away. The second depicts Krishna’s daring dance on the serpent Kaliya’s hood to protect the people of Brindavan. Through graceful and expressive movements, the dancer captures Krishna’s playful innocence, divine power, and the devotion surrounding him.",
//     },
//     {
//       title: "Shivashtakam ",
//       Composer: "Jagadguru Sri Adi Shankaracharya",
//       Choreography: "Padmabhushan Dr. Vempati Chinna Satyam",

//       ragam: "Mohana",
//       talam: "Khanda Chapu",
//       img: image6,
//       description:
//         "Shivashtakam is a devotional hymn dedicated to Shiva, by the sage Adi Shankaracharya. The term 'Ashtakam' means 'eight'  in Sanskrit, and the song consists of eight verses that praise Lord Shiva’s divine qualities and the bliss found in surrendering to him. The dancer expresses themes of meditation, surrender, and spiritual liberation (moksha) with movements that seamlessly flow from one verse to the next, creating a continuous journey of devotion. The dancer invites the audience to experience devotion and the bliss of unity with the divine.",
//     },
//     {
//       title: "Thillana",
//       ragam: "Sindhubhairavi",
//       talam: "Adi",
//       Composer: "Sri. Bhagavatula Sitarsmasarma",
//       Choreography: "Smt. Manju Hemamalini Chavali",
//       img: image7,
//       description:
//         "⁠ ⁠Thillana is a pure nritta (footwork) piece with vibrant sequences and expressive poses showcasing the dancer's technical prowess, rhythmic skill, and graceful expression. Thilana is a classical component of Kuchipudi dance that follows a composition of certain syllables or words that are repeated rhythmically in slow and fast patterns. This Sindhubhairavi Thillana offers salutations to Goddess Durga as the embodiment of power (shakthi), motherhood, and kindness. The performance tells the story of Mahishasura, a demon who could only be defeated by a woman. Durga then appears, fierce and mighty with many arms, to battle and defeat him, restoring balance and justice. Through dynamic movements and rhythm, the dancer brings this powerful tale to life.",
//     },
//   ];

//   return (
//     <section id="program-guide" className="py-16 bg-white">
//       <div
//         ref={sectionRef}
//         className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
//       >
//         <div className="max-w-4xl mx-auto mt-[130px] ">
//           <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
//             Program Guide
//           </h2>

//           <div className="space-y-6">
//             {performances.map((performance, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-amber-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
//               >
//                 <div className="p-4 w-full">
//                   <div className="flex flex-col md:flex-row items-start justify-between gap-4">
//                     <div className="flex-grow">
//                       <h3 className="text-xl md:text-2xl text-amber-800 font-semibold mb-3">
//                         {performance.title}
//                       </h3>
//                       <div className="flex items-center gap-2 text-amber-700 mb-2 text-sm">
//                         <Music2 size={16} />
//                         <span>{performance.ragam}</span>
//                         <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
//                         <span>{performance.talam}</span>
//                       </div>
//                       <p className="text-sm text-amber-700 mb-1">
//                         <strong>Composer:</strong> {performance.Composer}
//                       </p>
//                       <p className="text-sm text-amber-700 mb-3">
//                         <strong>Choreography:</strong>{" "}
//                         {performance.Choreography}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="text-stone-700 leading-relaxed text-sm md:text-base">
//                     {performance.description}
//                   </p>
//                 </div>

//                 <div className="w-full max-w-[350px]">
//                   <img
//                     className="w-full h-auto object-cover rounded-lg max-w-[350px] md:max-w-[400px] lg:max-w-[500px]"
//                     src={performance.img}
//                     alt={performance.title}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramGuide;

// ----------------program guide component one end-----------------

// ----- Coming Soon  start component -----

// import React, { useState, useEffect } from "react";
// import { Sparkles } from "lucide-react";
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

// ----------------program guide component latest update start-----------------
// import React, { useEffect, useRef } from "react";
// import { Music2 } from "lucide-react";

// const ProgramGuide = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("opacity-100", "translate-y-0");
//           entry.target.classList.remove("opacity-0", "translate-y-10");
//         }
//       },
//       {
//         threshold: 0.1,
//         rootMargin: "0px 0px -10% 0px",
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const performances = [
//     {
//       title: "Gajavadana Beduve",
//       composer: "Sangeeta Pitamaha Sri Purandaradasa",
//       choreography: "Guru Padmabhushan Dr. Sri Vempati Chinna Satyam",
//       ragam: "Hamsadhwani",
//       talam: "Adi",
//       description:
//         "Gajavadana Beduve is a devotional composition by Sangeeta Pitamaha Sri Purandaradasa. In this song, Sri Purandaradasa glorifies Ganesha - invoked for auspicious beginnings, as Gajavadana, meaning \"the visage of an elephant\". The elephant head stands as a resplendent emblem of wisdom, intellect, and triumph over adversity. It is a beacon of discerning insight, a memory as vast as the ages, and a depth of understanding that guides us gracefully through life's labyrinthine trials. In particular, the song highlights Ganesha's attributes, including his strength, compassion, and divinity. With each graceful movement, the dancer calls upon his presence, her body a prayer in motion seeking his blessings.",
//     },
//     {
//       title: "Saraswati Namosthuthe",
//       composer: "Sri G.N. Balasubrahmanyam",
//       choreography: "Guru Smt. Manju Hemamalini Chavali",
//       ragam: "Saraswathy",
//       talam: "Rupaka",
//       description:
//         "Saraswati Namosthuthe is a devotional song dedicated to Saraswati, the goddess of knowledge. In this song, the 20th century composer, Sri G.N. Balasubrahmanyam, offers heartfelt praise for her grace, wisdom, and her unmatched power to ignite the intellect and inspire creativity. With grace and eloquence, the dancer honors Saraswati, her body tracing a prayer for clarity and guidance, her spirit yearning for a mind ever open to the gift of learning.",
//     },
//     {
//       title: "Kalyana Rama",
//       composer: "Sri Oothukkadu Venkata Subbaiyer",
//       choreography: "Guru Smt. Manju Hemamalini Chavali",
//       ragam: "Hansanaadam",
//       talam: "Adi",
//       description:
//         "Kalyana Rama is an exquisite composition that celebrates the auspicious attributes and acts of Sri Rama - incarnation of the supreme divine. Traditionally, choreographies for this song are focused solely on Sri Rama's divine marriage to Devi Sita, but in this novel choreography, Sri Rama is celebrated for his strength, virtue, and the compassion that he shows throughout his journey. The dancer brings to life key episodes from the Ramayana to demonstrate Rama's character. This includes his Pitru Vakya Paripalana, wherein he accepts his exile as a result of Kaikeyi's boons, his valor in confronting the demon Surpanakha, and his battle with Ravana, to save the abducted Sita. Through these moments, the dancer unveils how Rama's deeds, trials, and steadfast devotion to Dharma render him truly Kalyana - auspicious and noble - his every choice a beacon of virtue.",
//     },
//     {
//       title: "Marakata Mani Maya Chela",
//       composer: "Sri Oothukkadu Venkata Subbaiyer",
//       choreography: "Padmabhushan Dr. Vempati Chinna Satyam",
//       ragam: "Shankarabharanam and Arabhi",
//       talam: "Adi",
//       description:
//         "Marakata Mani Maya Chela is a Kirtana, performed as a Taranagam, a traditional Kuchipudi performance with two parts, the latter of which is performed on a brass plate. The intricate footwork displayed on the rims of the plate is a distinctive attribute of Kuchipudi dance. This particular taranagam describes Sri Krishna - the supreme divine, in a garment studded with an emerald gem of utmost beauty. With flute and butter held in gentle hands, and a countenance as luminous as a lotus in bloom, Krishna graces the world with his smile - eternally residing within the devotee's heart. The song weaves the story of Kuchela, Krishna's dear friend from days long past, who, though burdened by hardship, approaches him in humility, bearing only a simple gift of moldy oats. Shrouded in doubt, Kuchela questions his worth - but Krishna's embrace, brimming with warmth, melts his fears into joy. Krishna blesses him with prosperity and happiness.",
//     },
//     {
//       title: "Muddugare Yashoda",
//       composer: "Sri Tallapaka Annamacharya ",
//       choreography: "Padmabhushan Dr. Vempati Chinna Satyam",
//       ragam: "Kurunji",
//       talam: "Adi",
//       description:
//         "This delicate creation by the revered 15th century saint-poet, Padakavita Pitamaha Sri Tallapaka Annamacharya, exalts the sacred and tender bond between the child Krishna and his adoring mother Yashoda, while also weaving in glimpses of Krishna's other playful deeds. The composer adorns Krishna with metaphors of precious gems, illuminating his celestial beauty and irresistible charm. Through graceful movement, the dancer breathes life into two vivid episodes. One scene unfolds with Rukmini's heartfelt plea, her soul's longing for refuge from a marriage devoid of love, answered by Krishna's swift arrival - his chariot a herald of hope. The other reveals Krishna's daring dance upon the serpent Kaliya's hoods, a celestial ballet of valor, as he safeguards the gentle folk of Brindavan with every radiant movement. Through graceful and expressive movements, the dancer captures Krishna's playful innocence, divine power, and the devotion surrounding him.",
//     },
//     {
//       title: "Shivashtakam ",
//       composer: "Jagadguru Sri Adi Shankaracharya",
//       choreography: "Padmabhushan Dr. Vempati Chinna Satyam",
//       ragam: "Mohana",
//       talam: "Khanda Chapu",
//       description:
//         "Shivashtakam is a devotional hymn dedicated to Shiva - the supreme divine, by Jagadguru Sri Adi Shankaracharya. The term Ashtakam means eight verses in Sanskrit, and the song praises Shiva's divine qualities and the bliss found in surrendering to him. With fluid grace, the dancer embodies meditation, surrender, and the yearning for moksha - the ultimate liberation from the cycle of birth, death and rebirth, her movements a river of devotion. She invites the audience to awaken to the bliss of advaita bhavam-a journey where every step dissolves the self into the infinite through her soulful dance.",
//     },
//     {
//       title: "Thillana ",
//       composer: "Sri. Bhagavatula Sitarsmasarma",
//       choreography: "Smt. Manju Hemamalini Chavali",
//       ragam: "Sindhubhairavi",
//       talam: "Adi",
//       description:
//         "Thillana is the heart's pure dance-a vibrant cascade of footwork, expressive poses, and rhythmic brilliance that showcases the dancer's technical mastery and grace. As a classical jewel of Kuchipudi, it weaves repeating syllables into slow and swift patterns. Yet in this innovative choreography, Thillana embraces Kuchipudi's storytelling soul. The Sindhubhairavi Thillana pays homage to Durga - Shakti incarnate, fierce mother, and kind protector. Through dynamic rhythm and motion, the dancer unfolds the legend of Mahishasura, the demon who could be conquered only by a woman. Durga rises, radiant and mighty, her many arms wielding justice as she restores cosmic balance In every step, the dancer brings this tale of feminine power and universal harmony to dazzling life.",
//     },
//   ];

//   return (
//     <section
//       id="program-guide"
//       className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-amber-50"
//     >
//       <div
//         ref={sectionRef}
//         className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
//       >
//         <div className="max-w-6xl mx-auto mt-[100px] ">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
//               Program Guide
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
//             <p className="text-amber-200 text-lg max-w-3xl mx-auto leading-relaxed">
//               The performance begins with <em>Vani Paraku</em>, an orchestral
//               rendition of an invocatory prayer.
//             </p>
//           </div>

//           <div className="space-y-12">
//             {performances.map((performance, index) => (
//               <div
//                 key={index}
//                 className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500"
//               >
//                 <div className="p-8 md:p-12">
//                   <div className="grid lg:grid-cols-3 gap-8 items-start">
//                     {/* Left side - Performance image placeholder */}
//                     <div className="lg:col-span-1">
//                       <div className="relative">
//                         <div className="aspect-[3/4] bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-lg border-2 border-amber-400/30 flex items-center justify-center">
//                           <div className="text-center text-amber-300">
//                             <div className="w-16 h-16 mx-auto mb-4 bg-amber-400/20 rounded-full flex items-center justify-center">
//                               <Music2 size={32} />
//                             </div>
//                             <p className="text-sm">Performance {index + 1}</p>
//                           </div>
//                         </div>
//                         {/* Decorative corner elements */}
//                         <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-amber-400"></div>
//                         <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-amber-400"></div>
//                         <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-amber-400"></div>
//                         <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-amber-400"></div>
//                       </div>
//                     </div>

//                     {/* Right side - Performance details */}
//                     <div className="lg:col-span-2">
//                       <div className="mb-6">
//                         <h3 className="text-3xl md:text-4xl font-display font-bold text-amber-200 mb-4">
//                           {performance.title}
//                         </h3>

//                         {/* Technical details */}
//                         <div className="grid md:grid-cols-2 gap-4 mb-6">
//                           <div className="space-y-2">
//                             <div className="flex items-center gap-2 text-amber-300">
//                               <span className="font-semibold">Composer:</span>
//                               <span className="text-amber-100">
//                                 {performance.composer}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-2 text-amber-300">
//                               <span className="font-semibold">
//                                 Choreography:
//                               </span>
//                               <span className="text-amber-100">
//                                 {performance.choreography}
//                               </span>
//                             </div>
//                           </div>
//                           <div className="space-y-2">
//                             <div className="flex items-center gap-2 text-amber-300">
//                               <Music2 size={16} />
//                               <span className="font-semibold">Ragam:</span>
//                               <span className="text-amber-100">
//                                 {performance.ragam}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-2 text-amber-300">
//                               <span className="font-semibold">Talam:</span>
//                               <span className="text-amber-100">
//                                 {performance.talam}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Description */}
//                       <div className="prose prose-lg max-w-none">
//                         <p className="text-amber-100 leading-relaxed text-base md:text-lg">
//                           {performance.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Bottom decorative border */}
//                 <div className="h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
//               </div>
//             ))}
//           </div>

//           {/* Closing note */}
//           <div className="mt-16 text-center">
//             <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-amber-400/20">
//               <p className="text-amber-200 text-lg italic">
//                 Each performance piece represents years of dedicated practice
//                 and deep understanding of the classical Kuchipudi tradition,
//                 showcasing the rich cultural heritage and spiritual depth of
//                 this ancient art form.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramGuide;
import React, { useEffect, useRef } from "react";
import { Music2 } from "lucide-react";
import image1 from "../Public/assets/images/brochure photos/1gajavadhana.jpg";
import image2 from "../Public/assets/images/brochure photos/2saraswathi.jpg";
import image3 from "../Public/assets/images/brochure photos/3kalyanarama.jpg";
import image4 from "../Public/assets/images/brochure photos/4marakata.jpg";
import image5 from "../Public/assets/images/brochure photos/5muddhugare.jpg";
import image6 from "../Public/assets/images/brochure photos/06shivastakam.jpg";
import image7 from "../Public/assets/images/brochure photos/7thillana.jpg";
// import { Description } from "@radix-ui/react-dialog";

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
                              className="mt-5 rounded-[5px]"
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
              and the audience.
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
