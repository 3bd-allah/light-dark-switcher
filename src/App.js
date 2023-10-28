import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Switcher from "./components/Switcher";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div >

      <ThemeProvider>
        <Switcher />
      </ThemeProvider>
    </div>
  );
}

export default App;
