import "./global.css"
import Experience from "./components/experience";
import Project from "./components/project";
import { getAbout, getExperiences, getProjects } from "./data";

export default function Content() {
  return (
    <div>
      <div id="about" className="scroll-mt-20">
        <div className="mb-3 text-xl font-bold">About</div>
        <div>
          {getAbout().map((line) => {
            return <>
              {line}
              <br /><br />
            </>
          })}
        </div>
      </div >

      <div id="experience" className="scroll-mt-20 mt-7">
        <div className="mb-7 text-xl font-bold">Experience</div>
        {getExperiences().map((experienceData) => {
          return (
            <div className="mb-7">
              <Experience
                data={experienceData}
              />
            </div>)
        })}
      </div>

      <div id="projects" className="scroll-mt-20 mt-7">
        <div className="mb-7 text-xl font-bold">Projects</div>
        {getProjects().map((projectData) => {
          return (
            <div className="mb-7">
              <Project
                data={projectData}
              />
            </div>)
        })}
      </div>
    </div >
  );
}
