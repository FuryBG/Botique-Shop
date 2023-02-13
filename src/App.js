import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ListProduct from './components/ListProduct/ListProduct';
import Product from './components/Product/Product';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/man-collection' element= {<ListProduct />}/>
          <Route path='/woman-collection' element= {<ListProduct />}/>
          <Route path='/product/:id' element= {<Product />} />
          <Route path='/offers' element= {<ListProduct />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
