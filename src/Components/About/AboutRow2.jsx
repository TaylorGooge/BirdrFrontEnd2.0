import React from 'react';
export default function AboutRow2() {
  return (
    <section className="position-relative overflow-hidden" id="next">
      <div className="container pb-9 pb-lg-11">
        <div className="row justify-content-lg-around mb-7 mb-lg-9 align-items-center">
          <div className="col-lg-6 col-xl-5 mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <div className="bg-mask">
              <img src="img/instinct.jpeg" className="mask-blob mask-image" alt="" />
            </div>
          </div>
          <div className="col-lg-5 aos-init aos-animate" data-aos="fade-right">
            <div className="d-flex align-items-center mb-4">
              <h1 className="mb-0 display-6">
                Welcome to Birdr, where we turn your birdwatching instincts into a full-fledged adventure! 
              </h1>
            </div>
            <p className="mb-4 lead">
              Imagine yourself strolling through the magnificent forest, surrounded by nature's splendor. Suddenly, a curious chittering tickles your ears, and without a second thought, you whip around to catch a glimpse of a marvelous wren darting from its cozy haven. Ah, that exhilarating feeling of being in sync with nature—priceless, right?
            </p>
          </div>
        </div>
        <div className="row justify-content-lg-around mb-7 mb-lg-9 align-items-center">
          <div className="col-lg-6 col-xl-5 mb-5 mb-lg-0 order-lg-last aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <div className="bg-mask">
              <img src="img/birdApp.jpeg" className="mask-blob mask-image" alt="" />
            </div>
          </div>
          <div className="col-lg-5 order-md-1 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
            <div className="d-flex align-items-center mb-4">
              <h1 className="mb-0 display-6">
                Birdr
              </h1>
            </div>
            <p className="mb-4 lead">
              Now, let's talk about preserving those extraordinary moments. Birdr is here to be your ultimate wingman in the world of ornithology! Say goodbye to scribbled notes on crumpled paper—our app brings you the digital building blocks for your very own "life list" of feathered friends.

Tag your bird's location? Check! Add species codes? Check! Keep a record of your sightings? Check! And we're talking all of this with just a tap of a button. With Birdr, you can effortlessly transform your everyday trips into full-blown birding escapades.

            </p>
          </div>
          
        </div>
        <div className="row justify-content-lg-around mb-7 mb-lg-9 align-items-center">
          <div className="col-lg-6 col-xl-5 mb-5 mb-lg-0 order-lg-last aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
                <p className="mb-4 lead">
So, what are you waiting for? Download Birdr now and start embracing the joys of birdwatching in the digital age. Get ready to soar high with your newfound feathered friends and create memories that will make your inner ornithologist sing with delight!
            </p>
          </div>
          <div className="col-lg-5 order-md-1 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
            <div className="d-flex align-items-center mb-4">
              <h1 className="mb-0 display-6">
                Gone are the days of scattered notes and forgotten sightings. Embrace the satisfaction of compiling your most coveted avian encounters in one simple, easy-to-use interface. Your birdwatching journey is about to take flight like never before!
              </h1>
            </div>

          </div>
          
        </div>
        
        
      </div>
    </section>
  );
}