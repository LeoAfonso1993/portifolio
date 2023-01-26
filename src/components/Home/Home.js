import Container from 'react-bootstrap/Container';
import pic from '../../images/no back web photo.png';
import homeCSS from '../Home/Home.module.css';
import {Grid} from 'semantic-ui-react';
import {motion} from 'framer-motion';


function Home() {
    return(
        <div className='home' id='home'>
            <Container className={homeCSS.homeContainer}>
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <div className={homeCSS.txtContainer}>
                            <h1 className={homeCSS.title}><strong>Hi, I'm <motion.span initial={{opacity: 0}} animate={{ opacity: 1}} transition={{duration: 3.0}} style={{color: 'rgb(0, 193, 217)'}}>Leo Afonso</motion.span></strong></h1>
                            <p style={{fontSize: 'large'}}>Software Developer | Multicultural | Constant Learner</p>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className={homeCSS.imgContainer}>
                            <motion.img initial={{scale:0.95}} animate={{scale:1}} transition={{duration:5.0}} src={pic} alt='pic' className={homeCSS.image}></motion.img>
                        </div>
                    </Grid.Column>

                </Grid>
            </Container>
            

        </div>
    )
}

export default Home;