
import React, { useEffect } from 'react';
import { faq } from './faqs';
const HelpCard = ({ attributes }) => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div className="col-lg-8 col-xl-7 mx-auto">
      <h2 data-aos="fade-up">FAQ</h2>
      <div data-aos="fade-up" className="width-7x border-top border-2 border-primary mb-5"></div>
      {faq.map((item, index) => (
        <a href={`#${index} `} key={index} id={index} className="text-dark" >
          <div className="p-4 mb-3 border rounded-3 bg-white" data-aos="fade-up">
            <h5 className="mb-3" id={item.question}>{item.question}</h5>
            <p className="mb-0" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
          </div>
        </a>
      ))}

    </div>
  );
};
export default HelpCard;