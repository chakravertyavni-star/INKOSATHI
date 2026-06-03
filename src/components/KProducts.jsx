import Navbar from "../components/Navbar";
import "../styles/KProducts.css";

export default function KProducts(){

  return(

    <>

      <Navbar />

      <section className="kproducts-page">

        <div className="kproducts-content">

           <div className="k-tagline">

            <span>K-BEAUTY</span>

            <div className="dot"></div>

            <span>K-LIFESTYLE</span>

            <div className="dot"></div>

            <span>PREMIUM</span>

            </div>

          <h1>
            K-Products
          </h1>

          <p>
             Our K-Products page is under development. Stay tuned for amazing updates!
          </p>

          {/* GIF ANIMATION */}

          <div className="k-animation">

            <img
              src="/shop.gif"
              alt="K Products"
            />

          </div>

          <button>
            Launching Soon ✨
          </button>

        </div>

      </section>

    </>

  );
}