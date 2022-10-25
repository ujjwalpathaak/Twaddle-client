import axios from "axios";
// const Backend_Url = process.env.REACT_APP_BACKEND_URL;

const url = "http://localhost:5000" || "https://twaddle-server.herokuapp.com";
export const addUser = async (data) => {
  try {
    await axios.post(`https://twaddle-server.herokuapp.com/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};
export const getUsers = async () => {
  try {
    let response = await axios.get(`https://twaddle-server.herokuapp.com/users`);
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers API ", error);
  }
};
export const setConversation = async (data) => {
  try {
    await axios.post(`https://twaddle-server.herokuapp.com/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`https://twaddle-server.herokuapp.com/conversation/get`, data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const newMessage = async (data) => {
  try {
    let response = await axios.post(`https://twaddle-server.herokuapp.com/message/add`, data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const getMessage = async (id) => {
  try {
    let response = await axios.get(`https://twaddle-server.herokuapp.com/message/get/${id}`);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const uploadFile = async (data) => {
  try {
      return await axios.post(`https://twaddle-server.herokuapp.com/file/upload`, data);
  } catch (error) {
      console.log('Error while calling file upload API ', error);
  }
}
