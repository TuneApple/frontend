import axios from "axios";



async function postLogin(username, password) {

    const formData  = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const customConfig = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    const res = await axios.post('http://192.168.0.111:8000/auth/sing-in', formData, customConfig)

    return res
}

export default postLogin;