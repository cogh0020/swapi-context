import logo from './logo.svg';
import './App.css';
import {APIContextProvider}  from './Context/apiContext';
import FilmList from './Components/FilmList'
import FilmDetails from './Components/FilmDetails'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Context, Routing
          </p>
        </header>
        <FilmList/>
        <Routes>
          <Route path="/:id" element={<FilmDetails/>}></Route>

        </Routes>
      </div>
    </APIContextProvider>
  );
}

export default App;
