import React from 'react';
import FeatureImageColumn from './FeatureImage/FeatureImageColumn';
import FeatureImageColumn3 from './FeatureImage/FeatureImageColumn3';
import BaseSection from '../Reusable/Section/BaseSection';
import { Container, Row, Col } from 'react-bootstrap';
export default function FeatureImage() {
  return (
    <BaseSection
      sectionClassName="position-relative overflow-hidden"
    >
      <Container className="py-9 py-lg-11 position-relative">
        <Row className="row align-items-center">
          <FeatureImageColumn />
          <FeatureImageColumn3 />
        </Row>
      </Container >
    </BaseSection>



  );
}