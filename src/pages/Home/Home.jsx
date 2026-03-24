import About from "./sections/About";
import Blog from "./sections/Blog";
import Consultancy from "./sections/Consultancy";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";

export default function Home() {
    return (
        <>
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
        </>
    )
}       