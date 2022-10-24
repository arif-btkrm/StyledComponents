import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Announcement from "./components/Pages/announcement";
import Cart from "./components/Pages/cart";
import Collections from "./components/Pages/collections";
import Error from "./components/Pages/error";
import Home from './components/Pages/home';
import Profile from "./components/Pages/profile";



function App() {
  const [openModal, setOpenModal] = useState(false);

  return  (<BrowserRouter>

{openModal && <Modal modalController={setOpenModal} />}
      <Header modalController={setOpenModal} />

    <Routes>
      <Route path= "/" element={<Home/> }/>
      <Route path= "/collections" element={<Collections/> }/>
      <Route path= "/cart" element={<Cart/> }/>
      <Route path= "/announcement" element={<Announcement/> }/>
      <Route path= "/profile" element={<Profile/> }/>
      <Route path= "*" element={<Error/> }/>

    </Routes>
    <Footer/>
  </BrowserRouter>
  );
   
 
}

export default App;
