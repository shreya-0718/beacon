import './styles/Hero.css'
import beaconLogo from '../images/beacon_logo.png'
import Flag from '../images/flag-orpheus-top.svg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-graph-paper">
        <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="flag-link">
            <img src={Flag} className="flag-svg" alt="Flag Orpheus" />
        </a>
        
        <div className="hero-content">
          
          <img src={beaconLogo} alt="Beacon Logo" className="beacon-logo" />

          <h3> Welcome to the coast! Build something, guide others. </h3> 

          <button className="btn btn-primary btn-rsvp">
            RSVP!
          </button>
        </div>
        
        <div className="hero-torn-edge"></div>
        <div className="hero-shadow"></div>
      </div>

      <div className="hero-next-bg"></div>
    </section>
  )
}

export default Hero
