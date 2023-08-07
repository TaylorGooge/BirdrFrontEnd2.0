import React from 'react';
export default function Error() {
  return (
    <main className="main-content d-grid" id="main-content">
      <section className="position-relative overflow-hidden">
        <div className="container pt-14 pt-lg-15 pb-9">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center position-relative">
              <div className="position-relative z-index-1">
                <div className="text-danger mb-5">
                  <img src="img/404.svg" className="width-18x mx-auto" alt="" />
                </div>
                <h1 className="display-1 mb-2">404</h1>
                <h2 className="mb-4">Oops! This bird has flown off the grid</h2>
                <p className="w-lg-75 lead mx-auto mb-5">
                  The page you're looking for seems to have taken an unexpected migration route.
                </p>
                <a href="/" className="fw-semibold">
                  <i className="bx bx-left-arrow-alt lh-1 fw-normal me-2"></i>Back to Home</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}