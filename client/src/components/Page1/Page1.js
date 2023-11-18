import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Page1.css';
import { getId, postCompInfo } from '../../service/api.js';
import Carousel from './Carousel.js';

const Page1 = (props) => {
  const navigate=useNavigate();
  const [register, setRegister] = React.useState(true);
  const [visible, setVisible] = React.useState(true);
  function handleChange(event) {
    props.setcname(event.target.value);
  }

  const [formData, setFormData] = React.useState({
    company_id: '',
    company_name: '',
    contact_no: '',
    email_id: '',
    location: ''
  });


  function handleClick() {


  }
  function handleYes() {
    setRegister(true);
    setVisible(false)


  }
  function handleNo() {
    setRegister(false);
    setVisible(false)
  }

  const handleChangeF = (event) => {
    console.log(event.target.name);
    if (event.target.name === 'company_name') {
      handleChange(event);
    }
    setFormData({ ...formData, [event.target.name]: event.target.value });

  }
  const handleClickF = async () => {
    await postCompInfo(formData);
    console.log("post req successful");
    navigate('/select');
    const id=await getId();
    console.log(id);
    alert(`Your unique ID is "${id}". You will have to use this ID while logging in next time`);
   
  }


  return (
    <>
   
      <div className='outerpg1'>
      <div className='carouselbox'>
      <Carousel/>
    </div>
    <div className='outerlower'>
        {visible && <div className='register upperpg1'>Is your company already registered?
        <div>
          <Link to='/registered'><button onClick={handleYes} className='btn btn-primary pg1btn'>Yes</button></Link>
          <button onClick={handleNo} className='btn btn-primary pg1btn'>No</button>
          </div>
        </div>}
        {!visible && <div>
          {register ? <div className='lowerpg1'>
          <div className='formreg'>
          <input type="text" className="form-control" name='company_id' placeholder='Enter company id' />
            <input type="text" className="form-control" name='company_name' onChange={handleChange} placeholder='Enter company name' />
            </div>
            <Link to='/select'><button className='btn btn-primary' onClick={handleClick}>Save</button></Link>
          </div>
            : <div className='lowerpg1'>
            <div className='formreg'>
              <input type="text" className="form-control" name='company_name' onChange={handleChangeF} placeholder='Enter company name' />
              <input type="text" className="form-control" name='contact_no' onChange={handleChangeF} placeholder='Enter contact' />
              <input type="text" className="form-control" name='email_id' onChange={handleChangeF} placeholder='Enter email id' />
              </div>
              <Link to='/select'><button className='btn btn-primary' onClick={handleClickF}>Save</button></Link>
            </div>}
        </div>}
        </div>
      </div>
    </>
  )
}

export default Page1;
