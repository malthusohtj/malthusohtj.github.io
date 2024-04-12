import "./global.css"
import Experience from "./components/experience";
import Project from "./components/project";
import { getExperiences, getProjects } from "./data";

export default function Content() {
  return (
    <div>
      <div id="about" className="scroll-mt-20">
        <div className="mb-3 text-xl font-bold">About</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus purus nec arcu venenatis, et tincidunt ipsum suscipit. Morbi cursus hendrerit metus, id varius ex ultricies ut. Proin semper metus non diam dictum rhoncus. Praesent luctus nunc vel velit porttitor, sed sagittis nisl porttitor. Phasellus ante velit, egestas quis feugiat feugiat, facilisis et eros. Nunc tempus sodales nulla viverra porta. Duis porta diam et dui posuere laoreet.</div>
      </div >

      <div id="experience" className="scroll-mt-20 mt-7">
        <div className="mb-3 text-xl font-bold">Experience</div>
        {getExperiences().map((experienceData) => {
          return (
            <div className="mt-3">
              <Experience
                data={experienceData}
              />
            </div>)
        })}
      </div>

      <div id="projects" className="scroll-mt-20 mt-7">
        <div className="mb-3 text-xl font-bold">Projects</div>
        {getProjects().map((projectData) => {
          return (
            <div className="mt-3">
              <Project
                data={projectData}
              />
            </div>)
        })}
      </div>
    </div >
  );
}
