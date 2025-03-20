import Navbar from "./components/Navbar.tsx";
import Mint from "./components/Mint.jsx";

import About from "./components/About.tsx";
import Roadmap from "./components/Roadmap.tsx";

import Mutation from "./components/Mutation.tsx";
import Team from "./components/Team.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="paddingcnt">
        <Mint />
        <About id="about" />
        <Roadmap id="roadmap" />
        <Mutation id="mutation" />
        <Team id="team" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
