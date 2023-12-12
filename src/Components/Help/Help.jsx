import React from 'react';
import HelpCard from './HelpCard';
import BaseSection from '../Reusable/Section/BaseSection';
import { Container, Row, Col } from 'react-bootstrap';

const Help = () => {
  return (
    <main className="main-content" id="main-content">

      <BaseSection
        sectionClassName="position-relative bg-gradient-tint"
      >
        <Container className="position-relative pt-14 pb-9">
          <Row className="pt-lg-9 pb-lg-4">
            <div className="col-lg-10 mx-auto text-center">
              <h1 className="display-3 mb-2">Faqs</h1>
              <p className="lead mb-0">Frequently asked questions</p>
            </div>
          </Row>
        </Container>
      </BaseSection>
      <BaseSection
        sectionClassName="position-relative"
      >
        <Container className="opy-9 py-lg-11">
          <Row className="mb-9 mb-lg-11">
            <HelpCard />
          </Row>
          <Row>
            <div className="col-lg-8 col-xl-7 mx-auto">
              <div className="border-top pt-9" data-aos="fade-up">
                <h5>Still no Luck? </h5>
                <p className="mb-0">We’re here to help! Please email <a href="mailto:supportBirdApp@proton.me" className="text-dark link-underline">supportBirdApp@proton.me</a></p>
              </div>
            </div>
          </Row>
        </Container>
      </BaseSection>





    </main>
  );
};
export default Help;