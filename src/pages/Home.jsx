import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import About from "../components/sections/About";
import Blog from "../components/sections/Blog";
import Consultancy from "../components/sections/Consultancy";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Team from "../components/sections/Team";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            <About />
            <Services />
            <Team />
            <Consultancy />
            <Projects />
            <Testimonials />
            <Blog />
            <Marquee />
            <Footer />
        </>
    )
}       