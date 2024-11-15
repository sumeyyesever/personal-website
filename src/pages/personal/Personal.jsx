import "./personal.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

export default function Personal() {
  return (
    <>
    <Header />
    <div className='personal-container'>
        <h1 className="personal-title">Personal</h1>
        <img className="personal-img" src="/personal-img.jpg" />
        <p>I'm not sure what to write here, but i want to create personal page so i am adding some things so it's not empty.</p><br />
        <h3>Current Obsessions:</h3>
        <ul>
          <li>Books: A Wizard of Earthsea by Ursula K. Le Guin</li>
          <li>Movies: The Wild Robot by Chris Sanders</li>
          <li>Songs: Disease - Lady Gaga, Let There Be Light - Woosung & Bol4, Rainbow - Vincent Blue</li>
          <li>Food: Pickels. I am a simple person.</li>
          <li>Animal: Cats. Always.</li>
        </ul>
    </div>
    <Footer />
    </>

  )
}
