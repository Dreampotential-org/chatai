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
    return response;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
  }
};

export const setRead = async (payload) => {
  try {
    // https://api.dreampotential.org/mailapi/set-read/7/?
    const response = await axios
      .get(`${SERVER}mailapi/set-read/${payload.id}/?`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
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

export const setUnRead = async (payload) => {
  try {
    const response = await axios
      .get(`${SERVER}mailapi/set-unread/${payload.id}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
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

export const deleteMail = async (payload) => {
  try {
    const response = await axios
      .get(`${SERVER}mailapi/delete-email/${payload.id}/`, {
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

export const unDeleteMail = async (payload) => {
  try {
    const response = await axios
      .get(`${SERVER}mailapi/undelete-email/${payload.id}/`, {
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
