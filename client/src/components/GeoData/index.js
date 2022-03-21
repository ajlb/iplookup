import React from "react";
import { Container, Row, Col } from "../Grid";


// GeoDataItem renders a bootstrap list item containing data from the recipe api call
export function GeoDataItem({
  latitude,
  longitude
}) {
  return (
      <Container>
        <Row>
          <Col size="xs-12">
            <h4>Latitude: {latitude}, Longitude: {longitude}</h4>
          </Col>
        </Row>
      </Container>
  );
}
