import "./techStack.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function TechStack() {
  return (
    <>
    <Header />
 <div className='techstack-container'>
        <h1 className="techstack-title">Tech Stack</h1>
        <p className="techstack-par">▪️ Currently, I feel quite comfortable with <span className="tech-tools" style={{textDecorationColor: "#f0db4f"}}>JavaScript</span>, <span className="tech-tools" style={{textDecorationColor: "#61dbfb"}}>React</span> on the frontend, <span className="tech-tools" style={{textDecorationColor: "#3C873A"}}>Node</span> and <span className="tech-tools" style={{textDecorationColor: "#0064a5"}}>PostgreSQL</span> on the backend.</p>
        <p className="techstack-par">▪️ I've worked with <span className="tech-tools" style={{textDecorationColor: "#4db33d"}}>MongoDB</span> in the past.</p>
        <p className="techstack-par">▪️ <span className="tech-tools" style={{textDecorationColor: "#FFD43B"}}>Python</span> always going to be a part of my toolkit. 
        In 2024, I focused on learning it and completed many projects through <i>100 Days of Code: The Complete Python Pro Bootcamp</i> course on Udemy and 
        it has become my favorite programming language. I learned how to work with APIs, web scraping, creating simple bots, SQLAlchemy, Flask and 
        data analysis with pandas. I enjoy every bit of my python learning journey. </p>   
        <p className="techstack-par">▫️ In my learning list: Next.js, TypeScript, Tailwind CSS, Firebase.</p> 
    </div>
    <Footer />
    </>
   
  )
}
