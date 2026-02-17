function Skills() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Git"];

  return (
    <section className="page-section">
      <h1 className="section-title fade-in">Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card fade-in">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
