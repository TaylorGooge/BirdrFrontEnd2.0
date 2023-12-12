import React from 'react';
import FeatureColumn1 from './FeatureColumn/FeatureColumn1';
import FeatureColumn2 from './FeatureColumn/FeatureColumn2';
import FeatureColumn3 from './FeatureColumn/FeatureColumn3';
import FeatureColumn4 from './FeatureColumn/FeatureColumn4';
import BaseSection from '../Reusable/Section/BaseSection';
import { Container, Row, Col } from 'react-bootstrap';
export default function Feature() {
  return (
    <BaseSection
      id="features"
      sectionClassName="overflow-hidden position-relative"
    >
      <Container className="py-9 py-lg-11">
        <Row className="mb-7 align-items-center">
          <div className="col-md-7 mb-5 mb-md-0">
            <div className="d-flex align-items-center mb-3 aos-init aos-animate" data-aos="fade-up">
              <div className="border-top border-warning width-3x border-2"></div>
              <h6 className="mb-0 ms-3 text-muted">Why choose us</h6>
            </div>
            <h2 className="display-5 mb-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Unlock the posibilities</h2>
          </div>
        </Row>
      </Container>
      <Row>
        <FeatureColumn1 />
        <FeatureColumn2 />
        <FeatureColumn3 />
        <FeatureColumn4 />
      </Row>
    </BaseSection>




  );
}