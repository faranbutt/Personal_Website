import About from "../about/about";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
export default function Detail(){
    return(
        <div className="flex flex-col gap-5">
            <About />
            <Skills />
            <Experience />
        </div>
    )
}