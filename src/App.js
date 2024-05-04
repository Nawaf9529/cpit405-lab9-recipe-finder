import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Recipe from './components/Recipe';

function App() {
  return (
    <BrowserRouter>
    <div className="Container">
      <Header/>
    <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/recipe/:id' element={<Recipe/>}/>
    </Routes>
    </main>
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
