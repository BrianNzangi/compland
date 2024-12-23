import React from 'react';

// Import images directly if they are in the src folder
import row1 from '../assets/images/row1.jpg';
import row3 from '../assets/images/row3.jpg';
import banner1 from '../assets/images/banner1.webp';

function HeroSection() {
  return (
    <section className="max-w-screen-xl mx-auto pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Column 1 */}
        <div className="space-y-2">
          {/* Row 1 */}
          <div
            className="flex gap-4 w-[918px] h-[324px] bg-cover bg-center rounded-sm"
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>
          {/* Row 2 */}
          <div className="flex gap-2 w-[918px]"> {/* Ensured this width matches Row 1 */}
            {/* First Half of Row 2 */}
            <div
              className="flex-1 h-[155px] bg-cover bg-center rounded-sm"
              style={{ backgroundImage: `url(${row1})` }}
            ></div>
            {/* Second Half of Row 2 */}
            <div
              className="flex-1 h-[155px] bg-cover bg-center rounded-sm"
              style={{ backgroundImage: `url(${row1})` }}
            ></div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-2 ml-auto">
          {/* Row 1 */}
          <div
            className="w-[320px] h-[157px] bg-cover bg-center rounded-sm"
            style={{ backgroundImage: `url(${row3})` }}
          ></div>
          {/* Row 2 */}
          <div
            className="w-[320px] h-[157px] bg-cover bg-center rounded-sm"
            style={{ backgroundImage: `url(${row3})` }}
          ></div>
          {/* Row 3 */}
          <div
            className="w-[320px] h-[157px] bg-cover bg-center rounded-sm"
            style={{ backgroundImage: `url(${row3})` }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
