import React from 'react';
import BaseSection from '../Reusable/Section/BaseSection';
import {Container, Row, Col} from 'react-bootstrap';
export default function ContactSection1() {
  return (
    <BaseSection
      sectionClassName='position-relative bg-primary bg-opacity-10'
      svgClassName='position-absolute start-0 bottom-0 text-white flip-y'
      svgPreserveAspectRatio='none'
      svgWidth='100%'
      svgHeight='264'
      svgViewBox='0 0 1440 152'
      svgFill='none'
      svgxlmns='http://www.w3.org/2000/svg'
      pathFillRule='evenodd'
      pathClipRule='evenodd'
      pathD='M126.597 138.74C99.8867 127.36 76.6479 109.164 59.2161 85.9798L0 3.05176e-05L1440 0C1440 0 1419.98 25.8404 1380.15 32.9584L211.382 150.811C182.549 154.283 153.308 150.12 126.597 138.74Z'
      pathFill='currentColor'
    >
      <Container className="position-relative pt-12 pb-9">
        <Row className="row align-items-center pb-8 pt-lg-9">
          <Col className="col-md-10 col-lg-8">
            <h1 className="display-2 mb-3">
              Get in touch with us
            </h1>
            <p className="mb-0 lead pe-lg-8">Do you have questions about our Birdr? Use the contact form below and we will get back to you.</p>
          </Col>
        </Row>
      </Container>
    </BaseSection>
    
  );
}