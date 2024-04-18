import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowUsers from './users/ShowUsers';
import CompCreateUsers from './users/CreateUsers';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowUsers />} />
            <Route path='/create' element={ <CompCreateUsers />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;