import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CardList from './components/cards/CardList';
import NavBar from './components/navbar/NavBar';
import CardsLvl from './components/cardsfilter/CardsLvl';
import CardsFilter from './components/cardsfilter/CardsFilter';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saints" element={<CardList />}/>
        <Route path="/rank" element={<CardsLvl />}/>
        <Route path="/rank/:level" element={<CardsFilter />}/>
      </Routes>
    </div>
  );
}

export default App;
