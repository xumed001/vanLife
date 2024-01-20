import Button from "../components/Button"
import aboutImg from "../assets/aboutImg.png"

function About() {
  return (
    <div>
        <img className="about--img" src={aboutImg} alt="Person camping on a van" />
        <div className="about--content">
            <h3 className="about--title">Don’t squeeze in a sedan when you could relax in a van.</h3>
            <p className="about--text">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
            <p className="about--text">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className="about--card">
              <h4 className="about--card-title">
              Your destination is waiting. 
              <br />
              Your van is ready.
              </h4>
              <Button className={'black button-sm'}>Explore our vans</Button>
            </div>
        </div>
    </div>
  )
}

export default About