import axios from "axios";

const getAll = async ({ token }) => {
  try {
    console.log(token, "in request");

    const response = await axios.post(
      `${process.env.REACT_APP_REQUEST_URI}?cmd=get_customer_list`,
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data, "this is the response data for get all list");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const Update = async ({ token, data }) => {
  try {
    console.log("postData,", data);

    const response = await axios.post(
      `${process.env.REACT_APP_REQUEST_URI}?cmd=update&uuid=${data.uuid}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data, "this is the response data");

    return response.status;
  } catch (error) {
    console.error(error);
  }
};

const Delete = async ({ token, data }) => {
  try {
    console.log("postData,", data);

    const response = await axios.post(
      `${process.env.REACT_APP_REQUEST_URI}?cmd=delete&uuid=${data.uuid}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data, "this is the response data");

    return response.status;
  } catch (error) {
    console.error(error);
  }
};

export { Update, Delete, getAll };
