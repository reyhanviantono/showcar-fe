import axios from "axios";
import { toast } from "react-toastify";
import { saveToken, saveUser } from "./LocalStorage";

var apiURL = "http://localhost:8000/api";
// var apiURL = "https://028b-110-138-82-238.ngrok-free.app/api";

export const Login = async (payload) => {
  try {
    const response = await axios.post(`${apiURL}/login`, payload);
    if (response.status > 299) {
      toast.error("terjadi masalah");
      return null;
    }
    saveUser(response.data.user);
    saveToken(response.data.token);
    return response;
  } catch (error) {
    toast.error("username atau password salah");
    return null;
  }
};

export const Register = async (payload) => {
  try {
    const response = await axios.post(`${apiURL}/register`, payload);
    if (response.status > 299) {
      toast.error("terjadi masalah");
      return null;
    }
    return response;
  } catch (error) {
    toast.error(error.message);
    return null;
  }
};

export const ListMobil = async () => {
  try {
    const response = await axios.get(`${apiURL}/list/car`);
    if (response.status > 299) {
      toast.error("terjadi masalah");
      return null;
    }
    return response.data.data;
  } catch (error) {
    return toast.error(error.message);
  }
};

export const DetailMobil = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/list/car/${id}`);
    if (response.status > 299) {
      toast.error("terjadi masalah");
      return null;
    }
    return response.data.data;
  } catch (error) {
    return toast.error(error.message);
  }
};

export const GetRecomended = async (id, brand) => {
  try {
    const response = await axios.get(
      `${apiURL}/list/recomendation/${id}/${brand}`
    );
    if (response.status > 299) {
      toast.error("terjadi masalah");
      return null;
    }
    return response.data.data;
  } catch (error) {
    return toast.error(error.message);
  }
};

export const Rating = async (userid, carid, rating) => {
  try {
    const data = {
      userId: userid,
      carsId: carid,
      rating: rating,
    };
    const response = await axios.post(`${apiURL}/rating`, data);
    if (response.status > 299) {
      toast.error("terjadi masalah");
      return null;
    }
    // console.log("=============>", response.data);
    // return response.data.data;
  } catch (error) {
    console.log("=========ini=====?", error.code);
    if (error.code === "ERR_BAD_REQUEST") {
      toast.error("anda sudah melakukan rate pada mobil ini");
      return null;
    } else {
      return null;
    }
  }
};

export const Comment = async (userid, carid, message) => {
  try {
    const data = {
      userId: userid,
      carId: carid,
      message: message,
    };
    const response = await axios.post(`${apiURL}/comment`, data);
    if (response.status > 299) {
      toast.error("terjadi masalah");
      return null;
    }
    // console.log("=============>", response.data);
    // return response.data.data;
  } catch (error) {
    console.log("=========ini=====?", error.code);
    if (error.code === "ERR_BAD_REQUEST") {
      toast.error("anda sudah melakukan rate pada mobil ini");
      return null;
    } else {
      return null;
    }
  }
};
