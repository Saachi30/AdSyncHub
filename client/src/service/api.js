import axios from 'axios';

const url="http://localhost:8000";

export const getPropertyInfo=async ()=>{
    try{
       const response= await axios.get(`${url}/properties`);
       //console.log(response.data);
       return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}
export const postCompInfo=async(formData)=>{
try{
    await axios.post(`${url}/`, formData);
    //console.log(response.data);
 }
 catch(error){
     console.log(error);
     return null;
 }

}

export const updateLocation = async (data) => {
    try {
      const response = await axios.post(`${url}/agencyinfo`, data);
      return response.data; 
    } catch (error) {
      console.error(error);
      return null;
    }
  };

// service/api.js
export const getAgencyinfo = async () => {
    try {
      const response = await axios.get(`${url}/agencyinfo`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Rethrow the error to handle it where the function is called
    }
  };
  
  export const getId = async () => {
    try {
      const response = await axios.get(`${url}/select`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; 
    }
  };


export const checkUser = async (data) => {
    try {
      const response = await axios.post(`${url}/registered`, data);
      return null; 
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  // export const getUserLogin=async()=>{
  //   try {
  //     const response = await axios.get(`${url}/registered`);
  //     return null;
  //   } catch (error) {
  //     console.log(error);
  //     return error;
  //   }
  // }