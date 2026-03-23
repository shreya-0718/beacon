import './styles/Footer.css'
import footerImg from '../images/footer.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-image-wrapper">
        <img src={footerImg} alt="Footer decoration" className="footer-image" />
      </div>
        <div className="footer-bottom">
          <p>Built with &lt;3 by @shreyaluu</p>
        </div>
    </footer>
  )
}

export default Footer
