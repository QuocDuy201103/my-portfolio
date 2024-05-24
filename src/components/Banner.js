import React from 'react'
import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from "../assets/img/header-img.svg"

const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Desginer", "UI/UX Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length
        let fulltext = toRotate[i]
        let updateText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1)

        setText(updateText)

        if (isDeleting) {
            setDelta(prev => prev /2)
        }

        if (!isDeleting && updateText === fulltext) {
            setIsDeleting(true)
            setDelta(period)

        }else if(isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className='banner' id='home' >
            <Container >
                <Row className='align-item-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline' Welcome to my Portfolio></span>
                        <h1>{`Hi I'm Duy `}<span className='wrap'>{text}</span></h1>
                        <p>This is my profile</p>
                        <button onCanPlay={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={24} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt='Header Img'></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
