import './App.css';
import './Assets/Css/Style.css';
import { Header } from "./Components/Header";
import { Banner } from "./Components/Banner";
import { Twocolumntext } from "./Components/Twocolumn";
import { Learning } from "./Components/Learning";

function App() {
  return (
    <>
      <Header/>
      <Banner />
      <Twocolumntext />
      <Learning />
    </>
  );
}

export default App;
