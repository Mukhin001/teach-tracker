import Fields from "./components/fields";
import Header from "./components/header";
import Main from "./components/main";
import "./style.css";

function App() {
  return (
    <div className="max-w-[800px] mx-auto px-5">
      <Header></Header>
      <Main></Main>
      <Fields></Fields>
    </div>
  );
}

export default App;
