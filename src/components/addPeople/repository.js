import axios from "axios";

const Create = async ({ token, data }) => {
  try {
    console.log("postData,", data);

    const response = await axios.post(
      "http://localhost:5000/items?cmd=create",
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

export default Create;
