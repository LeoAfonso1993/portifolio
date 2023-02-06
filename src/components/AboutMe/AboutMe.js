import aboutCSS from '../AboutMe/AboutMe.module.css'

function AboutMe() {
    return(
        <div className={aboutCSS.container} id='about'>
            <h2>About Me</h2>
            <br/>
            <p className={aboutCSS.text}> A Multipotentialite who got into Software Development, and recently graduated from Flatiron's Software Engineering Program.</p>
            <p className={aboutCSS.text}>Passionate for daily improving skills related to Logic Programming, HTML, CSS, JavaScript, Node.js, React.js, Ruby on Rails, and more.</p>
            <p className={aboutCSS.text}>My background includes over three years of experience in administration (one of them as a General Manager following Agile methodology),</p>
            <p className={aboutCSS.text}>over ten years of experience with customer service, technology, marketing, and education in three continents.</p>
            <p className={aboutCSS.text}>I am excited to continue growing my skills, and to create new, innovative solutions to real-world problems.</p>
            <p className={aboutCSS.text}>I am confident that I can be a valuable asset to your software development team, and I am looking forward to the opportunity to grow</p>
            <p className={aboutCSS.text}>professionally, while making a meaningful impact.</p>
        </div>
    )
}

export default AboutMe;