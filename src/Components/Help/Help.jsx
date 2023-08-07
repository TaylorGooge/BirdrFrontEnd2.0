import React from 'react';
import HelpCard from './HelpCard';
const Help = () => {
  return (
    <main className="main-content" id="main-content">
      <section className="position-relative bg-gradient-tint">
        <div className="container position-relative pt-14 pb-9">
          <div className="row pt-lg-9 pb-lg-4">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-3 mb-2">Faqs</h1>
              <p className="lead mb-0">Frequently asked questions</p>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative">
        <div className="container py-9 py-lg-11">
          <div className="row mb-9 mb-lg-11">
            <HelpCard/>
          </div>
          <div className="row">
            <div className="col-lg-8 col-xl-7 mx-auto">
              <div className="border-top pt-9" data-aos="fade-up">
                <h5>Still no Luck? </h5>
                <p className="mb-0">We’re here to help! Please email <a href="mailto:supportBirdApp@proton.me" className="text-dark link-underline">supportBirdApp@proton.me</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Help;