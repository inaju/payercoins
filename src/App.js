import './App.css';
import SideBar from './components/SideBar';
import Navbar from './containers/Navbar';
import NavbarMobile from './containers/NavbarMobile';
import Donations from './pages/Donations';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <SideBar />
    
      <div className="app__main">
   
      <NavbarMobile />
      <Navbar />
      <Donations />

      </div>
      
    </div>
  );
}

export default App;
