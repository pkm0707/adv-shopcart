import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Shop } from './components/Shop';
import { Contact } from './components/contact';
import { Cart } from './components/Cart';
import { ShopContextProvider } from './components/Shop-context';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
