import axios from 'axios'
const baseUrl = '/api/users/register'


let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

//hakee kaikki käyttäjät
const getAllusers = async () => {
    const request = axios.get(baseUrl)
    try {
        const response = await request
        return response.data
    } catch (error) {
        console.log('Something went wron with axios', error);
    }
}

//luo käyttäjän
const createUser = async (newObject) => {

    const newUser = {
        username: newObject.username,
        name: newObject.name,
        password: newObject.password,

    }
    try {
        const response = await axios.post(baseUrl, newUser)
        return response.data

    } catch (error) {
        alert('Käyttäjänimi on jo käytössä, valitse uusi käyttäjänimi!!', error);
    }
}

//päivittää käyttäjän tiedot
const updateUser = async (id, newObject) => {

    const config = {
        headers: { Authorization: token },
    }
    const newObject2 = {
        name: newObject.name,
        username: newObject.username,
        password: newObject.password,
        pic: newObject.pic

    }
    try {
        const request = await axios.put(`${baseUrl}/${id}`, newObject2, config)
        return request
    } catch (error) {
        console.log('Something went wron with axios', error);
    }
}
//hakee tietyn käyttäjän
const getByid = async (id) => {
    const config = {
        headers: { Authorization: token },
    }
    try {
        const request = await axios.get(`${baseUrl}/${id}`, config)
        return request.data

    } catch (error) {
        console.log('Something went wron with axios', error);
    }
}

//päivittää käyttäjän valokuvanS
const updateUserPhoto = async (id, data) => {

    const config = {
        headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data"
        }
    }


    try {
        const request = await axios.post(`${baseUrl}/${id}`, data, config)
        return request.data

    } catch (error) {
        console.log('Something went wron with axios', error);
    }

}



export default { getAllusers, createUser, updateUser, setToken, getByid, updateUserPhoto }