import SkillCard from '../components/SkillCard'

function Skills() {
  const skills = ["Programming (C++ , Python)","HTML", "CSS", "JavaScript", "React(Learning)","Data analytics(Learning)","Canva Designing"]

  return (
    <div>
      <h1>My Skills</h1>
    <div className="skills">

      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
    </div>
  )
}

export default Skills