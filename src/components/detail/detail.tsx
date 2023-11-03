import About from "../about/about";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import ReasarchInterests from "../interests/Interests";
import Projects from "../Projects/projects";
import Education from "../Education/Education";
import Acheievements from "../Acheivements/Acheivements";
import Certifications from "../Certifications/Certifications";
import Contributions from "../Contribution/Contribution";
export default function Detail(){
    return(
        <div className="flex flex-col justify-center items-center gap-5">
            <About />
            <Experience />
            <Skills />
            <ReasarchInterests />
            <Projects />
            <Education />
            <Acheievements />
            <Certifications />
            <Contributions />
        </div>
    )
}