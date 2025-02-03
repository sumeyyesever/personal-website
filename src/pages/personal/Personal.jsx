import "./personal.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Personal() {
  return (
    <>
    <Header />
    <div className='personal-container'>
        <h1 className="personal-title">Personal</h1>
        <p>I 🩵 books, movies, music, cats, nice long breakfast, fruits, doodling, computers, coffee, black tea, blue, yellow irises, tiramisu, and sunset.</p><br />
        <h3>My 2024 Media Favorites</h3>
        <div className="media-container">
          <h5 className="media-title">Books</h5>
          <img src="2.png" className="personal-img" />
        </div>
        <div className="media-container">
          <h5 className="media-title">Movies</h5>
          <img src="3.png" className="personal-img" />
        </div>
        <div className="media-container">
          <h5 className="media-title">Songs</h5>
          <a className="link songs-link" href="https://music.youtube.com/playlist?list=PLMeWw29g0iRRNcwmgMCxUASfN6fC4Ruy7" target="_blank">📍Youtube Music Playlist</a>
          <img src="4.png" className="personal-img" />
        </div>
    </div>
    <Footer />
    </>

  )
}
