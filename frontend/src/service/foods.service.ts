import axios from 'axios'



const apiHandler = axios.create({
    baseURL: 'http://localhost:4848/',
    withCredentials: true
})



export const getFoods = async() => {
    const response = await apiHandler.get('/')

    return response
}



export const makeOrder = async(props:Object) => {
    const response = await apiHandler.post('/order')
console.log(props)
    return response
}


