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
          <h4>Join us in the <a href="https://app.slack.com/client/E09V59WQY1E/C0AMB6NA7PX" target="_blank" rel="noopener noreferrer">#beacon</a> channel on Slack!</h4>
          
          <a 
            href="https://beacon.fillout.com/rsvp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-rsvp"
          >
            RSVP!
          </a>
        </div>
        
        <div className="hero-torn-edge"></div>
        <div className="hero-shadow"></div>
      </div>

      <div className="hero-next-bg"></div>
    </section>
  )
}

export default Hero
