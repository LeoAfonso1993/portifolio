import contactCSS from '../ContactMe/ContactMe.module.css'
import { Grid } from 'semantic-ui-react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className={contactCSS.body}>
            <h1 className={contactCSS.title}>Contact me</h1>
            <Grid stackable columns={2}>
            <Grid.Column>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
                <h4>LinkeIn</h4>
                <h4>Website</h4>
                <h4>GitHub</h4>
            </Grid.Column>
            </Grid>
        </div>
    )
}

export default ContactMe;