import "../styles/Partners.css";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
];

export default function Partners(){

  return(

    <section className="partners">

      <div className="partners-overlay"></div>

      <h2>
        Our Trusted Partners
      </h2>

      <div className="logo-track">

        <div className="logo-slide">

          {[...logos,...logos,...logos].map(
            (logo,index)=>(
              <div
              className="logo-card"
              key={index}
              >
                <img
                src={logo}
                alt=""
                />
              </div>
            )
          )}

        </div>

      </div>

    </section>

  );

}