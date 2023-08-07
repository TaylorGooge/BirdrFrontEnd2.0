import React from 'react';

const Gallery = (props) => {


  return (
    <section className="position-relative bg-white border-bottom">
      <div className="container pb-9 pb-lg-11">
        <div className="row">
          <div className="col-md">
            <div className="row no-gutters">
              {props.images.map((image, index) => {
                return (
                  <div className="col-sm-4" key={index}>
                    <img src={image} className='img-fluid ' />
                  </div>)
              })
              }
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};
export default Gallery;