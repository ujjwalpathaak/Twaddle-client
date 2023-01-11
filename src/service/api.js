import axios from "axios";
const DEV_SERVER = process.env.REACT_APP_DEV_SERVER;
const PROD_SERVER = process.env.REACT_APP_PROD_SERVER;

export const addUser = async (data) => {
  try {
    await axios.post(`${PROD_SERVER}/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};
export const getUsers = async () => {
  try {
    let response = await axios.get(`${PROD_SERVER}/users`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getUsers API ", error);
  }
};
export const setConversation = async (data) => {
  try {
    await axios.post(`${PROD_SERVER}/conversation/add`, data);
  } catch (err) {
    console.log(err.message);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${PROD_SERVER}/conversation/get`, data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const newMessage = async (data) => {
  try {
    let response = await axios.post(`${PROD_SERVER}/message/add`, data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const getMessage = async (id) => {
  try {
    let response = await axios.get(`${PROD_SERVER}/message/get/${id}`);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};
export const uploadFile = async (data) => {
  try {
    let response = await axios.post(`${PROD_SERVER}/file/upload`, data);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log("Error while calling file upload API ", error);
  }
};
