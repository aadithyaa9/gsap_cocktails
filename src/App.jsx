import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Cocktails from "./components/Cocktails.jsx";
gsap.registerPlugin(ScrollTrigger , SplitText);
const app = () =>{

    return (
        <main>
            <Navbar/>
            <Hero />
            <Cocktails />
        </main>
    )
}
export default app