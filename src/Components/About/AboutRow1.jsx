import React from 'react';
import BaseSection from '../Reusable/Section/BaseSection'
import {Container, Row, Col} from 'react-bootstrap'
export default function AboutRow1() {
  return (
    <BaseSection
      sectionClassName='position-relative bg-primary bg-opacity-10'
      svgClassName='position-absolute start-0 bottom-0 text-white flip-y'
      svgPreserveAspectRatio='none'
      svgWidth='100%'
      svgHeight='288'
      svgViewBox='0 0 1200 288'
      svgFill='none'
      svgxlmns='http://www.w3.org/2000/svg'
      pathFillRule='evenodd'
      pathClipRule='evenodd'
      pathD='M0 144L100 150C200 156 400 168 600 144C800 120 1000 60 1100 30L1200 0V288H1100C1000 288 800 288 600 288C400 288 200 288 100 288H0V144Z'
      pathFill='currentColor'


    >
      <Container className="pt-14 pb-9 position-relative z-index-1">
        <Row className="pt-lg-5 pb-7 align-items-center">
          <Col className="col-lg-10 mx-auto text-center">
            <h1 className="display-2 mb-4">
              Birdr
            </h1>
            <p className="mb-11 mb-lg-14 lead w-lg-75 mx-auto">Your Instinct Is Calling</p>
            <a href="#next" className="text-muted width-8x height-8x shadow bg-white rounded-circle flex-center d-flex text-center mx-auto">
              <div className="link-arrow-bounce">
                <i className="bx bx-down-arrow-alt fs-4"></i>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </BaseSection>
    
  )
}