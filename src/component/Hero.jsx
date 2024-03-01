import heroMobile from "../assets/images/image-hero-mobile.png";
import heroDesk from "../assets/images/image-hero-desktop.png";
import { images } from "../data/navigationLinks";

function Hero() {
  return (
    <section className="hero container-md">
      <div className="row flex-row-reverse justify-content-center align-items-center gap-5 gap-md-0">
        <div className="col-md-6">
          <img
            className="img-fluid d-md-none"
            src={heroMobile}
            alt="hero-mobile"
          />
          <img
            className="img-fluid d-none d-md-block"
            src={heroDesk}
            alt="hero-desk"
          />
        </div>
        <div className="col-md-6 text-center text-md-start">
          <div>
            <h1 className="heading">Make remote work</h1>
            <p className="lead">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className="btn btn-dark btn-lg mb-5">Learn more</button>
          </div>
          <ul className="list-unstyled d-flex gap-3">
            {images.map((img) => (
              <li key={img.id}>
                <img className="img-fluid" src={img.src} alt="nav" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
