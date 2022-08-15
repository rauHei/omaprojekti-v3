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



// const IsLoggedin = async () => {
//     const response = await axios.get(baseUrl)
//     return response.data
// }

// const LogOut = async (credentials) => {
//     const config = {
//         headers: { Authorization: token },
//     }
//     const res = await axios.delete(baseUrl, credentials, config)
//     return res.data
// }



export default { loginUser }