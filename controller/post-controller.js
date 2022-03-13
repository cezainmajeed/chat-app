const {data} = require("../dummyData.js")

const getAllChats = (req,res)=> {
  let chats;
  try {
    chats=data;
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json(error);
  }
}


module.exports = {
  getAllChats
};
