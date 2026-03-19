import './styles/Hero.css'
import beaconLogo from '../images/beacon_logo.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-graph-paper">
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
