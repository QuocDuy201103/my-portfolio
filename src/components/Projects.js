import React from 'react'
import { Container, Col, Row, Nav, Tab } from 'react-bootstrap'
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import ProjectCard from './ProjectCard'
import colorSharp2 from '../assets/img/color-sharp2.png'
import 'bootstrap/dist/css/bootstrap.min.css'


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
    },
    {
      title: "Bussiness Startup",
      description: "Desgin & Development",
      imgUrl: projImg3,
    },
    {
      title: "Bussiness Startup",
      description: "Desgin & Development",
      imgUrl: projImg3,
    },
    {
      title: "Bussiness Startup",
      description: "Desgin & Development",
      imgUrl: projImg3,
    }
  ]
  return (
    <div>
      <section className='project' id='project'>
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>This is my Projects</p>
              <Tab.Container id='projects-tabs' defaultActiveKey="first">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Project 2</Tab.Pane>
                  <Tab.Pane eventKey="third">Projet 3</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}></img>
      </section>
    </div>
  )
}

export default Projects
