
import './App.css';
// import Home from './components/Home';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Fun from './components/subfolder/Fun';
// import ArrFun from './components/subfolder/ArrFun';
import NavBar from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Product from './stateandprops/Product';
import Emp from './stateandprops/Emp';
import Student from './stateandprops/Student';
import IncDcr from './components/IncDcr';
import Chaneal from './components/Chaneal';


function App() {
  return (
    <div className="App">
      {/* <Home/>
      <Main/>
      <Footer/>
      <Fun/>
      <ArrFun/>   */}
      {/* <NavBar /> */}
      {/* <h1>product details</h1>
     <Product id='1' name="nike" price="3500"/>
     <Product id='2' name="nike" price="3500"/>
     <Product id='3' name="nike" price="3500"/>
     <Product id='4' name="nike" price="3500"/>
     <Product id='5' name="nike" price="3500"/>
      */}
      {/* <Emp/> */}
      {/* <h1>student information</h1>
      <Student name="siva sankar reddy" id="1001" branch="mca" addres="hyd" />
      <Student name="siva " id="1002" branch="mca" addres="hyd"/>

      <Student name="reddy" id="1003" branch="mca" addres="hyd"/>

      <Student name="siva sankar " id="1004" branch="mca" addres="hyd"/> */}
      {/* <IncDcr/> */}
      <Chaneal/>


    </div>
  );
}

export default App;
