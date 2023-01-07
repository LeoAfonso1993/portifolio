import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic from '../../images/no back web photo.png'
import homeCSS from '../Home/Home.module.css'


function Home() {
    return(
        <>
            <Container className={homeCSS.homeContainer}>
                <Row className={homeCSS.row}>
                    <Col lg={5}>
                        <div className={homeCSS.txtContainer}>
                            <h1><strong>Hi, I'm Leo Afonso</strong></h1>
                            <p>Software Developer | Multicultural | Constant Learner</p>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className={homeCSS.imgContainer}>
                            <img src={pic} alt='pic' className={homeCSS.image}></img>
                        </div>
                    </Col>
                </Row>
            </Container>
            

        </>
    )
}

export default Home;