import aboutCSS from '../AboutMe/AboutMe.module.css'

function AboutMe() {
    return(
        <div className={aboutCSS.container}>
            <h1>About Me</h1>
            <br/>
            <p className={aboutCSS.text}> A Multipotentialite who got into Software Development, and recently graduated from Flatiron's Software Engineering Bootcamp.</p>
            <p className={aboutCSS.text}>Passionate for daily improving skills related to Logic Programming, HTML, CSS, JavaScript, Node.js, React.js, Ruby on Rails, and more.</p>
            <p className={aboutCSS.text}>My background includes over three years of experience in administration (one of them as a General Manager following Agile methodology),</p>
            <p className={aboutCSS.text}>over ten years of experience with customer service, technology, marketing, and education in three continents.</p>
            <p className={aboutCSS.text}>I'm excited to be able to join the workforce asap and help create solutions to people's problems.</p>
        </div>
    )
}

export default AboutMe;