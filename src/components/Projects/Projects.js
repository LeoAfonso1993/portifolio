import projectCSS from '../Projects/Projects.module.css'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'



function Projects() {

    function handleProv31(){ //Tried to use a callback but it's blocked as a pop-up
        window.open('https://stellar-valkyrie-43e030.netlify.app/', '_blank')
    }

    function handleProv31Git(){
        window.open('https://github.com/LeoAfonso1993/proverbsProject', '_blank')
    }

    function handleTechPrepGit() {
        window.open('https://github.com/LeoAfonso1993/react-flashcards-project')
    }

    function handleBGratefulGit() {
        window.open('https://github.com/LeoAfonso1993/phase-3-sinatra-react-project ')
    }

    function handleImproveGit(){
        window.open('https://github.com/LeoAfonso1993/project-template-react-rails-api-improvE')
    }

    function notDeployed(){
        window.alert("Project will be deployed soon! 😊")
    }
    
    

    return (
        <div className={projectCSS.body} id='projects'>
            <h2 style={{color: 'rgb(0, 193, 217)'}}>Projects</h2>
            <br/>
            <br/>
            <div className={projectCSS.projContainer}>
                <Grid stackable columns={2}>
                    <Grid.Column>
                    <Card className={projectCSS.projCard} style={{ background:'rgb(33, 37, 41)', width:'100%'}}>
                    <div className={projectCSS.video}>
                        {/* <iframe width="100%" height="360" src="https://www.youtube.com/embed/mhBB_LN-tdE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        <div style={{position: "relative", paddingBottom: "51.5625%", height: "0"}}><iframe title="Prov31" src="https://www.loom.com/embed/eac0d9a9f0094afd970121621ff23254" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe></div>
                        
                    </div>
                        <Card.Content>
                            <Card.Header style={{ color: 'white'}}>Prov31</Card.Header>
                            <Card.Meta style={{ color: 'white'}}>HTML, CSS, JavaScript</Card.Meta>
                            <Card.Description style={{ color: 'white'}}>
                                Reading application that sorts one chapter of Proverbs according to the actual date<br/><br/>
                                ● Created a single-page web application frame utilizing HTML<br/>
                                ● Utilized CSS to style the application<br/>
                                ● Utilized JavaScript to interact with DOM and fetch a public API<br/>
                                ● Deployed with Netlify
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button style={{backgroundColor: 'rgb(255, 151, 215)'}} onClick={handleProv31}>Link</Button>
                            <Button style={{backgroundColor: 'rgb(0, 193, 217)'}} onClick={handleProv31Git}><Icon name='github'/>GitHub</Button>
                        </Card.Content>
                    </Card>
                    </Grid.Column>

                    <Grid.Column>
                    <Card className={projectCSS.projCard} style={{ background:'rgb(33, 37, 41)', width:'100%' }}>
                    <div className={projectCSS.video}>
                        {/* <iframe width="100%" height="360" src="https://www.youtube.com/embed/9g5E654fXz4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                        <div style={{position: "relative", paddingBottom: "51.5625%", height: "0"}}><iframe title="TechPrep" src="https://www.loom.com/embed/56e005a2cb094fdc8d505641f1d95fb2" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe></div>
                    </div>    
                        <Card.Content>
                            <Card.Header style={{ color: 'white'}}>TechPrep</Card.Header>
                            <Card.Meta style={{ color: 'white'}}>React JS, Bootstrap, JSON database</Card.Meta>
                            <Card.Description style={{ color: 'white'}}>
                                Technical interview flashcards app that allows you to create, show/hide answers and delete flashcards<br/><br/>
                                ● Created a responsive single page web application utilizing React JS<br/>
                                ● Upgraded the style utilizing Bootstrap<br/>
                                ● Created a JSON database to store the flashcards and interact with CRUD actions
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button style={{backgroundColor: 'rgb(255, 151, 215)'}} onClick={notDeployed}>Link</Button>
                            <Button style={{backgroundColor: 'rgb(0, 193, 217)'}} onClick={handleTechPrepGit}><Icon name='github'/>GitHub</Button>
                        </Card.Content>
                    </Card>
                    </Grid.Column>

                    <Grid.Column>
                    <Card className={projectCSS.projCard} style={{ background:'rgb(33, 37, 41)', width:'100%'}}>
                    <div className={projectCSS.video}>
                        {/* <iframe width="100%" height="360" src="https://www.youtube.com/embed/ZybpPey2g2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        <div style={{position: "relative", paddingBottom: "51.5625%", height: "0"}}><iframe title="TechPrep" src="https://www.loom.com/embed/be52367cf837454e80c27e00bc4c8ab7" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe></div>
                    </div>    
                        <Card.Content>
                            <Card.Header style={{ color: 'white'}}>BGrateful</Card.Header>
                            <Card.Meta style={{ color: 'white'}}>React JS, Semantic UI, Ruby</Card.Meta>
                            <Card.Description style={{ color: 'white'}}>
                                Gratitude Journal API<br/><br/>
                                ● Created a Ruby-based API<br/>
                                ● Utilized Active Record + Sinatra to perform CRUD actions<br/>
                                ● Created a frontend React JS<br/>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button style={{backgroundColor: 'rgb(255, 151, 215)'}} onClick={notDeployed}>Link</Button>
                            <Button style={{backgroundColor: 'rgb(0, 193, 217)'}} onClick={handleBGratefulGit}><Icon name='github'/>GitHub</Button>
                            {/* https://github.com/LeoAfonso1993/phase-3-sinatra-react-project */}
                        </Card.Content>
                    </Card>
                    </Grid.Column>

                    <Grid.Column>
                    <Card className={projectCSS.projCard} style={{ background:'rgb(33, 37, 41)', width:'100%'}}>
                    <div className={projectCSS.video}>
                        {/* <iframe width="100%" height="360" src="https://www.youtube.com/embed/LWusZ8n1nNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        <div style={{position: "relative", paddingBottom: "51.5625%", height: "0"}}><iframe title="TechPrep" src="https://www.loom.com/embed/8ffe7c75e5bc44ec9f8b993eeeb91233" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: "0", left: "0", width: "100%", height: "100%"}}></iframe></div>
                    </div>    
                        <Card.Content>
                            <Card.Header style={{ color: 'white'}}>improvE</Card.Header>
                            <Card.Meta style={{ color: 'white'}}>React JS, Ruby on Rails, AWS S3, Heroku</Card.Meta>
                            <Card.Description style={{ color: 'white'}}>
                                Monorepo Training Platform<br/><br/>
                                ● User and Admin login implemented on backend<br/>
                                ● Upload files to Amazon AWS S3 bucket<br/>
                                ● Heroku deployment<br/>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button style={{backgroundColor: 'rgb(255, 151, 215)'}} onClick={notDeployed}>Link</Button>
                            <Button style={{backgroundColor: 'rgb(0, 193, 217)'}} onClick={handleImproveGit}><Icon name='github'/>GitHub</Button>
                        </Card.Content>
                    </Card>
                    </Grid.Column>
                </Grid>

            </div>
        </div>
    )
}

export default Projects;