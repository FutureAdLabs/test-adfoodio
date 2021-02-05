import axios from 'axios'



const apiHandler = axios.create({
    baseURL: 'http://localhost:4848/',
    withCredentials: true
})



export const newUser = (credentials: Object) => {
    apiHandler.post('/newUser', credentials)
    console.log(credentials)
}





