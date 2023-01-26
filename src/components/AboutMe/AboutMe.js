import aboutCSS from '../AboutMe/AboutMe.module.css'

function AboutMe() {
    return(
        <div className={aboutCSS.container} id='about'>
            <h1>About Me</h1>
            <br/>
            <p className={aboutCSS.text}> A Multipotentialite who got into Software Development, and recently graduated from Flatiron's Software Engineering Bootcamp.</p>
            <p className={aboutCSS.text}>Passionate for daily improving skills related to Logic Programming, HTML, CSS, JavaScript, Node.js, React.js, Ruby on Rails, and more.</p>
            <p className={aboutCSS.text}>My background includes over three years of experience in administration (one of them as a General Manager following Agile methodology),</p>
            <p className={aboutCSS.text}>over ten years of experience with customer service, technology, marketing, and education in three continents.</p>
            <p className={aboutCSS.text}>I am excited to continue growing my skills and contributing to creating innovative solutions to real-world problems.</p>
            <p className={aboutCSS.text}>I am confident that I can be a valuable asset to any software development team and I am looking forward to the opportunity</p>
            <p className={aboutCSS.text}>to grow professionally and make a meaningful impact.</p>
        </div>
    )
}

export default AboutMe;