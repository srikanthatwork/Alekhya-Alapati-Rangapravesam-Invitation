import React, { useEffect, useRef } from 'react';
import AlekhyaGuru from "../../Public/assets/images/AlekhyaGuru.png"
const ExpertGuidance = () => {
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

  return (
    <section id="expert-guidance" className="py-20 bg-amber-50">
      <div
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform opacity-0 translate-y-10"
      >
        <div className="max-w-6xl mx-auto mt-24">
          <h2 className="text-3xl md:text-4xl text-amber-800 font-bold text-center mb-12">
            Expert Guidance
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={AlekhyaGuru}
                alt="Guru Smt. Manju Hema Malini Chavali"
                className="rounded-lg shadow-lg w-full h-[450px]"
              />
            </div>
            <div className="prose prose-lg max-w-none text-stone-700">
              <h3 className="text-2xl text-amber-800 font-semibold mb-6">
                Guru Smt. Manju Hemamalini Chavali
              </h3>
              <p>
                Guru Smt Manju Hemamalini Chavali is a highly accomplished
                Kuchipudi dancer, instructor and choreographer with many notable
                performances and choreography to her credit. She is a senior
                disciple of Guru Padmabhushan Vempati Chinna Satyam and was
                under his tutelage for 12 years. While at her Guru’s Kuchipudi
                Art Academy she had a noteworthy achievement of starting a
                career in teaching at the age of 18. A proud recipient of
                numerous awards including Natya Visharada and the recent Sang
                Ratu Ugrasena from Indonesia, she holds a Master’s degree in
                Performing Arts from the Central University of Hyderabad and is
                recognized as a Grade A Doordarshan artist.
              </p>
              <p className='mt-2'>
                She established the Guru Parampara School of Arts in the
                Dallas Fort Worth area in 2011 with a commitment to share the
                authentic spirit of Kuchipudi and has trained many students ever
                since. She frequently collaborates with masters of other Indian
                dance forms, fostering innovation and promoting kindness through
                art.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertGuidance;