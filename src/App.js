import logo from './logo.svg';
import './App.css';
import ConA from './ConA';
import Effect from './Effect';
import { createContext } from 'react';
const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <>
      <FirstName.Provider value={"AHZAM"}>
        <LastName.Provider value={"Akhtar"}>
          <ConA />
        </LastName.Provider>
      </FirstName.Provider>
      <Effect/>
    </>
  );
}

export default App;
export { FirstName,LastName };