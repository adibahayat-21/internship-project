import hero from '../assets/Images/hero.png'
import bck from '../assets/Images/bckgr1.jpeg'
function Hero({ name }) {
  return (
    <section className="hero-premium" 
    style={{
      backgroundImage: `url(${bck})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"

    }}>
      <div className="container hero-premium-inner">

        {/* LEFT BIG TEXT */}
        <div className="hero-left">
          <h1 className="jenny-letters">
            J.E.N<br />N.Y
          </h1>

          <div className="followers-box">
            <span className="followers-count">15K</span>
            <span className="followers-text">Followers</span>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="hero-center">
          <img
            src={hero}
            alt="profile"
          />
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="hero-card">
          <h3>{name}</h3>
          <p>@username</p>

          <div className="card-actions">
            <span>Message</span>
            <span>Follow</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero