function ProjectCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.tech}</p>
      <a href={props.github}>GitHub</a>
    </div>
  )
}

export default ProjectCard