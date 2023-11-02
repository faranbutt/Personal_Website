import About from "../about/about";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import ReasarchInterests from "../interests/Interests";
import Projects from "../Projects/projects";

export default function Detail(){
    return(
        <div className="flex flex-col gap-5">
            <About />
            <Experience />
            <Skills />
            <ReasarchInterests />
            <Projects />
        </div>
    )
}