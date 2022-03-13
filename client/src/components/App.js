import React,{ useState, useEffect } from "react";
import { getAllChats } from "../service/api";

function App()
{
  let [chats,setChats]=useState([]);

  useEffect(()=>{
    const fetchdata= async()=>{
      let data=await getAllChats();
      console.log(data);
      setChats(data);
    }
    fetchdata();
  },[chats]);

  return (
    <>
      {chats[0]}
    </>
  );
}

export default App;
