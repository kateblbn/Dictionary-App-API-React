import { createContext, useState } from "react";
import ApiContext from "./api/ApiContext";
import Header from "./template/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./theme/theme";
 
export const DataContext = createContext()

function App() {
  const [btnVal, setBtnVal] = useState('welcome');

  // const [theme, setTheme] = useState('light');

  // const switchTheme = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }
  const value = { btnVal, setBtnVal }
  return (
    <DataContext.Provider value={value}>
          {/* <ThemeProvider theme={theme === 'light' ? lightTheme: darkTheme}> */}
{/* <GlobalStyles/> */}
      <div className="App">
        <div className='container'>
          {/* <button onClick={switchTheme}>theme</button> */}
          <Header />
          <ApiContext />
        </div>
      </div>
      {/* </ThemeProvider> */}

    </DataContext.Provider>
  );
}

export default App;
