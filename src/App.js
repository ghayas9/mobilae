import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Header/>

      {/* Page */}
          <Home/>
      {/* Page */}

      <Footer/>
      
      <img src={require("./assets/Img/test.png")} alt="" srcset="" 
      style={{width:'100%'}}
      />
    </>
  );
}

export default App;
