import "./global.css"
import Experience from "./experience";
import Project from "./project";

const getExperiences = () => {
  return [
    {
      title: "Software Engineer Intern",
      company: "Amplified Industries",
      location: "Boston, USA",
      start: "Jul 2023",
      end: "Jan 2024",
      techstack: ["Python", "PostgreSQL", "SQL", "AWS S3", "AWS Lambda"]
    },
    {
      title: "Product Manager Intern",
      company: "Circular",
      location: "Singapore",
      start: "May 2023",
      end: "Jul 2023",
      techstack: ["Javascript", "Retool", "Airtable", "Figma", "Python", "Dashboarding"]
    },
    {
      title: "Business Analytics Intern",
      company: "Baxter International Inc",
      location: "Singapore",
      start: "May 2021",
      end: "Jul 2021",
      techstack: ["Python", "Excel", "Excel VBA", "Tableau"]
    },
    {
      title: "Data Analyst Intern",
      company: "Wego.com",
      location: "Singapore",
      start: "Feb 2020",
      end: "May 2020",
      techstack: ["Python", "SQL", "ChartIO", "Google BigQuery"]
    },
  ]
}

const getProjects = () => {
  return [
    {
      title: "ParkWhere: a web app that finds you the best parking spot on-the-go",
      description: "Loren aoqidoq;dho qofhqw;od qwod;uhqwd ;ouqwhd;qouwd qwd",
      techstack: ["Vue.js", "HTML", "CSS", "Node", "MongoDB"]
    },
    {
      title: "ParkWhere: an app that finds you the best parking spot in Singapore",
      description: "Loren aoqidoq;dho qofhqw;od qwod;uhqwd ;ouqwhd;qouwd qwd",
      techstack: ["Vue.js", "HTML", "CSS", "Node", "MongoDB"]
    },
    {
      title: "ParkWhere: an app that finds you the best parking spot in Singapore",
      description: "Loren aoqidoq;dho qofhqw;od qwod;uhqwd ;ouqwhd;qouwd qwd",
      techstack: ["Vue.js", "HTML", "CSS", "Node", "MongoDB"]
    },
    {
      title: "ParkWhere: an app that finds you the best parking spot in Singapore",
      description: "Loren aoqidoq;dho qofhqw;od qwod;uhqwd ;ouqwhd;qouwd qwd",
      techstack: ["Vue.js", "HTML", "CSS", "Node", "MongoDB"]
    },
  ]
}

export default function Content() {
  return (
    <div>
      <div id="about">
        <div className="mb-3 text-xl font-bold">About</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dapibus purus nec arcu venenatis, et tincidunt ipsum suscipit. Morbi cursus hendrerit metus, id varius ex ultricies ut. Proin semper metus non diam dictum rhoncus. Praesent luctus nunc vel velit porttitor, sed sagittis nisl porttitor. Phasellus ante velit, egestas quis feugiat feugiat, facilisis et eros. Nunc tempus sodales nulla viverra porta. Duis porta diam et dui posuere laoreet.</div>
      </div >
      <div id="experience" className="mt-7">
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
      <div id="projects" className="mt-7">
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
