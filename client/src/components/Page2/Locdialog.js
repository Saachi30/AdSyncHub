import React from 'react'
import './Locdialog.css'
import { getAgencyinfo, updateLocation } from '../../service/api';
import {Link} from 'react-router-dom';

const Locdialog = (props) => {
  const [city, setCity]=React.useState('');
  function handleChange(event){
    setCity(event.target.value);
  }
  // Locdialog.js
const handleClick = async()=>{
  props.setloc(city);

  // Update the data structure sent to the backend
  const data = {
    city: city,
    cname: props.cname,
  };

  // Use async/await to handle the asynchronous call
  const response = await updateLocation(data);

  if (response) {
    console.log(response); // Handle the response as needed
    try {
      let agencyInfo = await getAgencyinfo();
      props.setAgencyData(agencyInfo);
      console.log(agencyInfo);
    } catch (error) {
      console.error(error);
    }
  }
}


  return (
    <div>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Enter your location</h5>
             
            </div>
            <div class="modal-body">
              <input type="text" className="form-control" name='comploc' placeholder='Enter city' onChange={handleChange}/>
            </div>
            <div class="modal-footer">
             <Link to='/agencieslist'><button type="button" class="btn btn-primary dialogbtn" onClick={handleClick}>Save changes</button></Link> 

            </div>

        </div>
      </div>
    </div>
  )
}

export default Locdialog
