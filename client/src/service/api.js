import axios from "axios";

const URL = "http://localhost:8000";

export const getAllChats = async()=>{
  try{
    let response = await axios.get(`${URL}/chat`);
    return response.data;
  } catch(err) {
    console.log("Error while calling getAllChats()",err);
  }
};
