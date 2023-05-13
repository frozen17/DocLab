import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import Home from './pages/home/Home';
import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
