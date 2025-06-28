// import React, { useEffect, useRef } from "react";
// import Alekhya from "../Public/assets/images/Alekhya.png";
// const Hero = () => {
//   const heroRef = useRef<HTMLDivElement>(null);

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
//       }
//     );

//     if (heroRef.current) {
//       observer.observe(heroRef.current);
//     }

//     return () => {
//       if (heroRef.current) {
//         observer.unobserve(heroRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center pt-16 pb-24 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 mt-8"
//     >
//       {/* Decorative border pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
//         <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
//         <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
//       </div>

//       {/* Decorative corner elements */}
//       <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-amber-400 opacity-60"></div>
//       <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-amber-400 opacity-60"></div>
//       <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-amber-400 opacity-60"></div>
//       <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-amber-400 opacity-60"></div>

//       {/* Ganesha symbol at top center */}
//       <div className="absolute top-12 left-1/2 transform -translate-x-1/2 ">
//         <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-amber-900 text-2xl font-bold shadow-lg mt-5">
//           ॐ
//         </div>
//       </div>

//       <div
//         ref={heroRef}
//         className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-amber-50 z-10 transition-all duration-1000 transform opacity-0 translate-y-10"
//       >
//         <div className="max-w-6xl mx-auto ">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left side - Dancer image */}
//             <div className="order-2 lg:order-1 flex justify-center ">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg transform rotate-3"></div>
//                 <img
//                   src={Alekhya}
//                   alt="Alekhya Alapati in Kuchipudi costume"
//                   className="
//       relative rounded-lg shadow-2xl border-4 border-amber-400/30
//       w-[280px] h-[400px]
//       sm:w-[320px] sm:h-[450px]
//       md:w-[360px] md:h-[500px]
//       lg:w-[450px] lg:h-[600px]
//     "
//                 />
//                 {/* Decorative elements around image */}
//                 <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-amber-400 rounded-full bg-amber-400/20"></div>
//                 <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-amber-400 rounded-full bg-amber-400/20"></div>
//                 <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-amber-400 rounded-full bg-amber-400/20"></div>
//                 <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-amber-400 rounded-full bg-amber-400/20"></div>
//               </div>
//             </div>

//             {/* Right side - Event details */}
//             <div className="order-1 lg:order-2 text-left lg:text-left ml-5 mt-7 p-7">
//               <div className="mt-[50px]">
//                 <p className="text-amber-200 text-lg mb-2 font-light">
//                   Manjula & Satish Alapati
//                 </p>
//                 <p className="text-amber-200 text-base mb-4">
//                   Cordially invite you and your family to the
//                 </p>
//               </div>

//               <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight text-amber-100">
//                 Kuchipudi Rangapravesam
//               </h1>

//               <p className="text-amber-300 text-xl mb-2">
//                 (Indian Classical Solo Dance Debut)
//               </p>
//               <p className="text-amber-200 text-lg mb-6">of</p>

//               <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-amber-100">
//                 Alekhya Alapati
//               </h2>

//               <p className="text-amber-300 text-base sm:text-lg mb-8">
//                 Disciple of Guru Smt. Manju Hemamalini Chavali
//               </p>

//               <div className="bg-amber-700/50 backdrop-blur-sm rounded-lg p-6 mb-6 border border-amber-400/30">
//                 <div className="text-center">
//                   <p className="text-3xl md:text-4xl font-bold text-amber-200 mb-2">
//                     June 28, 2025
//                   </p>
//                   <p className="text-amber-300 text-lg mb-4">at</p>
//                   <p className="text-xl font-semibold text-amber-100 mb-1">
//                     Coppell Arts Center
//                   </p>
//                   <p className="text-amber-300">
//                     505 Travis St, Coppell, TX 75019
//                   </p>
//                 </div>
//               </div>

//               {/* Detailed timing information */}
//               <div className="bg-amber-700/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-amber-400/30">
//                 <div className="text-center space-y-2">
//                   <p className="text-amber-100 font-semibold">
//                     3:00 PM Seating Time
//                   </p>
//                   <p className="text-amber-200">3:30 PM Performance</p>
//                   <p className="text-amber-200">
//                     followed by Dinner at 7:00 PM
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-amber-700/50 backdrop-blur-sm rounded-lg p-4 mb-8 border border-amber-400/30">
//                 <p className="text-amber-200 text-center">
//                   <span className="font-semibold">Dinner at Courtyard</span>
//                   <br />
//                   2200 Bass Pro Court, Grapevine, TX 76051
//                 </p>
//               </div>

//               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
//                 <a
//                   href="#live-stream"
//                   className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-all duration-300 text-lg font-semibold shadow-lg transform hover:scale-105"
//                 >
//                   Watch Live Stream
//                 </a>
//                 <a
//                   href="#program-guide"
//                   className="px-8 py-3 bg-transparent hover:bg-amber-800/50 border-2 border-amber-400 text-amber-100 rounded-md transition-all duration-300 text-lg font-semibold"
//                 >
//                   View Program Guide
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom decorative element */}
//       <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
//         <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


//------------- second update------

import React, { useEffect, useRef } from "react";
import Alekhya from "../Public/assets/images/Alekhya4.png";
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-24 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 mt-8"
    >
      {/* Decorative border pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-amber-400 opacity-60"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-amber-400 opacity-60"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-amber-400 opacity-60"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-amber-400 opacity-60"></div>

      {/* Ganesha symbol at top center */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 ">
        <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-amber-900 text-2xl font-bold shadow-lg mt-5">
          ॐ
        </div>
      </div>

      <div
        ref={heroRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-amber-50 z-10 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-6xl mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Dancer image */}
            <div className="order-2 lg:order-1 flex justify-center ">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg transform rotate-3"></div>
                <img
                  src={Alekhya}
                  alt="Alekhya Alapati in Kuchipudi costume"
                  className="
      relative rounded-lg shadow-2xl border-4 border-amber-400/30
      w-[278px] h-[290px]
      sm:w-[320px] sm:h-[450px]
      md:w-[360px] md:h-[500px]
      lg:w-[550px] lg:h-[600px]
    "
                />
                {/* Decorative elements around image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-amber-400 rounded-full bg-amber-400/20"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-amber-400 rounded-full bg-amber-400/20"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-amber-400 rounded-full bg-amber-400/20"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-amber-400 rounded-full bg-amber-400/20"></div>
              </div>
            </div>

            {/* Right side - Event details */}
            <div className="order-1 lg:order-2 text-left lg:text-left ml-5 mt-7 p-7">
              <div className="mt-[50px]">
                <p className="text-amber-200 text-lg mb-2 font-light">
                  Manjula & Satish Alapati
                </p>
                <p className="text-amber-200 text-base mb-4">
                  Cordially invite you and your family to the
                </p>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight text-amber-100">
                Kuchipudi Rangapravesam
              </h1>

              <p className="text-amber-300 text-xl mb-2">
                (Indian Classical Solo Dance Debut)
              </p>
              <p className="text-amber-200 text-lg mb-6">of</p>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 text-amber-100">
                Alekhya Alapati
              </h2>

              <p className="text-amber-300 text-base sm:text-lg mb-8">
                Disciple of Guru Smt. Manju Hemamalini Chavali
              </p>

              <div className="bg-amber-700/50 backdrop-blur-sm rounded-lg p-6 mb-6 border border-amber-400/30">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-amber-200 mb-2">
                    June 28, 2025
                  </p>
                  <p className="text-amber-300 text-lg mb-4">at</p>
                  <p className="text-xl font-semibold text-amber-100 mb-1">
                    Coppell Arts Center
                  </p>
                  <p className="text-amber-300">
                    505 Travis St, Coppell, TX 75019
                  </p>
                </div>
              </div>

              {/* Detailed Dress code information */}
              <div className="bg-amber-700/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-amber-400/30">
                <div className="text-center space-y-2">
                  <p className="text-amber-100 font-semibold">
               Dress Code
                  </p>
                  <p className="text-amber-200">Indian traditional or business casual to the main splash screen </p>
                  {/* <p className="text-amber-200">
                    followed by Dinner at 7:00 PM
                  </p> */}
                </div>
              </div>
              {/* Detailed timing information */}
              <div className="bg-amber-700/50 backdrop-blur-sm rounded-lg p-4 mb-6 border border-amber-400/30">
                <div className="text-center space-y-2">
                  <p className="text-amber-100 font-semibold">
                    3:00 PM Seating Time
                  </p>
                  <p className="text-amber-200">3:30 PM Performance</p>
                  <p className="text-amber-200">
                    followed by Dinner at 7:00 PM
                  </p>
                </div>
              </div>

              <div className="bg-amber-700/50 backdrop-blur-sm rounded-lg p-4 mb-8 border border-amber-400/30">
                <p className="text-amber-200 text-center">
                  <span className="font-semibold">
                    Dinner at 07:00 PM <br />
                  </span>
                  <br />
                  Venue :<br />
                  Courtyard, 2200 Bass Pro Court, Grapevine, TX 76051
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#live-stream"
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-all duration-300 text-lg font-semibold shadow-lg transform hover:scale-105"
                >
                  Watch Live Stream
                </a>
                <a
                  href="#program-guide"
                  className="px-8 py-3 bg-transparent hover:bg-amber-800/50 border-2 border-amber-400 text-amber-100 rounded-md transition-all duration-300 text-lg font-semibold"
                >
                  View Program Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
