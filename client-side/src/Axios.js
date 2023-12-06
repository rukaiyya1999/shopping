import axios from "axios";

const BASE_URL = "http://localhost:8000/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2NhNjI4ZmZiYWQ3YTA5MWI1Y2Y3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDc1MDQ1OCwiZXhwIjoxNjcxMDA5NjU4fQ.YelU0irmNwm0g-KsdzDLvzLU7lgkEeRqplMdAE20KGA"
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})