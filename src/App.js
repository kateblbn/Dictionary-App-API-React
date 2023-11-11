import { createContext, useState } from "react";
import ApiContext from "./api/ApiContext";
import Header from "./template/Header";
import Footer from "./template/Footer";

export const DataContext = createContext()

function App() {
  const [btnVal, setBtnVal] = useState('');
  const value = { btnVal, setBtnVal }
  return (
    <DataContext.Provider value={value}>
      <div className="App">
        <div className='container'>
          <Header />
          <ApiContext />
          <Footer/>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
