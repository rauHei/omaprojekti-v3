import axios from 'axios'
const baseUrl = '/api/feedback'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {

    const request = axios.get(baseUrl)

    const response = await request
    return response.data
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }
    const newPalaute = {
        name: newObject.name,
        state: newObject.state,
        feedback: newObject.feedback,
        date: newObject.date,
        userId: newObject.userId
    }
    try {
        const response = await axios.post(baseUrl, newPalaute, config)
        return response

    } catch (error) {
        alert('Syötä tiedot kaikkiin kenttiin!')
    }
}

const getByid = async (id) => {
    const request = await axios.get(`${baseUrl}/${id}`)
    return request
}

const update = async (id, newObject) => {
    const config = {
        headers: { Authorization: token },
    }

    const updatedFb = {
        name: newObject.name,
        state: newObject.state,
        feedback: newObject.feedback,
        date: newObject.date,
    }

    const request = await axios.put(`${baseUrl}/${id}`, updatedFb, config)
    return request.data


}

const remove = async (id) => {
    const config = {
        headers: { Authorization: token },
    }

    const request = await axios.delete(`${baseUrl}/${id}`, config)
    return request.then((response) => response.id)

}



export default { getAll, create, update, remove, setToken, getByid }