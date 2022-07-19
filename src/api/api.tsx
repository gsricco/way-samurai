import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0a6bf10a-0783-484b-91da-65d7e9fda051'
    }
})

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export const userAPI = {
    getUsers(currentPage: number, pagesSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => response.data);
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    },
    // setAuthUserData(){
    //     return instance.get('auth/me')
    // },
    getUsersProfile(id:number){
        return instance.get(`profile/${id}`)
    }

}

export const authAPI = {
    me(){
        return instance.get('auth/me')
    }
}
