import ThemeProvider from "./components/ThemeProvider.jsx";
import Home from "./pages/Home.jsx";
import "./styles/theme.css";
import "./styles/global.css";

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
