import contactCSS from '../ContactMe/ContactMe.module.css'
import { Grid } from 'semantic-ui-react'

function ContactMe() {
    return(
        <div className={contactCSS.body}>
            <h1 className={contactCSS.title}>Contact me</h1>
            <Grid stackable columns={2}>
            <Grid.Column>
                <h4>LinkeIn</h4>
                <h4>Website</h4>
                <h4>GitHub</h4>
            </Grid.Column>
            </Grid>
        </div>
    )
}

export default ContactMe;