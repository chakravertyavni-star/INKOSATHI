import "../styles/KProducts.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function KProducts(){

return(

<div className="kproducts-page">

<Navbar/>

<section className="kproducts-hero">

<div className="k-soft1"></div>
<div className="k-soft2"></div>

<div className="k-center">

<span>
K-BEAUTY • K-LIFESTYLE • PREMIUM
</span>

<h1>
K-Products
</h1>

<p>
Discover premium Korean beauty,
lifestyle and cultural products —
carefully curated for India.
</p>

{/* ANIMATION */}

<div className="k-animation">

<motion.div
className="k-orb orb1"
animate={{
y:[0,-18,0]
}}
transition={{
duration:4,
repeat:Infinity
}}
/>

<motion.div
className="k-orb orb2"
animate={{
y:[0,18,0]
}}
transition={{
duration:5,
repeat:Infinity
}}
/>

<motion.div
className="k-card"

animate={{
y:[0,-10,0],
rotate:[0,2,0]
}}

transition={{
duration:5,
repeat:Infinity
}}
>

<div className="sparkle">✦</div>

<div className="k-icons">
💄 ✨ 🧴
</div>

<h3>
K-Beauty Experience
</h3>

<p>
Skincare • Cosmetics • Lifestyle
</p>

</motion.div>

</div>

<button className="k-btn">
Launching Soon ✦
</button>

</div>

</section>

<Footer/>

</div>

);
}