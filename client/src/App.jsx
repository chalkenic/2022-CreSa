import "./App.css";
import AppRouter from "./pages/AppRouter";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <main>
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
