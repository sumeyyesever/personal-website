import "./footer.css"

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='footer-container'>

    <span>© {year} Sümeyye Sever</span>
         
    </div>
  )
}
