import contactCSS from '../ContactMe/ContactMe.module.css'
import { Grid, Icon } from 'semantic-ui-react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              if (result.text === "OK") {
                document.querySelector("#contact_form").reset()
                window.alert("Your message was sent successfully!")
              }
          }, (error) => {
              console.log(error.text);
          });
      };

      

    return(
        <div className={contactCSS.body} id='contact'>
            <h2 className={contactCSS.title}>Contact me</h2><br/>
            <Grid stackable columns={1}>
            <Grid.Row style={{justifyContent: 'center', margin: '0' }}>
                <div className={contactCSS.formContainer} style={{width: '80%'}}>
                    <form ref={form} id="contact_form" onSubmit={sendEmail}>
                        <label className={contactCSS.labels}>Name</label><br/>
                        <input style={{width: '90%', height: '35px', borderRadius: '10px'}} type="text" name="user_name" /><br/><br/>
                        <label className={contactCSS.labels}>Email</label><br/>
                        <input style={{width: '90%', height: '35px', borderRadius: '10px'}} type="email" name="user_email" /><br/><br/>
                        <label className={contactCSS.labels}>Message</label><br/>
                        <textarea style={{width: '90%', height: '100px', borderRadius: '10px'}} name="message" /><br/><br/>
                        <input style={{width: '90%', height: '35px', fontSize: 'large', borderRadius: '10px', backgroundColor: 'rgb(0, 193, 217)'}} type="submit" value="Send" />
                    </form>
                </div>
            </Grid.Row>
            <Grid.Row style={{width: '80%', textAlign: 'center', margin: '0', display: 'inline-block'}}>
                <Icon name='linkedin'></Icon><a style={{color: 'rgb(0, 193, 217)'}} href='https://www.linkedin.com/in/devleandro-afonso/' target="_blank" rel="noreferrer">LinkeIn</a>
                <Icon name='github'></Icon><a style={{color: 'rgb(0, 193, 217)'}} href='https://github.com/LeoAfonso1993' target='_blank' rel="noreferrer">GitHub</a>
            </Grid.Row>
            </Grid>
        </div>
    )
}

export default ContactMe;