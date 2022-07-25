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
    getUsersProfile(id: number) {
        console.warn('Obsolete method. Please used profileAPI object')
        // return instance.get(`profile/${id}`)
        return profileAPI.getUsersProfile(id)
    }

}
export const profileAPI = {
    getUsersProfile(id: number) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id: number) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }

}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}
