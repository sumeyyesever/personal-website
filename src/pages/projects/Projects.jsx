import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import ProjectList from "../../components/project-list/ProjectList"
import "./projects.css"

export default function Projects() {
  return (
    <div>
    <Header />
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
        <ProjectList />

        </div>
      <Footer />
    </div>
  )
}
