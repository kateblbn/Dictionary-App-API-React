import ApiContext from "./api/ApiContext";
import Home from "./pages/Home";
import TemplateGeneral, { GetData, TemplateGenWord, TemplateSource } from "./template/TemplateGeneral";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <ApiContext>
          <Home />
          <GetData />
          <TemplateGenWord/>

          {/* <TemplateGeneral/> */}
          <TemplateSource/>
        </ApiContext>
      </div>

    </div>
  );
}

export default App;
