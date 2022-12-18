import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic from '../../images/no back web photo.png'

function Home() {
    return(
        <>
            <Container>
                <Row>
                    <Col lg={5}>
                        <h1><strong>Hi, I'm Leo Afonso</strong></h1>
                        <p>Software Developer | Multicultural | Constant Learner</p></Col>
                    <Col>
                        <img src={pic} alt='pic' style={{maxWidth: 700}}></img>
                    </Col>
                </Row>
            </Container>
            

        </>
    )
}

export default Home;