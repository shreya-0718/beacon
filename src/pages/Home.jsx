import Hero from '../components/Hero'
import FeaturesCards from '../components/FeaturesCards'
import PrizeCarousel from '../components/PrizeCarousel'
import { TextSection } from '../components/TextSection'

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <TextSection>
        <h2>What is Beacon?</h2>
          <p>
            Beacon is a YSWS program from Hack Club, a community of 
            <b> over 105 thousand</b> teens around the world who love coding and making things!
            In Beacon, you can take one of two paths:
          </p>

          <h3>A Keeper</h3>
          <p>
            As a Keeper, you choose something you want to learn — React, Godot, a hardware topic,
            anything you're excited about. Once you ship your project (with at least 2 hours &nbsp;
            <a href="https://hackatime.hackclub.com/" target="_blank" rel="noopener noreferrer">Hackatime-d</a>, &nbsp;
            <a href="https://lapse.hackclub.com/" target="_blank" rel="noopener noreferrer">Lapse-d</a>, 
            or Journaled — we'll have a guide for that!), you'll earn <b>buoys</b>.
            They can be redeemed in the <b>Beacon Market</b> for super cool prizes!
          </p>
          <p>
            You can also write a tutorial about what you learned for Sailors to follow. 
            Tutorials are optional, but writing one unlocks extra rewards and places your 
            very own lighthouse on the coastline map.
          </p>

          <h3>- OR -</h3>
              <p></p>
          <h3>A Sailor</h3>
          <p>
            As a Sailor, you follow a Keeper's tutorial and build something of your own.
            Completing a tutorial earns you <b>buoys</b> too — plus you help that Keeper's 
            lighthouse. It's a great way to explore 
            new skills and maybe even become a Keeper yourself!
          </p>
      </TextSection>
    </div>
  )
}

export default Home
