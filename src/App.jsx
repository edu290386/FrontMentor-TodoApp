import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="font-josefin-sans min-h-screen dark:bg-[#181823]">
      <Header />
      <Home />
    </div>
  );
}

export default App;
