import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowBlogs from './users/ShowUsers';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompShowUsers from './users/ShowUsers';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowUsers />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;