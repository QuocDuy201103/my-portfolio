import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Projects = () => {
    const projects = [
        {
            title: "Bussiness Startup",
            description: "Desgin & Development",
            imgUrl: projImg1,
        },
        {
            title: "Bussiness Startup",
            description: "Desgin & Development",
            imgUrl: projImg2,
        },
        {
            title: "Bussiness Startup",
            description: "Desgin & Development",
            imgUrl: projImg3,
        }
    ]
  return (
    <div>
      <section className='projects' id='projects'>
        <Container>
            <Row>
                <Col>
                
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Projects
