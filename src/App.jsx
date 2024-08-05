import React, { useState } from 'react';
import Master from './Master';
import Detail from './Detail';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { name: 'Element 1', description: 'Description of element 1' },
    { name: 'Element 2', description: 'Description of element 2' },
    { name: 'Element 3', description: 'Description of element 3' },
  ];

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Master items={items} onSelect={setSelectedItem} />
        </Col>
        <Col md={9}>
          <Detail selectedItem={selectedItem} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
