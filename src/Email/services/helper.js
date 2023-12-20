import axiosInstance from "../services/axios";
import axios from "axios";
const SERVER = "https://api.dreampotential.org/";
const token = localStorage.getItem("Token");

export const getMails = async () => {
  try {
    const response = await axios
      .get(`${SERVER}mailapi/get-emails/saurabh@agentstat.com/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error("Failed to upload video");
        }
      });
    return response;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
  }
};

export const sentMail = async (payload) => {
  try {
    const response = await axios
      .post(`${SERVER}mailapi/send-email/`, payload, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error("Failed to upload video");
        }
      });
    return res;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
  }
};
