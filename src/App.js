import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbarfooter/navbar';
import Footer from './components/navbarfooter/footer';
import Homepage from './components/page/Homepage';
import Event from './components/page/Event';
import Daftar from './components/page/Daftar';
import Keranjang from './components/page/Keranjang';
import { Dashpenjual } from './components/page/Dashpenjual';
import { Dashpembeli } from './components/page/Dashpembeli';
import { Checkout } from './components/page/Checkout';
import { Profile } from './components/page/Profile';
import { Galeri } from './components/page/Galeri';
import { Admin } from './components/page/Admin';
import { Loginadm } from './components/page/Loginadm';
import { Route, Routes } from 'react-router-dom';
import DetailPost from './components/carouselcardpagin/Detailpage';


function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element ={<Homepage/>}/>
        <Route path="/galeri" element={<Galeri/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/daftar" element={<Daftar/>}/>
        <Route path='/keranjang' element={<Keranjang/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="/dpenjual" element={<Dashpenjual/>}/>
        <Route path="/dpembeli" element={<Dashpembeli/>}/>
        <Route path="/loginadmin" element={<Loginadm/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/post/:id" element={<DetailPost />} />
      </Routes>
      <Footer />
   </>
  );
}

export default App;
