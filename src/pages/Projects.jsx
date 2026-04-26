import ProjectCard from '../components/ProjectCard'

function Projects() {
  const projects = [
        {
      title: "Airport Management System ",
      description: "Simple console-based management system to digitalize the airport fights, passengers ,luggages, tickets .",
      tech: "C++",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio built using React.",
      tech: "React, CSS",
      github: "#"
    },

    {
      title: "TechMart management system",
      description: "Console based interactive system to efficiently manage the workload of Tech and IOT devices retailors",
      tech: "C++ [Data structures]",
      github: "#"
    },
        {
      title: "Swift-bite",
      description: "UI/UX design of a food delivery mobile app ",
      tech: "Figma",
      github: "#"
    }
  ]

  return (
    <div>
      <h1>My Projects</h1>
        <div className="projects">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tech={project.tech}
          github={project.github}
        />
      ))}
    </div>
  </div>
  )
}

export default Projects