import About from "../about/about";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import ReasarchInterests from "../interests/Interests";
import Projects from "../Projects/projects";
import Education from "../Education/Education";
import Acheievements from "../Acheivements/Acheivements";
export default function Detail(){
    return(
        <div className="flex flex-col gap-5">
            <About />
            <Experience />
            <Skills />
            <ReasarchInterests />
            <Projects />
            <Education />
            <Acheievements />
        </div>
    )
}