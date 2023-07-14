import heroMobile from "../assets/images/image-hero-mobile.png"
import heroDesk from "../assets/images/image-hero-desktop.png"
import audio from "../assets/images/client-audiophile.svg"
import databiz from "../assets/images/client-databiz.svg"
import marker from "../assets/images/client-maker.svg"
import meet from "../assets/images/client-meet.svg"

function Hero() {
    return(
        <section className="hero container-md">
            <div className="row flex-row-reverse justify-content-center align-items-center">
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
                    <h1 className="">
                        Make remote work 
                    </h1> 
                    <p className="lead">
                        Get your team in sync, no matter your location. 
                        Streamline processes, create team rituals, and 
                        watch productivity soar.
                    </p>
                    <button className="btn btn-dark btn-lg mb-5">
                        Learn more
                    </button>
                </div>
            <ul className="list-unstyled d-flex gap-3">
                <li><img className="img-fluid" src={audio} alt="nav" /></li>
                <li><img className="img-fluid" src={databiz} alt="nav" /></li>
                <li><img className="img-fluid" src={marker} alt="nav" /></li>
                <li><img className="img-fluid" src={meet} alt="nav" /></li>
            </ul>
            </div>
            </div>
        </section>
    )
}

export default Hero