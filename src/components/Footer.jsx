import "../styles/Footer.css";
import {
FiFacebook,
FiInstagram,
FiLinkedin,
FiYoutube
} from "react-icons/fi";

export default function Footer(){

return(

<footer className="footer">

<div className="footer-top">

<div className="footer-brand">

<img
src="/logo.png"
alt=""
/>

<h3>
Inkosathi Global Connect
Private Limited
</h3>

<p>
Connecting Korea, education,
culture, and international
opportunities with premium
guidance and trusted support.
</p>

<div className="socials">

<div><FiFacebook/></div>
<div><FiInstagram/></div>
<div><FiLinkedin/></div>
<div><FiYoutube/></div>

</div>

</div>

<div className="footer-column">

<h4>Explore</h4>

<a>About Us</a>
<a>Korean Language</a>
<a>Consultancy</a>
<a>Tour & Travel</a>
<a>Korean Products</a>

</div>

<div className="footer-column">

<h4>Contact</h4>

<a>+91 84093 71446</a>
<a>+91 70426 11845</a>
<a>connect@inkosathi.com</a>
<a>India • Korea</a>

</div>

<div className="footer-column">

<h4>Partners</h4>

<a>Sunchon University</a>
<a>Neev Foundation</a>
<a>Sri Vishnu Amogh</a>
<a>Global Programs</a>

</div>

</div>

<div className="footer-line"></div>

<div className="footer-bottom">

<p>
© 2026 Inkosathi Global Connect
Private Limited.
All Rights Reserved.
</p>

</div>

</footer>

);
}