import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;





//api_key=  c55491832e0befcc7f369b4358242974&language=pt-BR