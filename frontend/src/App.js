import './App.css';
import DivOverlay from './components/DivOverlay';
import Header from './components/Header';
import ImageOverlay from './components/ImageOverlay';
// import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <main>
     <ImageOverlay></ImageOverlay>
     <DivOverlay></DivOverlay>
     </main>
    
    </div>
  );
}

export default App;
