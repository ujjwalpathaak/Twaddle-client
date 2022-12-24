import axios from "axios";
// "http://localhost:50f00/"
// "http://localhost:50f00/"
export const addUser = async (data) => {
  try {
    await axios.post(`https://twaddle-server.onrender.com/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};
export const getUsers = async () => {
  try {
    let response = await axios.get(`https://twaddle-server.onrender.com/users`);
    console.log("reached - get users")
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers API ", error);
  }
};
export const setConversation = async (data) => {
  try {
    await axios.post(`https://twaddle-server.onrender.com/conversation/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`https://twaddle-server.onrender.com/conversation/get`, data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const newMessage = async (data) => {
  try {
    let response = await axios.post(`https://twaddle-server.onrender.com/message/add`, data);
    console.log(response)
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const getMessage = async (id) => {
  try {
    let response = await axios.get(`https://twaddle-server.onrender.com/message/get/${id}`);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const uploadFile = async (data) => {
  try {
      return await axios.post(`https://twaddle-server.onrender.com/file/upload`, data);
  } catch (error) {
      console.log('Error while calling file upload API ', error);
  }
}
