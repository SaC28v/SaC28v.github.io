import { useTheme } from "../components/ThemeProvider.jsx";
import LogoToggle from "../components/LogoToggle.jsx";
import "../styles/Home.css";

export default function Home() {
  const { theme } = useTheme();

  return (
    <section className="hero">
      {/* Encabezado */}
      <header className="hero-header">
        <div className="brand">
          <strong>Software & Creativity</strong>
          <span>Sebastian Carrasco</span>
        </div>
        <LogoToggle />
        <a href="#contact" className="btn-contact">Contact</a>
      </header>

      {/* Fondo dinámico */}
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            theme === "light"
              ? "url('/assets/bg-light.jpg')"
              : "url('/assets/bg-dark.jpg')",
        }}
      />

      {/* Contenido central */}
      <div className="hero-content">
        <h1 className="hero-title">SOFTWARE & CREATIVITY</h1>
        <div className="hero-photo">
          <img src="/assets/me.png" alt="Sebastian Carrasco" />
        </div>
      </div>

      {/* Gradiente inferior */}
      <div className="hero-fade"></div>
    </section>
  );
}
