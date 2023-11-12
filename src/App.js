import { createContext, useState } from "react";
import Template from "./template/Template";
import Header from "./template/Header";
import Footer from "./template/Footer";
import './css/popUp.css'

export const DataContext = createContext()

function App() {
  const [btnVal, setBtnVal] = useState('welcome');
  const [fonts, setFonts] = useState(false)

  const value = { btnVal, setBtnVal, fonts, setFonts }
  return (
    <DataContext.Provider value={value}>
      <div className={fonts}>
        <div className='container'>
          <Header />
          <Template />
          <Footer />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
