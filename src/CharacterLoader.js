// src/CharacterLoader.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function CharacterLoader({characters, loading, fetchData}) {
  
  


  return (
    <Container className='text-align-center justify-content-center align-items-center h-screen containerbackground'>
      <h1 className='h1'>Personajes de Star Wars</h1>
      <button onClick={fetchData} disabled={loading} className='btn btn-dark'>
        {loading ? 'Cargando Personajes...' : 'Cargar Personajes'}
      </button>
      <Row>
        {characters.map((character, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className='my-3'>
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Text>
                  <strong>Género:</strong> {character.gender}<br />
                  <strong>Año de nacimiento:</strong> {character.birth_year}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CharacterLoader;
