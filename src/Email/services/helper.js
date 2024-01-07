import axiosInstance from "../services/axios";
import axios from "axios";
const SERVER = "https://api.dreampotential.org/";
const token = localStorage.getItem("Token");
const USER = "saurabh@agentstat.com";

export const getMails = async () => {
  try {
    const response = await axios
      .get(`${SERVER}mailapi/get-emails/${USER}/`, {
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
      .post(`${SERVER}mailapi/set-read/${payload.id}/?`, {
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
      .post(`${SERVER}mailapi/set-unread/${payload.id}/`, {
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
      .delete(`${SERVER}mailapi/delete-email/${payload.id}/`, {
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
      .post(`${SERVER}mailapi/undelete-email/${payload.id}/`, {
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

export const getSentMails = async (payload) => {
  try {
    const response = await axios
      .get(`${SERVER}mailapi/get-cemails/${USER}/`, {
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
