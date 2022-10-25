import axios from "axios";
const Backend_Url = process.env.REACT_APP_BACKEND_URL;

const url = REACT_APP_BACKEND_URL_LOCAL|| REACT_APP_BACKEND_URL;
export const addUser = async (data) => {
  try {
    await axios.post(`${url}/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};
export const getUsers = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers API ", error);
  }
};
export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const newMessage = async (data) => {
  try {
    let response = await axios.post(`${url}/message/add`, data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const getMessage = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const uploadFile = async (data) => {
  try {
      return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
      console.log('Error while calling file upload API ', error);
  }
}
