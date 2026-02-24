import intro from '../assets/Images/intro.png'
import introBig from '../assets/Images/introBig.png'
import introS from '../assets/Images/introS.png'
import bck from '../assets/Images/bckgr2.jpeg'


function Intro({ introText }) {
  return (
    <section className="intro"
    style={{
      backgroundImage: `url(${bck})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"

    }}>
      <div className="container intro-wrapper">

        <div className="intro-images">
          <img
            className="img img1"
            src={introBig}
            alt="img"
          />
          <img
            className="img img2"
            src={intro}
            alt="img"
          />
          <img
            className="img img3"
            src={introS}
            alt="img"
          />
        </div>

      
        <div className="intro-content">
          <h2 className="intro-title">MY INTRO</h2>
          <p className="intro-text" style={{color:"white"}}>{introText}</p>

          <div className="intro-buttons">
            <button className="btn-outline">About Me</button>
            <button className="btn-fill">Hire Me</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Intro