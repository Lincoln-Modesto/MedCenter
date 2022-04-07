import { setup } from 'axios-cache-adapter'

const api = setup({
    baseURL: process.env.REACT_APP_BASE_URL, // => https://randomuser.me/api
    cache: {
         maxAge: 15 * 60 * 1000  
        }      
})

export default api
