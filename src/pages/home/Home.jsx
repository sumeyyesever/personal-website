import Header from "../../components/header/Header"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./home.css"
import PostList from "../../components/post-list/PostList";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div>
      <Header />
      <div className="home-container">
        <img className="home-img" src="/kitty-doodle.png" />
        <h1 className="home-title">Hi, I'm Sümeyye</h1>
        <p className="home-par">I'm spending my time improving myself in full stack development.</p> 
        <p className="home-par">And this is my digital notebook, blog and maybe portfolio.</p>    
        <div className="icons">
            <LinkedInIcon className="home-icon"/>
            <GitHubIcon className="home-icon" />
        </div>                 
      </div>
      <hr />
      <h3 className="post-list-title">Latest posts</h3>
      <PostList name="all" page="home" />
      <div className="see-all-posts-container">
        <Link to="/posts" className="see-all-posts-link">
          <span>See all posts</span>
        </Link>
      </div>
  
      <Footer />
    </div>
  )
}