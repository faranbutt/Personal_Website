import About from "../about/about";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import ReasarchInterests from '../interests/Interests.tsx';
import Projects from '../Projects/projects.tsx';

export default function Detail(){
    return(
        <div className="flex flex-col gap-5">
            <About />
            <Skills />
            <Experience />
            <ReasarchInterests />
            <Projects />
        </div>
    )
}