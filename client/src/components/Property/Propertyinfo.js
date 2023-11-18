import React from 'react';
import './Propertyinfo.css';
import Propertytable from './Propertytable';
import Hellotext from '../../Hellotext';

const Propertyinfo = (props) => {
    const data=props.data;
    return (
        <>
        <Hellotext cname={props.cname}/>
        <div className='propertypage'>
        <div className='proptext'>List of available properties along with owner contact</div>
        
            <table>
                <thead>
                    <tr>
                        <th scope="col">Owner name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Area covered in sqft</th>
                        <th scope="col">No of Hoardings</th>
                        <th scope="col">Owner contact</th>
                    </tr>
                </thead>
                {data.map((row, index)=>{
                    return <Propertytable one={row.owner_name} two={row.Place} three={row.Area_covered_in_sqft} four={row.No_of_Hoardings} five={row.owner_contact}></Propertytable>
                })}
               
            </table>
        </div>
        </>
    )
}

export default Propertyinfo;
