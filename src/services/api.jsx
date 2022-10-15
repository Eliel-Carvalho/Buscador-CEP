import axios from 'axios'

//28480000/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/" //NÃO VAI MUDAR URL BASE DO NOSSO PROJETO
})

export default api