// import React from "react";
// import { MapPin, Calendar } from "lucide-react";
// import EventModal from "./EventModal";

// const EventBanner = () => {
//   return (
//     <div className="bg-amber-900 text-amber-50 py-3 sticky top-14 z-40 shadow-md ">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-sm">
//           <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
//             <div className="flex items-center gap-2">
//               <Calendar size={16} />
//               <span>28 June 2025 | 03:00 PM</span>
//             </div>
//             <div className="flex  justify-center items-center gap-2">
//               <MapPin size={16} />
//               {/* <span className="hidden md:inline">Coppell Arts Center, 505 Travis St</span> */}
//               <a
//                 href="https://www.google.com/maps/place/Coppell+Arts+Center,+505+Travis+St,+Coppell,+TX+75019/@32.9516143,-97.0097292,17z/data=!3m1!4b1!4m6!3m5!1s0x864c2b63fbcc0227:0x581a266e00accf1!8m2!3d32.9516143!4d-97.0071543!16s%2Fg%2F11ryq9_b_9?entry=ttu"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="address-link    hover:underline"
//               >
//                 <span className="hidden md:inline">
//                   Coppell Arts Center, 505 Travis St, Coppell, TX 75019
//                 </span>

//                 <span className="md:hidden">Coppell Arts Center</span>
//               </a>
//             </div>
//           </div>
//           <div className="flex flex-row justify-between gap-3">
//             <a
//               href="https://youtube.com/live/USUkf9jMwHk?feature=share"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-3 py-2 bg-amber-600 hover:bg-amber-700 rounded-md transition-colors duration-300 text-white inline-block"
//             >
//               WATCH LIVE
//             </a>

//             <EventModal>
//               <button className="px-3 py-2 bg-amber-600 hover:bg-amber-700 rounded-md transition-colors duration-300">
//                 CHECK EVENT
//               </button>
//             </EventModal>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventBanner;
import React from "react";
import { MapPin, Calendar } from "lucide-react";
import EventModal from "./EventModal";

const EventBanner = () => {
  return (
    <div className="bg-amber-900 text-amber-50 py-3 sticky top-14 z-40 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-3 md:gap-6 text-sm">
          {/* Date and Location Section */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 flex-wrap justify-center md:justify-start text-center md:text-left">
            {/* Date */}
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>28 June 2025 | 03:00 PM</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <a
                href="https://www.google.com/maps/place/Coppell+Arts+Center,+505+Travis+St,+Coppell,+TX+75019/@32.9516143,-97.0097292,17z/data=!3m1!4b1!4m6!3m5!1s0x864c2b63fbcc0227:0x581a266e00accf1!8m2!3d32.9516143!4d-97.0071543!16s%2Fg%2F11ryq9_b_9?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <span className="hidden md:inline">
                  Coppell Arts Center, 505 Travis St, Coppell, TX 75019
                </span>
                <span className="md:hidden">Coppell Arts Center</span>
              </a>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
            <a
              href="https://youtube.com/live/USUkf9jMwHk?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-amber-600 hover:bg-amber-700 rounded-md transition-colors duration-300 text-white"
            >
              WATCH LIVE
            </a>

            <EventModal>
              <button className="px-3 py-2 bg-amber-600 hover:bg-amber-700 rounded-md transition-colors duration-300">
                CHECK EVENT
              </button>
            </EventModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBanner;
