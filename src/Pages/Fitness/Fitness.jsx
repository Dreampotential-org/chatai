import axios from "axios";
import React, { useEffect } from "react";

const Fitness = () => {
  const SERVER = "https://api.dreampotential.org/ashe/start";
  const SERVER2 = "https://api.dreampotential.org/ashe/session_point";

  async function start_session_api() {
    var form = { device_id: 15664 };

    try {
      const response = await axios.post(`${SERVER2}`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      if (response.status === 200) {
        console.log("successfully", response);
      } else {
        console.log("Error", response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // start_session_api();
  }, []);

  return (
    <div>
      <h1>Successs</h1>
    </div>
  );
};

export default Fitness;
