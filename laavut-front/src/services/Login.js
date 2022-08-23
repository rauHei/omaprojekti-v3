import axios from 'axios'
const baseUrl = '/api/users/login'



const loginUser = async credentials => {
    try {
        const response = await axios.post(baseUrl, credentials)
        return response.data

    } catch (error) {
        console.log('errorr', error);

    }
}


export default { loginUser }