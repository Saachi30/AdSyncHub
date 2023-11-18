import React from 'react'
import './Agencyinfo.css'
const Agencytable = (props) => {
  return (

    <tbody>
      <tr className='agencyrow'>
        <td>{props.one}</td>
        <td style={{color:"green"}}>{props.two}</td>
        <td>{props.three}</td>
        <td>{props.four}</td>
      </tr>
    </tbody>

  )
}

export default Agencytable;
