import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getId, getPropertyInfo } from '../../service/api.js';
import './Page2.css'
import Hellotext from '../../Hellotext.js';

const Page2 = (props) => {
  const navigate = useNavigate();

  async function handleproperty() {
    console.log("Inside handleproperty");
    let data = await getPropertyInfo();
    console.log(data);
    props.setPropertyData(data);
    navigate('/propertyinfo'); // Use navigate to redirect to /propertyinfo
  }

  function handleagency() {
    navigate('/agencyinfo'); // Use navigate to redirect to /agencyinfo
  }

  return (
    <>
    <Hellotext cname={props.cname}/>
      <div className='outerpg2'>
        <div className='upperpg2'>
          Choose how you would like to display your ad
        </div>
        <div className='lowerpg2'>
          <button className='btn btn-primary pg2btn' onClick={handleproperty}>
            <div className='upperbtn'>Direct</div>
            <div className='lowerbtn'>Display your ad by directly contacting property owners of different cities</div>
          </button>
          <button className='btn btn-primary pg2btn' onClick={handleagency}>
            <div className='upperbtn'>Via agency</div>
            <div className='lowerbtn'>Display your ad via your nearest Ad agency with best ratings</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Page2;
