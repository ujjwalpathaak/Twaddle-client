import axios from "axios";

const url = "http://localhost:5000" || "http://localhost:5000";
export const addUser = async (data) => {
  try {
    await axios.post(`http://localhost:5000/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};
export const getUsers = async () => {
  try {
    let response = await axios.get(`http://localhost:5000/users`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers API ", error);
  }
};
export const setConversation = async (data) => {
  try {
    await axios.post(`http://localhost:5000/conversation/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`http://localhost:5000/conversation/get`, data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const newMessage = async (data) => {
  try {
    let response = await axios.post(`http://localhost:5000/message/add`, data);
    console.log(response)
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const getMessage = async (id) => {
  try {
    let response = await axios.get(`http://localhost:5000/message/get/${id}`);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const uploadFile = async (data) => {
  try {
      return await axios.post(`http://localhost:5000/file/upload`, data);
  } catch (error) {
      console.log('Error while calling file upload API ', error);
  }
}
