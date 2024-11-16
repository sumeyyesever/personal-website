import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <div className="header-container">
            <ul className='nav-links'>
                <Link to={"/"} className="link"><li className="nav-link">🦉</li></Link>
                <div>·</div>
                <Link to={"/posts"} className="link"><li className="nav-link">Posts</li></Link>
                <div>·</div>
                <Link to={"/tech-stack"} className="link"><li className="nav-link">Tech Stack</li></Link>
                <div>·</div>
                <Link to={"/projects"} className="link"><li className="nav-link">Projects</li></Link>
                <div>·</div>
                <Link to={"/personal"} className="link"><li className="nav-link">Personal</li></Link>

            </ul>
        </div>
    )
}
