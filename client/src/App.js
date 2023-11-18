import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import React from 'react'
import Propertyinfo from './components/Property/Propertyinfo';
import Locdialog from './components/Page2/Locdialog';
import Agencyinfo from './components/Agency/Agencyinfo';
import Registered from './components/Page1/Registered';
import Footer from './components/Footer';


function App() {
  const [cname, setcname] = React.useState('');
  const [loc, setloc] = React.useState('');
  const [propertyData, setPropertyData] = React.useState(null);
  const [agencyData, setAgencyData]=React.useState(null);

  return (
    <>
      <div className="App" id='outerouter'>

        <div className='outermainpg'>
          <div className='lowermainpg'>
          
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Page1 cname={cname} setcname={setcname}/>}></Route>
                <Route path='/registered' element={<Registered cname={cname} setcname={setcname}/>}></Route>
                <Route path='/select' element={<Page2 loc={loc} setloc={setloc} propertyData={propertyData} setPropertyData={setPropertyData} cname={cname}/>}></Route>
                <Route path='/propertyinfo' element={<Propertyinfo data={propertyData} cname={cname}></Propertyinfo>}></Route>
                <Route path='/agencyinfo' element={<Locdialog loc={loc} setloc={setloc} cname={cname} agencyData={agencyData} setAgencyData={setAgencyData}></Locdialog>}></Route>
                <Route path='/agencieslist' element={<Agencyinfo data={agencyData} cname={cname}></Agencyinfo>}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
