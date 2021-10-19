 import { setup } from 'axios-cache-adapter'

const api = setup({
    baseURL: 'https://randomuser.me/api',
    cache: {
         maxAge: 15 * 60 * 1000  
        }      
})

export default api
