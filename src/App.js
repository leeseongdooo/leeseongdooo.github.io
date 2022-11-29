import logo from "./logo.svg";
import MainPage from "./Component/MainPage";
import Information from "./Component/Information";
import Project from "./Component/Project";
import Bottom from "./Component/Bottom";
import InformationV2 from "./Component/InformationV2";

function App() {
  return (
    <>
      <div className="ParentBox">
        <MainPage />
        <InformationV2 />
        <Project />
        <Bottom />
      </div>
    </>
  );
}

export default App;
