import imageSildLeft from '../assets/Images/imageSlidLeft.png'
import imageSildMid from '../assets/Images/imageSlidMid.png'
import imageSildRight from '../assets/Images/imageSlidRight.png'
import backgr from '../assets/Images/bckgr1.jpeg'
function ImageSlider() {
  return (
    <section className="slider" style={{
      backgroundImage: `url(${backgr})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="container slider-inner">

        <div className="slider-images">
          <img src={imageSildLeft} alt="left-img" />
          <img src={imageSildMid} alt="center-img" />
          <img src={imageSildRight} alt="right-img" />
        </div>

        <div className="slider-content">
          {/* Dots ko ek alag div mein daala hai proper flex alignment ke liye */}
          <div className="dots-container">
            <span className="dot"></span>
            <span className="dot active"></span>
            <span className="dot"></span>
          </div>

          <h2>MYGALLERY</h2>
        </div>

      </div>
    </section>
  )
}

export default ImageSlider