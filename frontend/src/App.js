import "./App.css";
import BookLaunch from "./components/BookLaunch";
import DivOverlay from "./components/DivOverlay";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageOverlay from "./components/ImageOverlay";
import ProductCard from "./components/ProductCard";
import BookModal from "./components/BookModal";
import BookStore from "./components/BookStore";
import AuthorPage from "./components/AuthorPage";
import AuthorStory from "./components/AuthorStory";
// import BookDetails from './components/BookDetails';
// import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <ImageOverlay></ImageOverlay>
        <DivOverlay></DivOverlay>
        <BookLaunch></BookLaunch>
        <ProductCard></ProductCard>
        <Footer></Footer>
        <BookModal></BookModal>
        <BookStore></BookStore>
        <AuthorPage></AuthorPage>
        <AuthorStory></AuthorStory>
        {/* <BookDetails></BookDetails> */}
      </main>
    </div>
  );
}

export default App;
