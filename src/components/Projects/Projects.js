import projectCSS from '../Projects/Projects.module.css'
import { Card, Grid, Button, Icon } from 'semantic-ui-react'



function Projects() {
    return (
        <div className={projectCSS.body} id='projects'>
            <h1 style={{color: 'rgb(0, 193, 217)'}}>Projects</h1>
            <br/>
            <br/>
            <div className={projectCSS.projContainer}>
                <Grid stackable columns={2}>
                    <Grid.Column>
                    <Card className={projectCSS.projCard} style={{ background:'rgb(33, 37, 41)', width:'100%'}}>
                    <div className={projectCSS.video}>
                        <iframe width="100%" height="360" src="https://www.youtube.com/embed/mhBB_LN-tdE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                        <Card.Content>
                            <Card.Header style={{ color: 'white'}}>Prov31</Card.Header>
                            <Card.Meta style={{ color: 'white'}}>HTML, CSS, JavaScript</Card.Meta>
                            <Card.Description style={{ color: 'white'}}>
                                Reading application that sorts one chapter of Proverbs according to the actual date<br/><br/>
                                ● Created a single-page web application frame utilizing HTML<br/>
                                ● Utilized CSS to style the application<br/>
                                ● Utilized JavaScript to interact with DOM and fetch a public API
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button style={{backgroundColor: 'rgb(255, 151, 215)'}}>Link</Button>
                            <Button style={{backgroundColor: 'rgb(246, 253, 183)'}}><Icon name='github'/>GitHub</Button>
                        </Card.Content>
                    </Card>
                    </Grid.Column>

                    <Grid.Column>
                    <Card className={projectCSS.projCard} style={{ background:'rgb(33, 37, 41)', width:'100%' }}>
                    <div className={projectCSS.video}>
                        <iframe width="100%" height="360" src="https://www.youtube.com/embed/9g5E654fXz4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
                            <Button style={{backgroundColor: 'rgb(255, 151, 215)'}}>Link</Button>
                            <Button style={{backgroundColor: 'rgb(246, 253, 183)'}}><Icon name='github'/>GitHub</Button>
                        </Card.Content>
                    </Card>
                    </Grid.Column>

                    <Grid.Column>
                    <Card className={projectCSS.projCard} style={{ background:'rgb(33, 37, 41)', width:'100%'}}>
                    <div className={projectCSS.video}>
                        <iframe width="100%" height="360" src="https://www.youtube.com/embed/ZybpPey2g2U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                            <Button style={{backgroundColor: 'rgb(255, 151, 215)'}}>Link</Button>
                            <Button style={{backgroundColor: 'rgb(246, 253, 183)'}}><Icon name='github'/>GitHub</Button>
                        </Card.Content>
                    </Card>
                    </Grid.Column>

                    <Grid.Column>
                    <Card className={projectCSS.projCard} style={{ background:'rgb(33, 37, 41)', width:'100%'}}>
                    <div className={projectCSS.video}>
                        <iframe width="100%" height="360" src="https://www.youtube.com/embed/LWusZ8n1nNE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                            <Button style={{backgroundColor: 'rgb(255, 151, 215)'}}>Link</Button>
                            <Button style={{backgroundColor: 'rgb(246, 253, 183)'}}><Icon name='github'/>GitHub</Button>
                        </Card.Content>
                    </Card>
                    </Grid.Column>
                </Grid>

            </div>
        </div>
    )
}

export default Projects;