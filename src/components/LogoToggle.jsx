import { useTheme } from "./ThemeProvider.jsx";

export default function LogoToggle({
  srcLight = "/assets/brand/logo-dark.svg",
  srcDark = "/assets/brand/logo-light.svg",
  alt = "Cambiar tema"
}) {
  const { theme, toggle } = useTheme();
  const logoSrc = theme === "light" ? srcLight : srcDark;

  return (
    <button className="logo-button" aria-label={alt} onClick={toggle}>
      <img className="logo-img" src={logoSrc} alt={alt} />
    </button>
  );
}
