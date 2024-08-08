import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Dance from "./Components/Dance";
import Classlevel from "./Components/Classlevel";
import DanceForFun from "./Components/DanceForFun";
import Ourteam from "./Components/Ourteam";
import AidenRamsey from "./Components/AidenRamsey";
import Footer from "./Components/FooterDance";
import Trialclass from "./Components/Trialclass";
import Statistics from "./Components/Statistics";
import "./App.css";

function App() {
  return (
    <>
      <div className="root">
        <Navbar />
        <Header />
        <Ourteam />
        <Dance />
        <Trialclass />
        <Statistics />
        <Classlevel />
        <AidenRamsey />
        <DanceForFun />
        <Footer />
      </div>
    </>
  );
}

export default App;
