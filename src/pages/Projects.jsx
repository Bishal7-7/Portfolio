function Projects() {
  const projects = [
    {
      id: 1,
      title: "Todo List App",
      description: "A simple task manager built with React and localStorage.",
      technologies: "React, JavaScript, CSS",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Displays weather data using a public API.",
      technologies: "React, JavaScript, Fetch API",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "This portfolio built with React and React Router.",
      technologies: "React, React Router, CSS",
    },
  ];

  return (
    <section className="page-section">
      <h1 className="section-title fade-in">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card fade-in">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="project-tech">{project.technologies}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
