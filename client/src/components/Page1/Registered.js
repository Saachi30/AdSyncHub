import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Page1.css';
import { checkUser, getId, getUserLogin, postCompInfo } from '../../service/api.js';
import Carousel from './Carousel.js';

const Registered = (props) => {
  const navigate=useNavigate();
  
  const [formData, setFormData] = React.useState({
    company_id: '',
    company_name: '',
  });

  const visible=false;
  function handleChange(event) {
  
    setFormData({ ...formData, [event.target.name]: event.target.value });

  }
  function handleChangeName(event){
    props.setcname(event.target.value);
    handleChange(event);
  }
  

  async function handleClick() {
    const loginerror=await checkUser(formData);
    console.log("post req successful");

    if(loginerror){
    alert(`Invalid company name or id!`);
    navigate('/');

    }
    else{
        navigate('/select');
    }

  }

  


  return (
    <>
   
      <div className='outerpg1'>
      <div className='carouselbox'>
      <Carousel/>
    </div>
    <div className='outerlower'>
        {!visible && <div>
         <div className='lowerpg1'>
          <div className='formreg'>
          <input type="text" className="form-control" name='company_id' placeholder='Enter company id' onChange={handleChange}/>
            <input type="text" className="form-control" name='company_name' onChange={handleChangeName} placeholder='Enter company name' />
            </div>
            <Link to='/select'><button className='btn btn-primary' onClick={handleClick}>Save</button></Link>
          </div>
        </div>}
        </div>
      </div>
    </>
  )
}

export default Registered;
