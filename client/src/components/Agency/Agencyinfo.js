import React from 'react';
import Agencytable from '../Agency/Agencytable.js';
import './Agencyinfo.css';
import Hellotext from '../../Hellotext.js';

const Agencyinfo = (props) => {
  const data = props.data;

  // Check if data is not null or undefined before mapping
  if (!data) {
    console.error('Data is null or undefined');
    return null; // or return some default content if needed
  }

  console.log(data);

  return (
    <>
    <Hellotext cname={props.cname}/>
    <div className='agencypage'>
      <div className='agencytext'>List of available agencies along with rating and contact</div>

      <table>
        <thead>
          <tr>
            <th scope="col">Agency Name</th>
            <th scope="col">Rating</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
    
          {data.map((row, index) => (
            <Agencytable
              key={index} // Ensure each item in the array has a unique key
              one={row.Agency_name}
              two={row.Rating}
              three={row.Contact_no}
              four={row.Location}
            ></Agencytable>
          ))}
    
      </table>
    </div>
    </>
  );
};

export default Agencyinfo;
