import Container from 'react-bootstrap/Container';
import pic from '../../images/no back web photo.png'
import homeCSS from '../Home/Home.module.css'
import {Grid} from 'semantic-ui-react'


function Home() {
    return(
        <>
            <Container className={homeCSS.homeContainer}>
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <div className={homeCSS.txtContainer}>
                            <h1 className={homeCSS.title}><strong>Hi, I'm <span style={{color: 'rgb(0, 193, 217)'}}>Leo Afonso</span></strong></h1>
                            <p style={{fontSize: 'large'}}>Software Developer | Multicultural | Constant Learner</p>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className={homeCSS.imgContainer}>
                            <img src={pic} alt='pic' className={homeCSS.image}></img>
                        </div>
                    </Grid.Column>

                </Grid>
            </Container>
            

        </>
    )
}

export default Home;