import { Col, Row } from "react-bootstrap";
import newSletterIcon from '../assets/img/header-img.svg'

const Newsletter = () => {
    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
                    </Col>
                    <Col md={6} xl={7} className="text-end">
                        <img src={newSletterIcon} alt="img" />
                    </Col>
                </Row>

            </div>
        </Col>
    )
}

export default Newsletter