import axios from "axios";

const Login = async ({ username, password }) => {
  try {
    const postData = {
      login_id: username,
      password: password,
    };

    console.log("postData,", postData);

    const response = await axios.post(process.env.REACT_APP_LOGIN_URI, {
      login_id: "test@sunbasedata.com",
      password: "Test@123",
    });

    console.log(response.data, "this is the response data");

    return response.data.access_token;
  } catch (error) {
    console.error(error);
  }
};

export default Login;
