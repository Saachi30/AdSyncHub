import React from 'react'
import './Propertyinfo.css'
const Propertytable = (props) => {
  return (

    <tbody>
      <tr className='proprow'>
        <td className='propdata'>{props.one}</td>
        <td className='propdata'>{props.two}</td>
        <td className='propdata'>{props.three}</td>
        <td className='propdata'>{props.four}</td>
        <td className='propdata'>{props.five}</td>
      </tr>
    </tbody>

  )
}

export default Propertytable;
