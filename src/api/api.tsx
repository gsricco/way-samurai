import axios from "axios";

// export type getUsersPropsType = {
//     currentPage:number
//     pagesSize:number
// }

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'0a6bf10a-0783-484b-91da-65d7e9fda051'
    }
})

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const userAPI = {
    getUsers(currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => response.data);
    },
    deleteUsers (id= 0){
        return instance.delete(`follow/${id}`)
    },
    postUsers (id= 0){
        return instance.post(`follow/${id}`)
    }
}

// export const deleteUsers = (id= 0) =>{
//    return instance.delete(`follow/${id}`)
// }
// export const postUsers = (id= 0) =>{
//    return instance.post(`follow/${id}`)
// }
