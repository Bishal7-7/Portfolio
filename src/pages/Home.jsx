import { Link } from "react-router-dom";
import profile from "../assets/IMG-20241023-WA0002.jpg";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content fade-in">
        <img src={profile} alt="Bishal Regmi" className="profile-img" />
        <h1>Hi, I'm Bishal Regmi</h1>
        <p className="hero-subtitle">React Learner | University Student</p>
        <p className="hero-description">
          Building my first portfolio with React. Welcome to my site!
        </p>
        <Link to="/about" className="btn-primary">
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default Home;
