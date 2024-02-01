import "./App.css";
import MainLayouts from "./components/layouts/MainLayouts";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <MainLayouts />
      </ThemeProvider>
    </>
  );
}

export default App;
